# Cómo configurar TMDb en Oficio

**Para qué sirve**: TMDb (The Movie Database) alimenta la búsqueda de películas y series en la Bitácora cultural — al añadir una entrada de tipo *Película* o *Serie*, Oficio consulta TMDb para autocompletar título, año, póster y sinopsis.

## Pasos

1. Crea una cuenta gratuita en [themoviedb.org](https://www.themoviedb.org/signup).
2. Verifica tu email (te llega un enlace).
3. Una vez logueado, abre tu perfil → **Ajustes → API** (o ve directamente a [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)).
4. Pulsa **Solicita una API Key** y elige tipo **Developer** (gratuita; *Commercial* requiere aprobación manual y no la necesitas).
5. Rellena el formulario: aplicación de uso personal, país, descripción corta. Acepta los términos.
6. Una vez aprobada (instantáneo para Developer), verás dos credenciales:
   - **API Key (v3 auth)**: tipo `1234abcd...`. **No es la que necesitas.**
   - **API Read Access Token (v4 auth)**: tipo `eyJhbGciOiJI...`. **Esta es la que necesita Oficio.**
7. Copia el v4 token y pégalo en Oficio: **Ajustes → APIs externas → TMDb → Configurar**.
8. Pulsa **Probar conexión** para verificar.

## Coste y límites

Gratis para uso personal. Sin coste por petición. Rate limit: ~50 peticiones por segundo, suficiente para cualquier uso normal (Oficio cachea resultados, así que no notarás el límite).

## Avisos

- **v3 vs v4**: TMDb te da DOS tipos de credencial. Oficio usa el **v4 token** (también llamado *API Read Access Token*) que empieza por `eyJ…` porque es un JWT. Si copias la v3 (cadena corta de letras+números) por error, obtendrás errores 401.
- **No hace falta solicitar API Commercial**. La Developer es la gratuita y la suficiente. Solo si distribuyes la app a terceros con tu propia key — y ese no es tu caso, porque cada usuario pone la suya.
