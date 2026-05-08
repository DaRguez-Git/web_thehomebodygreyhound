# Cómo configurar BGG (BoardGameGeek) en Oficio

**Para qué sirve**: BGG (BoardGameGeek) es la base de datos de referencia para juegos de mesa — Oficio la usa para autocompletar título, año, número de jugadores, duración media e imagen al añadir un juego a la Bitácora cultural.

## Pasos

**No necesitas cuenta ni API key.** Solo:

1. Abre Oficio → **Ajustes → APIs externas**.
2. En el bloque **BGG**, activa el toggle.
3. (Opcional) Pulsa **Probar conexión** para confirmar que el servicio responde.

Listo. La próxima vez que añadas un juego de mesa a la Bitácora, BGG buscará en su catálogo.

## Coste y límites

Gratis. Sin rate limit explícito, pero **agresivo en la práctica**:

- BGG puede tardar unos segundos en responder cuando la búsqueda no está cacheada en su servidor.
- En algunos casos devuelve un código `202 Accepted` con un mensaje *"prueba en X segundos"*. La API te pide que reintentes pasado ese tiempo.

Oficio reintenta automáticamente cuando llega un 202.

## Avisos

- **La primera búsqueda de un juego concreto puede ser lenta** (3–5 segundos). BGG procesa la query asíncronamente la primera vez y luego cachea el resultado. Las búsquedas siguientes del mismo juego son instantáneas.
- **API XML, no JSON**. BGG sigue usando una XML API antigua (XMLAPIcalypse). Oficio la parsea internamente; tú no notas la diferencia, solo afecta a la velocidad.
- **No traduce títulos**. BGG está en inglés. Si buscas *"Catán"* puede que no encuentre nada y tengas que probar con *"Catan"* o *"Settlers of Catan"*.
