# Cómo configurar Last.fm en Oficio

**Para qué sirve**: Last.fm guarda tu histórico de escuchas musicales (*scrobbles*). Con tu API key + nombre de usuario, Oficio puede mostrar tus tops, escuchas recientes y enlazar álbumes en la Bitácora cultural.

## Pasos

1. Si no tienes cuenta de Last.fm, créala en [last.fm/join](https://www.last.fm/join). Apunta tu **nick** (no el email — luego lo necesitas).
2. Configura un cliente de scrobble (Spotify integrado, Pano Scrobbler en Android, etc.) para que tus escuchas aparezcan en tu perfil. Sin scrobbles, Last.fm no tiene nada que enseñarte.
3. Con la cuenta lista, ve a [last.fm/api/account/create](https://www.last.fm/api/account/create) (logueado).
4. Rellena el formulario:
   - **Application name**: *Oficio* (o lo que quieras).
   - **Application description**: cualquier cosa, p. ej. *Personal media tracker*.
   - **Application homepage URL**: lo que quieras (puedes poner tu blog o `https://oficio.app`).
   - **Callback URL**: déjalo vacío.
5. Acepta los términos y pulsa **Submit**.
6. La página siguiente te muestra:
   - **API key**: cópiala. Es la que necesita Oficio.
   - **Shared secret**: ignóralo. Solo se usa para escribir scrobbles, y Oficio solo lee.
7. Pega la key en Oficio: **Ajustes → APIs externas → Last.fm → Configurar**:
   - **API Key**: la del paso anterior.
   - **Usuario**: tu nick de Last.fm (no el email).
8. Pulsa **Probar conexión**. Si va bien, Last.fm devolverá info de tu perfil.

## Coste y límites

Gratis. Rate limit: 5 peticiones por segundo y aproximadamente 1.000 al día por cuenta de aplicación. Oficio cachea las consultas; no notarás el límite.

## Avisos

- **El "Usuario" es el nick, no el email**. Es el error #1 en este servicio: pones tu email en el campo *Usuario* y el test falla con "User not found". Tu nick es el que sale en la URL de tu perfil — `last.fm/user/<TU_NICK>`.
- **Si tu cuenta no tiene scrobbles, no hay nada que mostrar**. La API key responderá correctamente, pero los listados saldrán vacíos hasta que alguna app empiece a registrar tus escuchas.
- **No hace falta el `Shared secret`** para uso de Oficio (solo lectura). Si te lo pide algún manual, ignóralo en este caso.
