# Cómo configurar Open Library en Oficio

**Para qué sirve**: Open Library es la base de datos abierta de libros que Oficio usa para autocompletar título, autor, año, ISBN y portada al añadir un libro a la Bitácora cultural.

## Pasos

**No necesitas cuenta ni API key.** Solo:

1. Abre Oficio → **Ajustes → APIs externas**.
2. En el bloque **Open Library**, activa el toggle.
3. (Opcional) Pulsa **Probar conexión** para confirmar que el servicio responde desde tu red.

Listo. La próxima vez que añadas un libro a la Bitácora, Oficio buscará en Open Library automáticamente.

## Coste y límites

Gratis y sin límite formal. Open Library pide a las aplicaciones que sean *razonables* y caché los resultados — Oficio lo hace por defecto.

## Avisos

- **La búsqueda a veces es lenta** (1–2 segundos) o devuelve resultados algo desordenados, especialmente para títulos en español o ediciones poco populares. Si no aparece el libro al primer intento, prueba con el ISBN o con el título en inglés.
- **No hay autenticación**. Las peticiones son anónimas. Si en algún momento Open Library exige API key (no lo hace hoy), Oficio se actualizará para soportarlo.
