# Cómo configurar IGDB en Oficio

**Para qué sirve**: IGDB (Internet Game Database) es la fuente de Oficio para buscar videojuegos — al añadir una entrada de tipo *Videojuego* en la Bitácora cultural, IGDB rellena título, año, carátula y plataformas.

## Pasos

IGDB usa el sistema de cuentas de Twitch para la autenticación. Aunque no uses Twitch como red social, necesitas registrar una "aplicación" en su consola de desarrollo.

1. Entra en [dev.twitch.tv](https://dev.twitch.tv/) con tu cuenta de Twitch (créala primero si no tienes).
2. Verifica que tu cuenta tiene **2FA activado** (Twitch lo exige para registrar apps; si no lo tienes, **Account Security → Set Up Two-Factor Authentication**).
3. Una vez con 2FA, abre [dev.twitch.tv/console/apps](https://dev.twitch.tv/console/apps).
4. Pulsa **Register Your Application** y rellena:
   - **Name**: *Oficio* (o lo que quieras; tiene que ser único en Twitch).
   - **OAuth Redirect URLs**: `http://localhost`. Sí, exacto, con `http` y `localhost`. No vas a usar este redirect — pero el formulario lo exige.
   - **Category**: *Application Integration*.
   - **Client Type**: *Confidential*.
5. Pulsa **Create**. Te lleva al detalle de la app.
6. Copia el **Client ID** que aparece en la página.
7. Pulsa **New Secret** para generar un Client Secret. Cópialo **inmediatamente** — no se vuelve a mostrar.
8. Pega ambos en Oficio: **Ajustes → APIs externas → IGDB → Configurar**.
9. Pulsa **Probar conexión** para verificar.

## Coste y límites

Gratis. Rate limit: 4 peticiones por segundo. Oficio cachea agresivamente para no acercarse al límite.

El access token interno que IGDB requiere caduca cada ~60 días; Oficio lo refresca automáticamente cuando hace falta.

## Avisos

- **El registro va por Twitch, no por IGDB**. IGDB pertenece a Twitch desde 2019 y comparten autenticación. Aunque parezca raro, dev.twitch.tv es la URL correcta.
- **El Client Secret se muestra UNA SOLA VEZ**. Si lo pierdes, vuelve a la consola de la app, pulsa **New Secret** y se genera uno nuevo (el anterior queda invalidado).
- **2FA es obligatorio** en la cuenta de Twitch para crear apps. Si te dice que no puedes crear app, suele ser por eso.
