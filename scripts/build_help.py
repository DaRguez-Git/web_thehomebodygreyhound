#!/usr/bin/env python3
"""
Build the static pages that wrap the markdown manual and legal
sources with the site's shared chrome.

Sources are staged before this script runs:

  assets/web/help/*.md, assets/web/help/en/*.md   manuals (ES / EN)
  assets/PRIVACY_POLICY.md, assets/PRIVACY_POLICY_EN.md
  assets/TERMS.md, assets/TERMS_EN.md

In CI the sources are copied from the app repository
(DaRguez-Git/Vida-app-flutter, docs/web) so the app stays the
single source of truth for its own documentation.

Output layout
-------------

  /oficio/help/                       Spanish manuals index
  /oficio/help/<slug>/                Spanish manual page per slug
  /oficio/privacy/                    Spanish privacy policy
  /oficio/terms/                      Spanish terms & conditions
  /en/oficio/help/                    English manuals index
  /en/oficio/help/<slug>/             English manual page per slug
  /en/oficio/privacy/                 English privacy policy
  /en/oficio/terms/                   English terms & conditions

Every generated page lives under the Oficio app, so its manuals and
legal pages are reachable from /oficio/ rather than a global footer.

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
TERMS_SRC_ES = ROOT / "assets" / "TERMS.md"
TERMS_SRC_EN = ROOT / "assets" / "TERMS_EN.md"

SITE_TITLE = "The Homebody Greyhound"
EMAIL = "info@thehomebodygreyhound.com"


@dataclass(frozen=True)
class Locale:
    code: str
    home_word: str          # brand aria-label suffix
    nav_label: str          # aria-label for the primary nav
    footer_label: str       # aria-label for the footer nav
    nav_home: str
    nav_apps: str
    nav_about: str
    footer_about: str
    footer_tagline: str
    lang_label: str         # text on the language switch
    lang_hreflang: str      # the *other* language code
    lang_aria: str
    crumb_home: str
    crumb_manuals: str
    crumb_privacy: str
    crumb_terms: str
    manuals_title: str
    manuals_lede: str
    back_to_index: str


LOCALE_ES = Locale(
    code="es",
    home_word="inicio",
    nav_label="Navegación principal",
    footer_label="Pie de página",
    nav_home="Inicio",
    nav_apps="Aplicaciones",
    nav_about="Sobre",
    footer_about="Sobre el estudio",
    footer_tagline="Apps sencillas, hechas con calma.",
    lang_label="EN",
    lang_hreflang="en",
    lang_aria="Switch to English",
    crumb_home="Inicio",
    crumb_manuals="Manuales",
    crumb_privacy="Privacidad",
    crumb_terms="Términos",
    manuals_title="Manuales de Oficio",
    manuals_lede=(
        "Cada manual te explica cómo configurar una integración: dónde sacar "
        "la API key, qué cuesta, y los pequeños matices que evitan los "
        "errores más comunes. Si una entrada dice <em>sin API key</em>, "
        "basta con activar el toggle en la app."
    ),
    back_to_index="← Volver a los manuales de Oficio",
)

LOCALE_EN = Locale(
    code="en",
    home_word="home",
    nav_label="Main navigation",
    footer_label="Footer",
    nav_home="Home",
    nav_apps="Apps",
    nav_about="About",
    footer_about="About the studio",
    footer_tagline="Simple apps, built with calm.",
    lang_label="ES",
    lang_hreflang="es",
    lang_aria="Cambiar a español",
    crumb_home="Home",
    crumb_manuals="Manuals",
    crumb_privacy="Privacy",
    crumb_terms="Terms",
    manuals_title="Oficio manuals",
    manuals_lede=(
        "Each manual explains how to set up an integration: where to get "
        "the API key, what it costs, and the small gotchas that prevent "
        "the most common errors. If an entry says <em>no API key</em>, "
        "just flip the toggle in the app."
    ),
    back_to_index="← Back to the Oficio manuals",
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


def site_header(loc: Locale, root: str, lang_alt: str) -> str:
    return f"""  <header class="site-header">
    <div class="site-header__inner">
      <a href="{root}index.html" class="brand" aria-label="{SITE_TITLE} — {loc.home_word}">
        <img class="brand-mark" src="{root}favicon.svg" alt="" width="26" height="26" />
        <span class="brand-name">{SITE_TITLE}</span>
      </a>
      <nav class="site-nav" aria-label="{loc.nav_label}">
        <a class="lang-switch" href="{lang_alt}" hreflang="{loc.lang_hreflang}" lang="{loc.lang_hreflang}" aria-label="{loc.lang_aria}">{loc.lang_label}</a>
      </nav>
    </div>
  </header>"""


def site_footer(loc: Locale, root: str) -> str:
    return f"""  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="footer-brand">
        <span class="brand-name">{SITE_TITLE}</span>
        <p class="footer-tagline">{loc.footer_tagline}</p>
      </div>
      <nav class="footer-nav" aria-label="{loc.footer_label}">
        <a href="{root}index.html">{loc.nav_home}</a>
        <a href="mailto:{EMAIL}">{EMAIL}</a>
      </nav>
    </div>
    <p class="footer-legal">&copy; <span id="year">2026</span> {SITE_TITLE}</p>
  </footer>"""


def page(
    *,
    loc: Locale,
    root: str,
    title: str,
    description: str,
    alt_es: str,
    alt_en: str,
    lang_alt: str,
    crumbs: str,
    article: str,
    after_article: str = "",
) -> str:
    return f"""<!DOCTYPE html>
<html lang="{loc.code}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title} — {SITE_TITLE}</title>
  <meta name="description" content="{description}" />
  <meta name="theme-color" content="#ffffff" />
  <link rel="icon" type="image/svg+xml" href="{root}favicon.svg" />
  <link rel="stylesheet" href="{root}styles.css" />
  <link rel="alternate" hreflang="es" href="{alt_es}" />
  <link rel="alternate" hreflang="en" href="{alt_en}" />
  <link rel="alternate" hreflang="x-default" href="{alt_es}" />
</head>
<body>
{site_header(loc, root, lang_alt)}

  <main class="doc-main">
    <p class="crumbs">
{crumbs}
    </p>
{article}
{after_article}
  </main>

{site_footer(loc, root)}

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
"""


def crumb_link(href: str, text: str) -> str:
    return f'      <a href="{href}">{text}</a>'


def crumb_text(text: str) -> str:
    return f"      <span>{text}</span>"


SEP = '      <span aria-hidden="true">›</span>'


def build_help(loc: Locale, src_dir: Path, out_dir: Path) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    items: list[str] = []
    other = "en/" if loc.code == "es" else ""

    for slug, label_es, summary_es, label_en, summary_en in TOPICS:
        src = src_dir / f"{slug}.md"
        if not src.exists():
            print(f"  ! [{loc.code}] missing {src.name}, skipping")
            continue
        title, body_html = render_markdown(src.read_text(encoding="utf-8"))
        page_dir = out_dir / slug
        page_dir.mkdir(parents=True, exist_ok=True)

        root = "../../../" if loc.code == "es" else "../../../../"
        if loc.code == "es":
            alt_es = "index.html"
            alt_en = f"{root}en/oficio/help/{slug}/index.html"
        else:
            alt_es = f"{root}oficio/help/{slug}/index.html"
            alt_en = "index.html"
        lang_alt = alt_en if loc.code == "es" else alt_es

        crumbs = "\n".join(
            [
                crumb_link(f"{root}index.html", loc.crumb_home),
                SEP,
                crumb_link("../index.html", loc.crumb_manuals),
                SEP,
                crumb_text(title),
            ]
        )
        article = f"""    <article class="doc">
      <h1>{title}</h1>
      <div class="doc-prose">
{body_html}
      </div>
    </article>"""
        after = (
            f'    <p class="doc-back">\n'
            f'      <a href="../index.html">{loc.back_to_index}</a>\n'
            f"    </p>"
        )
        html = page(
            loc=loc,
            root=root,
            title=f"{title}",
            description=make_description(body_html, "Oficio."),
            alt_es=alt_es,
            alt_en=alt_en,
            lang_alt=lang_alt,
            crumbs=crumbs,
            article=article,
            after_article=after,
        )
        (page_dir / "index.html").write_text(html, encoding="utf-8")
        label = label_es if loc.code == "es" else label_en
        summary = summary_es if loc.code == "es" else summary_en
        items.append(
            f'        <li><a href="{slug}/index.html"><strong>{label}</strong>'
            f"<span>{summary}</span></a></li>"
        )
        print(f"  ✓ [{loc.code}] oficio/help/{slug}/index.html")

    # Manuals index
    root = "../../" if loc.code == "es" else "../../../"
    if loc.code == "es":
        idx_alt_es = "index.html"
        idx_alt_en = f"{root}en/oficio/help/index.html"
    else:
        idx_alt_es = f"{root}oficio/help/index.html"
        idx_alt_en = "index.html"
    idx_lang_alt = idx_alt_en if loc.code == "es" else idx_alt_es

    crumbs = "\n".join(
        [
            crumb_link(f"{root}index.html", loc.crumb_home),
            SEP,
            crumb_text(loc.crumb_manuals),
        ]
    )
    article = f"""    <article class="doc">
      <h1>{loc.manuals_title}</h1>
      <p class="lede">{loc.manuals_lede}</p>
      <ul class="guide-list">
{chr(10).join(items)}
      </ul>
    </article>"""
    index_description = (
        "Manuales para configurar las integraciones de la app Oficio."
        if loc.code == "es"
        else "Manuals for setting up the Oficio app integrations."
    )
    html = page(
        loc=loc,
        root=root,
        title=loc.manuals_title,
        description=index_description,
        alt_es=idx_alt_es,
        alt_en=idx_alt_en,
        lang_alt=idx_lang_alt,
        crumbs=crumbs,
        article=article,
    )
    (out_dir / "index.html").write_text(html, encoding="utf-8")
    print(f"  ✓ [{loc.code}] oficio/help/index.html (manuals index)")


def build_legal(
    loc: Locale,
    src: Path,
    out_dir: Path,
    slug: str,
    crumb_label: str,
    description: str,
) -> None:
    if not src.exists():
        print(f"  ! [{loc.code}] missing {src.name}, skipping {slug}")
        return
    out_dir.mkdir(parents=True, exist_ok=True)
    title, body_html = render_markdown(src.read_text(encoding="utf-8"))

    root = "../../" if loc.code == "es" else "../../../"
    if loc.code == "es":
        alt_es = "index.html"
        alt_en = f"{root}en/oficio/{slug}/index.html"
    else:
        alt_es = f"{root}oficio/{slug}/index.html"
        alt_en = "index.html"
    lang_alt = alt_en if loc.code == "es" else alt_es

    crumbs = "\n".join(
        [
            crumb_link(f"{root}index.html", loc.crumb_home),
            SEP,
            crumb_text(crumb_label),
        ]
    )
    article = f"""    <article class="doc">
      <h1>{title}</h1>
      <div class="doc-prose">
{body_html}
      </div>
    </article>"""
    html = page(
        loc=loc,
        root=root,
        title=title,
        description=description,
        alt_es=alt_es,
        alt_en=alt_en,
        lang_alt=lang_alt,
        crumbs=crumbs,
        article=article,
    )
    (out_dir / "index.html").write_text(html, encoding="utf-8")
    print(f"  ✓ [{loc.code}] oficio/{slug}/index.html")


def main() -> None:
    print("Building manual pages…")
    build_help(LOCALE_ES, HELP_SRC_ES, HELP_OUT_ES)
    build_help(LOCALE_EN, HELP_SRC_EN, HELP_OUT_EN)
    print("Building legal pages…")
    build_legal(
        LOCALE_ES,
        PRIVACY_SRC_ES,
        ROOT / "oficio" / "privacy",
        "privacy",
        LOCALE_ES.crumb_privacy,
        "Política de privacidad de la app Oficio.",
    )
    build_legal(
        LOCALE_EN,
        PRIVACY_SRC_EN,
        ROOT / "en" / "oficio" / "privacy",
        "privacy",
        LOCALE_EN.crumb_privacy,
        "Privacy policy for the Oficio app.",
    )
    build_legal(
        LOCALE_ES,
        TERMS_SRC_ES,
        ROOT / "oficio" / "terms",
        "terms",
        LOCALE_ES.crumb_terms,
        "Términos y condiciones de uso de la app Oficio.",
    )
    build_legal(
        LOCALE_EN,
        TERMS_SRC_EN,
        ROOT / "en" / "oficio" / "terms",
        "terms",
        LOCALE_EN.crumb_terms,
        "Terms and conditions for the Oficio app.",
    )


if __name__ == "__main__":
    main()
