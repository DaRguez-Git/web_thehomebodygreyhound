# Política de privacidad de Oficio

**Última actualización**: <!-- AÑADIR FECHA DE PUBLICACIÓN, formato AAAA-MM-DD -->

## Quién es el responsable

Esta app la desarrolla **TheHomebodyGreyhound** (en adelante, "el desarrollador").
Para cualquier consulta relacionada con esta política o el tratamiento
de tus datos puedes escribir a **<!-- [TU-EMAIL-DE-CONTACTO] -->**.

## Resumen rápido

- **Oficio funciona offline por diseño.** Tus tareas, diario, despensa,
  notas, recetas, plan semanal, lista de la compra, cultura y resto de
  módulos viven exclusivamente en el almacenamiento local de tu
  dispositivo. El módulo Salud lee y escribe contra el store del
  sistema (Health Connect / HealthKit), también en local.
- **No hay servidor de Oficio.** No registramos cuentas. No
  recogemos analítica. No mostramos publicidad. No vendemos datos.
- **Hay dos casos en los que Oficio sí envía algo a un tercero**, y
  siempre porque tú activas la función expresamente:
    1. Pronóstico del Tiempo: consulta a **WeatherAPI**.
    2. Asistente de IA (módulo opcional): consulta a **Anthropic**.
- En ambos casos puedes prescindir de la función y la app sigue siendo
  100% local.

## Qué datos guarda Oficio en tu dispositivo

Toda la información que introduces en la app se guarda en el dispositivo:

- **Base de datos local cifrada por el SO**: tareas, entradas de
  diario, productos de despensa, notas, libretas, feeds y artículos
  RSS, eventos del calendario que tú creas, recetas (incluyendo
  fotos), entradas culturales, plan semanal y lista de la compra.
- **Preferencias** (`SharedPreferences`): elección de tema, módulos
  activos, orden de la barra inferior, ubicaciones favoritas,
  personalización de la pantalla de inicio, día seleccionado en cada
  módulo.
- **Almacenamiento seguro** (Keychain en iOS, EncryptedSharedPreferences
  en Android): claves API que tú configures en módulos opcionales
  (Bitácora cultural, Asistente de IA).
- **Archivos en el directorio de la app**: fotos de recetas que
  añadas (carpeta `recipe_photos/`).

Estos datos no salen del dispositivo salvo que tú uses **explícitamente**
las funciones de exportación (Ajustes → "Compartir copia de seguridad" /
"Copiar al portapapeles"), en cuyo caso el contenido va donde tú decides
(otro app, email, almacenamiento personal en la nube…).

## Servicios de terceros que sí reciben datos cuando los usas

### 1. WeatherAPI (weatherapi.com)

- **Cuándo**: cuando abres el módulo Tiempo o consultas el pronóstico
  desde la pantalla de inicio.
- **Qué se envía**: las **coordenadas** (latitud y longitud) de la
  ubicación que tienes seleccionada o estás buscando, y el **texto
  literal** que tecleas en el buscador de ubicaciones.
- **Qué NO se envía**: ningún dato de tareas, diario, despensa, etc.
- **Frecuencia**: como máximo cada 10 minutos (caché local) por cada
  ubicación consultada.
- **Términos del proveedor**:
  https://www.weatherapi.com/privacy.aspx

### 2. Anthropic (Claude) — solo si activas el módulo IA

- **Cuándo**: cuando envías un mensaje en el chat del módulo IA. Si
  no usas ese módulo, no se hace ninguna llamada.
- **Qué se envía**: el texto que escribes y, si la IA decide invocar
  alguna de sus herramientas para responderte, los **resultados de
  esa herramienta** sobre tus datos (por ejemplo: si preguntas "¿qué
  he escrito en el diario sobre vacaciones?", la herramienta lee tu
  diario y manda los fragmentos relevantes a Anthropic).
- **Qué NO se envía**: nada que la IA no haya pedido vía herramienta.
  Tu base de datos completa nunca se manda.
- **Política del proveedor**: Anthropic declara en su API que **no
  entrena sus modelos con los datos enviados por la API por defecto**.
  Ver https://www.anthropic.com/legal/privacy
- **Cómo desactivarlo**: borra la API key en Ajustes → IA, o
  desactiva el módulo IA en Ajustes → Módulos.

> Si en el futuro Oficio admite otros proveedores de IA (OpenAI,
> Google Gemini, etc.), esta política se actualizará para nombrarlos
> y enlazar sus respectivas políticas. La elección del proveedor será
> siempre tuya y por defecto el módulo está sin proveedor configurado.

## Permisos del sistema que la app pide

Oficio solo pide los permisos estrictamente necesarios para el módulo
que estés usando:

- **Calendario** (Android: `READ_CALENDAR`/`WRITE_CALENDAR`, iOS:
  `NSCalendarsUsageDescription`): necesario para el módulo Calendario.
  Lee y crea eventos en el calendario nativo del dispositivo. No hay
  envío a la nube — todo lo gestiona el calendario del SO.
- **Notificaciones** (Android 13+: `POST_NOTIFICATIONS`): para el
  resumen matutino opcional. La notificación se programa en local.
- **Alarmas exactas** (`SCHEDULE_EXACT_ALARM`, `USE_EXACT_ALARM`):
  para que la notificación matutina se dispare a la hora elegida
  incluso con el modo "Doze" de Android.
- **Ubicación** (`ACCESS_COARSE_LOCATION`, `ACCESS_FINE_LOCATION`):
  solo se solicita si pulsas "Usar mi ubicación" en el módulo
  Tiempo. La coordenada se manda a WeatherAPI; no se almacena
  histórico ni se comparte con nadie más.
- **Cámara** (`NSCameraUsageDescription`) y **fotos**
  (`NSPhotoLibraryUsageDescription`): para añadir fotos a las recetas.
  La foto se copia al directorio de la app y nunca se sube a ningún
  servidor.
- **Salud** (Android: permisos `health.READ_*` y `health.WRITE_WEIGHT`
  vía Health Connect, iOS: `NSHealthShareUsageDescription` y
  `NSHealthUpdateUsageDescription` vía HealthKit): solo se solicitan
  si activas el módulo Salud y entras en él. Oficio lee tus pasos,
  peso, sueño y ejercicio del store de salud del sistema y los
  muestra en la app. Cuando registras una nueva medición de peso, se
  guarda en el mismo store del sistema para que también aparezca en
  la app de Salud nativa. **Estos datos no se envían a ningún
  servidor**: la lectura y escritura ocurren en el dispositivo
  contra Health Connect (Android) o HealthKit (iOS).
- **Internet**: necesario para WeatherAPI, IA y descargar feeds RSS.

Ningún permiso se usa para fines de seguimiento.

## Cookies, identificadores y publicidad

Oficio no usa cookies, no incluye SDKs de analítica ni de publicidad,
no genera ni almacena identificadores publicitarios (Google AAID, Apple
IDFA), y no envía telemetría de uso.

## Cuánto tiempo se conservan los datos

Mientras la app esté instalada en tu dispositivo y tú no los borres
manualmente. Si desinstalas la app, el sistema operativo borra
también la base de datos local y las claves del almacenamiento
seguro.

## Tus derechos

- **Acceso y exportación**: cualquier dato es exportable desde
  Ajustes → "Compartir copia de seguridad" o "Copiar al
  portapapeles". El formato es JSON legible.
- **Borrado**: puedes eliminar datos individuales desde la propia
  app. Para borrar todo de golpe, desinstala la app o borra los
  datos desde Ajustes del SO → Apps → Oficio → Almacenamiento.
- **Rectificación y oposición**: al ser tú quien introduce los datos
  y al no haber un servidor central, no hay un proceso administrativo
  que solicitar — tú modificas o borras directamente en la app.

Para asuntos relacionados con datos que ya hayas enviado a un
tercero (WeatherAPI, Anthropic), debes contactar con ese tercero
directamente; sus políticas y procedimientos están enlazados arriba.

## Menores de edad

Oficio no está específicamente dirigida a menores de 13 años (o la
edad mínima de tu jurisdicción). No recogemos información personal
identificable; no obstante, si eres tutor de un menor que use la app,
te recomendamos supervisar las funciones que requieren conexión
(Tiempo, IA).

## Cambios en esta política

Si la política cambia (por ejemplo, al añadir otro proveedor de IA),
publicaremos la nueva versión con una fecha de "Última actualización"
y, si el cambio es material, lo comunicaremos en una próxima
actualización de la app.

## Contacto

**<!-- [TU-EMAIL-DE-CONTACTO] -->**

Esta política se rige por la legislación española y, donde aplique,
por el Reglamento General de Protección de Datos de la UE (RGPD).
