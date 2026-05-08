# Cómo configurar MusicBrainz en Oficio

**Para qué sirve**: MusicBrainz es la enciclopedia musical abierta — Oficio la consulta para añadir álbumes, artistas y datos discográficos a la Bitácora cultural cuando registras música clásica, jazz, vinilos antiguos o cualquier obra que Last.fm no cubra bien.

## Pasos

**No necesitas cuenta ni API key.** Solo:

1. Abre Oficio → **Ajustes → APIs externas**.
2. En el bloque **MusicBrainz**, activa el toggle.
3. (Opcional) Pulsa **Probar conexión** para confirmar que el servicio responde desde tu red.

Listo. Oficio se identifica con un `User-Agent: Oficio/1.0` en cada petición — es por cortesía y porque MusicBrainz lo exige a las apps que usan su API.

## Coste y límites

Gratis. **Rate limit: 1 petición por segundo** (el más estricto de las fuentes que Oficio usa). Es una limitación dura: si tres apps abusan a la vez de tu IP, MusicBrainz puede bloquearte temporalmente con 503.

Oficio respeta el límite serializando las peticiones internamente.

## Avisos

- **No abuses**. MusicBrainz lo mantiene una asociación sin ánimo de lucro (MetaBrainz Foundation) sobre la base de buena voluntad. Buscar 50 álbumes seguidos en 5 segundos provoca el bloqueo y deja la API caída para todos en tu red.
- **Si necesitas datos de Last.fm (escuchas), no es esto**. MusicBrainz solo tiene metadatos discográficos: artistas, álbumes, tracks, fechas. Para "qué he escuchado" usa Last.fm.
