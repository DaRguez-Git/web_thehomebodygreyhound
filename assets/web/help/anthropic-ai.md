# Cómo configurar la IA de Anthropic en Oficio

**Para qué sirve**: con tu API key de Anthropic, el módulo IA de Oficio se convierte en un asistente que puede consultar y modificar todos tus módulos (tareas, diario, despensa, etc.) usando herramientas locales.

## Pasos

1. Entra en [console.anthropic.com](https://console.anthropic.com/) y crea una cuenta (con email o Google).
2. Una vez dentro, ve a **Settings → API Keys** (o directamente al apartado **API Keys** del menú lateral).
3. Pulsa **Create Key**, dale un nombre que reconozcas más tarde (p. ej. *Oficio*).
4. Copia la key que aparece; empieza por `sk-ant-…`. Cópiala antes de cerrar el diálogo: **no se vuelve a mostrar** (aunque sí puedes regenerarla más tarde).
5. Antes de poder usarla, ve a **Settings → Plans & Billing** y añade saldo (mínimo $5). Sin saldo, la key falla con un error 401.
6. Pega la key en Oficio: **Ajustes → IA → API key** y pulsa **Probar conexión** para verificar que funciona.

## Coste y límites

Pago por uso, sin suscripción. Varía según el modelo:

- **Haiku**: el más barato, ~$0,25 por millón de tokens de entrada y ~$1,25 por millón de tokens de salida. Para uso personal en Oficio (consultas cortas, no más de 10–20 mensajes al día) suele costar **menos de 1€/mes**.
- **Sonnet**: equilibrio entre coste y capacidad, ~$3 / $15 por millón.
- **Opus**: el más capaz pero más caro, ~$15 / $75 por millón.

Puedes cambiar de modelo en cualquier momento desde **Ajustes → IA → Modelo**.

## Avisos

- **`console.anthropic.com` ≠ `claude.ai`**. Aunque ya tengas cuenta en `claude.ai` para chatear, necesitas crear una cuenta separada en `console.anthropic.com` para sacar API key. La de `claude.ai` no sirve.
- **Hay que añadir saldo antes de la primera llamada**. Es un fallo común: creas cuenta, generas key, la pegas en la app, y todo da error 401 — porque la cuenta tiene 0$ de saldo.
- **La API key vive cifrada en tu dispositivo**. Oficio la guarda en el Keychain (iOS) o EncryptedSharedPreferences (Android). Si quieres revocarla, vuelve al panel de Anthropic y bórrala desde ahí; en Oficio basta con pulsar **Borrar key** en Ajustes → IA.
