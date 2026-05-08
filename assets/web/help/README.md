# Páginas de ayuda para la web

Cada `.md` en este directorio corresponde al `topic` que la app pasa a
`HelpUrls.forTopic(...)` en `lib/core/config/help_urls.dart`. Cuando
el usuario pulsa el icono `?` junto a un campo de credenciales, la app
abre la URL `<_baseHelp>/<slug>`.

## Cómo publicarlas en tu web

Estos `.md` están escritos en Markdown plano, sin front matter. Cada
generador de sitios estáticos consume Markdown a su manera:

- **Hugo / Jekyll / Astro**: añade el front matter que use tu tema
  (typically `title`, `slug`, `date`) al inicio de cada archivo
  cuando los copies a tu repo de la web.
- **MkDocs / Docusaurus**: probablemente solo necesitan el `# Título`
  como primera línea (que ya está).
- **Notion / Ghost / WordPress**: pega el contenido como Markdown.

## Slugs registrados

Estos coinciden con `HelpUrls.knownTopics`:

| Slug | Página |
|------|--------|
| `anthropic-ai` | API key de Anthropic Claude (módulo IA) |
| `tmdb` | TMDb (películas + series, Bitácora) |
| `igdb` | IGDB / Twitch (videojuegos, Bitácora) |
| `lastfm` | Last.fm (música, Bitácora) |
| `open-library` | Open Library (libros, Bitácora) — sin keys |
| `musicbrainz` | MusicBrainz (música, Bitácora) — sin keys |
| `bgg` | BoardGameGeek (juegos de mesa, Bitácora) — sin keys |
| `health` | Módulo Salud (Health Connect / HealthKit) — sin keys |
| `weather` | Módulo Tiempo (WeatherAPI bundled) — sin acción del usuario |

## Cuando cambies la URL real en `help_urls.dart`

Edita `lib/core/config/help_urls.dart` y sustituye:

```dart
static const String _baseHelp = 'https://example.com/oficio/help';
static const String _baseLegal = 'https://example.com/oficio/legal';
```

Por las rutas reales de tu web. Los slugs no cambian, así que solo es
una sustitución de host.

## Política de privacidad y términos

Las páginas legales (`/legal/privacy` y `/legal/terms`) viven aparte:
la fuente de verdad es `docs/PRIVACY_POLICY.md` (+ `_EN.md`) en este
mismo repo. Cuando publiques la web, copia ese contenido a las URLs
correspondientes — la Play Store y la App Store exigen URL pública.
