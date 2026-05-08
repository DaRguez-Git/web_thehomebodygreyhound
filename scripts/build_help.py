#!/usr/bin/env python3
"""
Build the static pages that wrap the markdown sources in
assets/web/help and assets/PRIVACY_POLICY*.md with the site's
shared chrome.

Output layout
-------------

  /oficio/help/                       Spanish help index
  /oficio/help/<slug>/                Spanish help page per slug
  /en/oficio/help/                    English help index
  /en/oficio/help/<slug>/             English help page per slug
  /homebody/terms/                    Spanish privacy policy
  /en/homebody/terms/                 English privacy policy

The script is idempotent: it overwrites whatever was previously
generated. Run from the repo root:

    python3 scripts/build_help.py
"""

from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path

import markdown

ROOT = Path(__file__).resolve().parent.parent
HELP_SRC_ES = ROOT / "assets" / "web" / "help"
HELP_SRC_EN = ROOT / "assets" / "web" / "help" / "en"
HELP_OUT_ES = ROOT / "oficio" / "help"
HELP_OUT_EN = ROOT / "en" / "oficio" / "help"
PRIVACY_SRC_ES = ROOT / "assets" / "PRIVACY_POLICY.md"
PRIVACY_SRC_EN = ROOT / "assets" / "PRIVACY_POLICY_EN.md"
PRIVACY_OUT_ES = ROOT / "homebody" / "terms"
PRIVACY_OUT_EN = ROOT / "en" / "homebody" / "terms"


@dataclass(frozen=True)
class Locale:
    code: str  # html lang attribute
    site_title: str
    nav_work: str
    nav_help: str
    nav_contact: str
    breadcrumb_home: str
    breadcrumb_help: str
    help_index_title: str
    help_index_lede: str
    back_to_index: str
    footer: str
    home_href: str  # how to link to the language home from help/<slug>/
    home_href_index: str  # how to link to the language home from help/
    legal_breadcrumb: str
    legal_title: str


LOCALE_ES = Locale(
    code="es",
    site_title="The Homebody Greyhound",
    nav_work="Trabajo",
    nav_help="Ayuda de Oficio",
    nav_contact="Contacto",
    breadcrumb_home="Inicio",
    breadcrumb_help="Ayuda de Oficio",
    help_index_title="Ayuda de Oficio",
    help_index_lede=(
        "Cada bloque te explica cómo configurar una integración: dónde sacar "
        "la API key, qué cuesta, y los pequeños matices que evitan los "
        "errores más comunes. Si una entrada dice <em>sin API key</em>, "
        "basta con activar el toggle en la app."
    ),
    back_to_index="← Volver al índice de ayuda",
    footer="Hecho con calma.",
    home_href="../../../index.html",
    home_href_index="../../index.html",
    legal_breadcrumb="Homebody",
    legal_title="Política de privacidad",
)

LOCALE_EN = Locale(
    code="en",
    site_title="The Homebody Greyhound",
    nav_work="Work",
    nav_help="Oficio help",
    nav_contact="Contact",
    breadcrumb_home="Home",
    breadcrumb_help="Oficio help",
    help_index_title="Oficio help",
    help_index_lede=(
        "Each entry explains how to set up an integration: where to get "
        "the API key, what it costs, and the small gotchas that prevent "
        "the most common errors. If an entry says <em>no API key</em>, "
        "just flip the toggle in the app."
    ),
    back_to_index="← Back to the help index",
    footer="Made unhurriedly.",
    home_href="../../../index.html",
    home_href_index="../../index.html",
    legal_breadcrumb="Homebody",
    legal_title="Privacy policy",
)


# (slug, ES label, ES summary, EN label, EN summary)
TOPICS: list[tuple[str, str, str, str, str]] = [
    (
        "anthropic-ai",
        "Anthropic Claude (módulo IA)",
        "Configurar tu propia API key para el agente de IA.",
        "Anthropic Claude (AI module)",
        "Set up your own API key for the AI agent.",
    ),
    (
        "tmdb",
        "TMDb — películas y series",
        "Autocompletado de películas y series en la Bitácora.",
        "TMDb — films and series",
        "Autocomplete films and series in the Cultural Log.",
    ),
    (
        "igdb",
        "IGDB — videojuegos",
        "Autocompletado de videojuegos en la Bitácora.",
        "IGDB — video games",
        "Autocomplete video games in the Cultural Log.",
    ),
    (
        "lastfm",
        "Last.fm — música escuchada",
        "Tus tops y escuchas recientes en la Bitácora.",
        "Last.fm — listening history",
        "Your tops and recent listens in the Cultural Log.",
    ),
    (
        "open-library",
        "Open Library — libros",
        "Autocompletado de libros sin necesidad de API key.",
        "Open Library — books",
        "Book autocomplete with no API key required.",
    ),
    (
        "musicbrainz",
        "MusicBrainz — discografía",
        "Metadatos musicales abiertos sin API key.",
        "MusicBrainz — discography",
        "Open music metadata, no API key required.",
    ),
    (
        "bgg",
        "BoardGameGeek — juegos de mesa",
        "Catálogo de juegos de mesa sin API key.",
        "BoardGameGeek — board games",
        "Board-game catalogue, no API key required.",
    ),
    (
        "health",
        "Salud (Health Connect / HealthKit)",
        "Pasos, peso, sueño y ejercicio desde el sistema.",
        "Health (Health Connect / HealthKit)",
        "Steps, weight, sleep and exercise from the system.",
    ),
    (
        "weather",
        "Tiempo (WeatherAPI)",
        "Tiempo actual y previsión, ya configurado.",
        "Weather (WeatherAPI)",
        "Current weather and forecast, already configured.",
    ),
]


def render_markdown(md_text: str) -> tuple[str, str]:
    """Returns (page_title, html_body); title comes from the first <h1>."""
    html = markdown.markdown(
        md_text,
        extensions=["extra", "sane_lists"],
        output_format="html5",
    )
    m = re.search(r"<h1>(.*?)</h1>", html, flags=re.DOTALL)
    if m:
        title = re.sub(r"<.*?>", "", m.group(1)).strip()
        body = html[: m.start()] + html[m.end() :]
    else:
        title = "Help"
        body = html
    return title, body.strip()


def make_description(body_html: str, fallback: str) -> str:
    """Pull a short description from the first <p>."""
    m = re.search(r"<p>(.*?)</p>", body_html, flags=re.DOTALL)
    if not m:
        return fallback
    text = re.sub(r"<.*?>", "", m.group(1))
    text = re.sub(r"\s+", " ", text).strip()
    if len(text) > 155:
        text = text[:152].rstrip() + "…"
    return text.replace('"', "&quot;")


PAGE_TEMPLATE = """<!DOCTYPE html>
<html lang="{lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title} — {site_title}</title>
  <meta name="description" content="{description}" />
  <meta name="theme-color" content="#f6f3ee" />
  <link rel="icon" type="image/svg+xml" href="../../../favicon.svg" />
  <link rel="stylesheet" href="../../../styles.css" />
  <link rel="alternate" hreflang="es" href="{alt_es}" />
  <link rel="alternate" hreflang="en" href="{alt_en}" />
  <link rel="alternate" hreflang="x-default" href="{alt_es}" />
</head>
<body class="help-page">
  <header class="site-header">
    <a href="{home_href}" class="brand" aria-label="{site_title}">
      <span class="brand-name">{site_title}</span>
    </a>
    <nav class="site-nav" aria-label="{nav_label}">
      <a href="{home_href}#trabajo">{nav_work}</a>
      <a href="../index.html">{nav_help}</a>
      <a href="{home_href}#contacto">{nav_contact}</a>
      <a class="lang-switch" href="{alt_other}" hreflang="{alt_other_lang}" lang="{alt_other_lang}" aria-label="{alt_other_aria}">{alt_other_label}</a>
    </nav>
  </header>

  <main class="help-main">
    <p class="help-crumbs">
      <a href="{home_href}">{breadcrumb_home}</a>
      <span aria-hidden="true">›</span>
      <a href="../index.html">{breadcrumb_help}</a>
      <span aria-hidden="true">›</span>
      <span>{title}</span>
    </p>
    <article class="prose help-prose">
      <h1>{title}</h1>
      {body}
    </article>
    <p class="help-back">
      <a href="../index.html">{back_to_index}</a>
    </p>
  </main>

  <footer class="site-footer">
    <p>&copy; <span id="year">2026</span> {site_title}. {footer}</p>
  </footer>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
"""


INDEX_TEMPLATE = """<!DOCTYPE html>
<html lang="{lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{help_index_title} — {site_title}</title>
  <meta name="description" content="{description}" />
  <meta name="theme-color" content="#f6f3ee" />
  <link rel="icon" type="image/svg+xml" href="../../favicon.svg" />
  <link rel="stylesheet" href="../../styles.css" />
  <link rel="alternate" hreflang="es" href="{alt_es}" />
  <link rel="alternate" hreflang="en" href="{alt_en}" />
  <link rel="alternate" hreflang="x-default" href="{alt_es}" />
</head>
<body class="help-page">
  <header class="site-header">
    <a href="{home_href}" class="brand" aria-label="{site_title}">
      <span class="brand-name">{site_title}</span>
    </a>
    <nav class="site-nav" aria-label="{nav_label}">
      <a href="{home_href}#trabajo">{nav_work}</a>
      <a href="{home_href}#sobre">{nav_about}</a>
      <a href="{home_href}#contacto">{nav_contact}</a>
      <a class="lang-switch" href="{alt_other}" hreflang="{alt_other_lang}" lang="{alt_other_lang}" aria-label="{alt_other_aria}">{alt_other_label}</a>
    </nav>
  </header>

  <main class="help-main">
    <p class="help-crumbs">
      <a href="{home_href}">{breadcrumb_home}</a>
      <span aria-hidden="true">›</span>
      <span>{breadcrumb_help}</span>
    </p>
    <article class="prose">
      <h1>{help_index_title}</h1>
      <p class="lede">
        {help_index_lede}
      </p>
      <ul class="help-index">
{items}
      </ul>
    </article>
  </main>

  <footer class="site-footer">
    <p>&copy; <span id="year">2026</span> {site_title}. {footer}</p>
  </footer>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
"""


LEGAL_TEMPLATE = """<!DOCTYPE html>
<html lang="{lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title} — {site_title}</title>
  <meta name="description" content="{description}" />
  <meta name="theme-color" content="#f6f3ee" />
  <link rel="icon" type="image/svg+xml" href="../../favicon.svg" />
  <link rel="stylesheet" href="../../styles.css" />
  <link rel="alternate" hreflang="es" href="{alt_es}" />
  <link rel="alternate" hreflang="en" href="{alt_en}" />
  <link rel="alternate" hreflang="x-default" href="{alt_es}" />
</head>
<body class="help-page">
  <header class="site-header">
    <a href="{home_href}" class="brand" aria-label="{site_title}">
      <span class="brand-name">{site_title}</span>
    </a>
    <nav class="site-nav" aria-label="{nav_label}">
      <a href="{home_href}#trabajo">{nav_work}</a>
      <a href="{home_href}#sobre">{nav_about}</a>
      <a href="{home_href}#contacto">{nav_contact}</a>
      <a class="lang-switch" href="{alt_other}" hreflang="{alt_other_lang}" lang="{alt_other_lang}" aria-label="{alt_other_aria}">{alt_other_label}</a>
    </nav>
  </header>

  <main class="help-main">
    <p class="help-crumbs">
      <a href="{home_href}">{breadcrumb_home}</a>
      <span aria-hidden="true">›</span>
      <span>{legal_breadcrumb}</span>
      <span aria-hidden="true">›</span>
      <span>{title}</span>
    </p>
    <article class="prose help-prose">
      <h1>{title}</h1>
      {body}
    </article>
  </main>

  <footer class="site-footer">
    <p>&copy; <span id="year">2026</span> {site_title}. {footer}</p>
  </footer>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
"""


def build_help(locale: Locale, src_dir: Path, out_dir: Path) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    items: list[str] = []
    nav_about = "Sobre" if locale.code == "es" else "About"
    nav_label = (
        "Navegación principal" if locale.code == "es" else "Primary navigation"
    )

    for slug, label_es, summary_es, label_en, summary_en in TOPICS:
        src = src_dir / f"{slug}.md"
        if not src.exists():
            print(f"  ! [{locale.code}] missing {src.name}, skipping")
            continue
        title, body_html = render_markdown(src.read_text(encoding="utf-8"))
        page_dir = out_dir / slug
        page_dir.mkdir(parents=True, exist_ok=True)
        # hreflang siblings — relative to <lang>/oficio/help/<slug>/index.html
        if locale.code == "es":
            alt_es = "index.html"  # self
            alt_en = f"../../../en/oficio/help/{slug}/index.html"
            alt_other = alt_en
            alt_other_lang = "en"
            alt_other_label = "EN"
            alt_other_aria = "Switch to English"
        else:
            alt_es = f"../../../../oficio/help/{slug}/index.html"
            alt_en = "index.html"  # self
            alt_other = alt_es
            alt_other_lang = "es"
            alt_other_label = "ES"
            alt_other_aria = "Cambiar a español"
        html = PAGE_TEMPLATE.format(
            lang=locale.code,
            title=title,
            description=make_description(body_html, "Oficio help."),
            body=body_html,
            site_title=locale.site_title,
            nav_label=nav_label,
            nav_work=locale.nav_work,
            nav_help=locale.nav_help,
            nav_contact=locale.nav_contact,
            breadcrumb_home=locale.breadcrumb_home,
            breadcrumb_help=locale.breadcrumb_help,
            back_to_index=locale.back_to_index,
            footer=locale.footer,
            home_href=locale.home_href,
            alt_es=alt_es,
            alt_en=alt_en,
            alt_other=alt_other,
            alt_other_lang=alt_other_lang,
            alt_other_label=alt_other_label,
            alt_other_aria=alt_other_aria,
        )
        (page_dir / "index.html").write_text(html, encoding="utf-8")
        label = label_es if locale.code == "es" else label_en
        summary = summary_es if locale.code == "es" else summary_en
        items.append(
            f'        <li><a href="{slug}/index.html"><strong>{label}</strong>'
            f"<span>{summary}</span></a></li>"
        )
        print(f"  ✓ [{locale.code}] {slug}/index.html")

    index_description = (
        "Guías para configurar las integraciones de la app Oficio."
        if locale.code == "es"
        else "Setup guides for the Oficio app integrations."
    )
    # hreflang for the help index — file at <lang>/oficio/help/index.html
    if locale.code == "es":
        idx_alt_es = "index.html"
        idx_alt_en = "../../en/oficio/help/index.html"
        idx_other = idx_alt_en
        idx_other_lang = "en"
        idx_other_label = "EN"
        idx_other_aria = "Switch to English"
    else:
        idx_alt_es = "../../../oficio/help/index.html"
        idx_alt_en = "index.html"
        idx_other = idx_alt_es
        idx_other_lang = "es"
        idx_other_label = "ES"
        idx_other_aria = "Cambiar a español"
    (out_dir / "index.html").write_text(
        INDEX_TEMPLATE.format(
            lang=locale.code,
            site_title=locale.site_title,
            description=index_description,
            nav_label=nav_label,
            nav_work=locale.nav_work,
            nav_about=nav_about,
            nav_contact=locale.nav_contact,
            breadcrumb_home=locale.breadcrumb_home,
            breadcrumb_help=locale.breadcrumb_help,
            help_index_title=locale.help_index_title,
            help_index_lede=locale.help_index_lede,
            footer=locale.footer,
            home_href=locale.home_href_index,
            items="\n".join(items),
            alt_es=idx_alt_es,
            alt_en=idx_alt_en,
            alt_other=idx_other,
            alt_other_lang=idx_other_lang,
            alt_other_label=idx_other_label,
            alt_other_aria=idx_other_aria,
        ),
        encoding="utf-8",
    )
    print(f"  ✓ [{locale.code}] index.html (help index)")


def build_legal(locale: Locale, src: Path, out_dir: Path) -> None:
    if not src.exists():
        print(f"  ! [{locale.code}] missing {src.name}, skipping legal")
        return
    out_dir.mkdir(parents=True, exist_ok=True)
    title, body_html = render_markdown(src.read_text(encoding="utf-8"))
    nav_about = "Sobre" if locale.code == "es" else "About"
    nav_label = (
        "Navegación principal" if locale.code == "es" else "Primary navigation"
    )
    description = (
        "Política de privacidad de la app Oficio."
        if locale.code == "es"
        else "Privacy policy for the Oficio app."
    )
    # hreflang for legal — file at <lang>/homebody/terms/index.html
    if locale.code == "es":
        l_alt_es = "index.html"
        l_alt_en = "../../en/homebody/terms/index.html"
        l_other = l_alt_en
        l_other_lang = "en"
        l_other_label = "EN"
        l_other_aria = "Switch to English"
    else:
        l_alt_es = "../../../homebody/terms/index.html"
        l_alt_en = "index.html"
        l_other = l_alt_es
        l_other_lang = "es"
        l_other_label = "ES"
        l_other_aria = "Cambiar a español"
    html = LEGAL_TEMPLATE.format(
        lang=locale.code,
        title=title,
        description=description,
        site_title=locale.site_title,
        nav_label=nav_label,
        nav_work=locale.nav_work,
        nav_about=nav_about,
        nav_contact=locale.nav_contact,
        breadcrumb_home=locale.breadcrumb_home,
        legal_breadcrumb=locale.legal_breadcrumb,
        body=body_html,
        footer=locale.footer,
        home_href=locale.home_href_index,
        alt_es=l_alt_es,
        alt_en=l_alt_en,
        alt_other=l_other,
        alt_other_lang=l_other_lang,
        alt_other_label=l_other_label,
        alt_other_aria=l_other_aria,
    )
    (out_dir / "index.html").write_text(html, encoding="utf-8")
    print(f"  ✓ [{locale.code}] homebody/terms/index.html")


def main() -> None:
    print("Building help pages…")
    build_help(LOCALE_ES, HELP_SRC_ES, HELP_OUT_ES)
    build_help(LOCALE_EN, HELP_SRC_EN, HELP_OUT_EN)
    print("Building legal pages…")
    build_legal(LOCALE_ES, PRIVACY_SRC_ES, PRIVACY_OUT_ES)
    build_legal(LOCALE_EN, PRIVACY_SRC_EN, PRIVACY_OUT_EN)


if __name__ == "__main__":
    main()
