#!/usr/bin/env python3
"""
Generate /oficio/help/<slug>/index.html pages from each markdown
file in assets/web/help, plus an index page that lists them all.

The HTML produced uses the site's existing styles.css. Run from the
repo root:

    python3 scripts/build_help.py

The script is idempotent: it overwrites whatever is in /oficio/help.
"""

from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path

import markdown

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "web" / "help"
OUT = ROOT / "oficio" / "help"

# Display titles for the help index, in display order.
TOPICS: list[tuple[str, str, str]] = [
    # (slug, label, short summary for the index)
    ("anthropic-ai", "Anthropic Claude (módulo IA)", "Configurar tu propia API key para el agente de IA."),
    ("tmdb", "TMDb — películas y series", "Autocompletado de películas y series en la Bitácora."),
    ("igdb", "IGDB — videojuegos", "Autocompletado de videojuegos en la Bitácora."),
    ("lastfm", "Last.fm — música escuchada", "Tus tops y escuchas recientes en la Bitácora."),
    ("open-library", "Open Library — libros", "Autocompletado de libros sin necesidad de API key."),
    ("musicbrainz", "MusicBrainz — discografía", "Metadatos musicales abiertos sin API key."),
    ("bgg", "BoardGameGeek — juegos de mesa", "Catálogo de juegos de mesa sin API key."),
    ("health", "Salud (Health Connect / HealthKit)", "Pasos, peso, sueño y ejercicio desde el sistema."),
    ("weather", "Tiempo (WeatherAPI)", "Tiempo actual y previsión, ya configurado."),
]


@dataclass
class Page:
    slug: str
    title: str
    body_html: str


def render_markdown(md_text: str) -> tuple[str, str]:
    """Returns (page_title, html_body) — title is taken from the first H1."""
    html = markdown.markdown(
        md_text,
        extensions=["extra", "sane_lists"],
        output_format="html5",
    )
    # Extract the first <h1>...</h1> as the page title; remove it from body.
    m = re.search(r"<h1>(.*?)</h1>", html, flags=re.DOTALL)
    if m:
        title = re.sub(r"<.*?>", "", m.group(1)).strip()
        body = html[: m.start()] + html[m.end() :]
    else:
        title = "Ayuda"
        body = html
    return title, body.strip()


PAGE_TEMPLATE = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title} — Ayuda de Oficio | The Homebody Greyhound</title>
  <meta name="description" content="{description}" />
  <meta name="theme-color" content="#f6f3ee" />
  <link rel="icon" type="image/svg+xml" href="{root}favicon.svg" />
  <link rel="stylesheet" href="{root}styles.css" />
</head>
<body class="help-page">
  <header class="site-header">
    <a href="{root}index.html" class="brand" aria-label="The Homebody Greyhound — inicio">
      <span class="brand-name">The Homebody Greyhound</span>
    </a>
    <nav class="site-nav" aria-label="Navegación principal">
      <a href="{root}index.html#trabajo">Trabajo</a>
      <a href="../index.html">Ayuda de Oficio</a>
      <a href="{root}index.html#contacto">Contacto</a>
    </nav>
  </header>

  <main class="help-main">
    <p class="help-crumbs">
      <a href="{root}index.html">Inicio</a>
      <span aria-hidden="true">›</span>
      <a href="../index.html">Ayuda de Oficio</a>
      <span aria-hidden="true">›</span>
      <span>{title}</span>
    </p>
    <article class="prose help-prose">
      <h1>{title}</h1>
      {body}
    </article>
    <p class="help-back">
      <a href="../index.html">← Volver al índice de ayuda</a>
    </p>
  </main>

  <footer class="site-footer">
    <p>&copy; <span id="year">2026</span> The Homebody Greyhound. Hecho con calma.</p>
  </footer>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
"""


INDEX_TEMPLATE = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ayuda de Oficio | The Homebody Greyhound</title>
  <meta name="description" content="Guías para configurar las integraciones de la app Oficio: APIs de medios, salud y tiempo." />
  <meta name="theme-color" content="#f6f3ee" />
  <link rel="icon" type="image/svg+xml" href="../../favicon.svg" />
  <link rel="stylesheet" href="../../styles.css" />
</head>
<body class="help-page">
  <header class="site-header">
    <a href="../../index.html" class="brand" aria-label="The Homebody Greyhound — inicio">
      <span class="brand-name">The Homebody Greyhound</span>
    </a>
    <nav class="site-nav" aria-label="Navegación principal">
      <a href="../../index.html#trabajo">Trabajo</a>
      <a href="../../index.html#sobre">Sobre</a>
      <a href="../../index.html#contacto">Contacto</a>
    </nav>
  </header>

  <main class="help-main">
    <p class="help-crumbs">
      <a href="../../index.html">Inicio</a>
      <span aria-hidden="true">›</span>
      <span>Ayuda de Oficio</span>
    </p>
    <article class="prose">
      <h1>Ayuda de Oficio</h1>
      <p class="lede">
        Cada bloque te explica cómo configurar una integración: dónde sacar la
        API key, qué cuesta, y los pequeños matices que evitan los errores más
        comunes. Si una entrada dice <em>sin API key</em>, basta con activar el
        toggle en la app.
      </p>
      <ul class="help-index">
{items}
      </ul>
    </article>
  </main>

  <footer class="site-footer">
    <p>&copy; <span id="year">2026</span> The Homebody Greyhound. Hecho con calma.</p>
  </footer>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
"""


def make_description(body_html: str) -> str:
    """Pull a short description from the first <p> in the rendered body."""
    m = re.search(r"<p>(.*?)</p>", body_html, flags=re.DOTALL)
    if not m:
        return "Página de ayuda de Oficio."
    text = re.sub(r"<.*?>", "", m.group(1))
    text = re.sub(r"\s+", " ", text).strip()
    if len(text) > 155:
        text = text[:152].rstrip() + "…"
    # HTML attribute-safe
    return text.replace('"', "&quot;")


def build() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    items: list[str] = []
    for slug, label, summary in TOPICS:
        src = SRC / f"{slug}.md"
        if not src.exists():
            print(f"  ! missing {src.name}, skipping")
            continue
        title, body_html = render_markdown(src.read_text(encoding="utf-8"))
        page_dir = OUT / slug
        page_dir.mkdir(parents=True, exist_ok=True)
        html = PAGE_TEMPLATE.format(
            title=title,
            description=make_description(body_html),
            body=body_html,
            root="../../../",
        )
        (page_dir / "index.html").write_text(html, encoding="utf-8")
        items.append(
            f'        <li><a href="{slug}/index.html"><strong>{label}</strong>'
            f"<span>{summary}</span></a></li>"
        )
        print(f"  ✓ {slug}/index.html")

    (OUT / "index.html").write_text(
        INDEX_TEMPLATE.format(items="\n".join(items)),
        encoding="utf-8",
    )
    print("  ✓ index.html (help index)")


if __name__ == "__main__":
    build()
