# Cómo activar el módulo Salud en Oficio

**Para qué sirve**: el módulo Salud lee tus pasos, peso, sueño y ejercicio del store de salud del sistema (Health Connect en Android, HealthKit en iOS) y los muestra en la app. Cuando registras un peso, lo escribe en el mismo store para que también aparezca en la app de Salud nativa.

## Pasos

**No necesitas cuenta ni API key.** Todo es local.

1. Abre Oficio → **Ajustes → Módulos**. El módulo *Salud* viene **desactivado por defecto** (a propósito, para que no te aparezca pidiendo permisos sensibles si no lo vas a usar).
2. Activa el toggle de *Salud*. Aparecerá en la barra inferior (o en el botón **Más** si tienes muchos módulos activos).
3. Entra al módulo. Verás una pantalla de bienvenida con un botón **Conceder acceso**.
4. Pulsa **Conceder acceso**. El sistema operativo abre su propio diálogo de permisos:
   - **Android**: el diálogo nativo de Health Connect lista los 5 tipos que Oficio quiere leer/escribir (pasos, peso lectura, peso escritura, sueño, ejercicio activo). Puedes conceder todos o solo algunos.
   - **iOS**: el diálogo nativo de HealthKit con los mismos tipos.
5. Vuelves automáticamente a Oficio. Las cuatro tarjetas (pasos, peso, sueño, ejercicio) se rellenan con tus datos.

Para registrar una medición de peso desde Oficio, en la tarjeta *Peso* pulsa el icono **+** arriba a la derecha → escribe el peso → **Guardar**. Aparecerá tanto en Oficio como en la app de Salud nativa.

## Coste y límites

Gratis. **Cero red**: lectura y escritura ocurren contra el store del SO en tu propio dispositivo. Los datos no salen del teléfono.

## Avisos

- **Android 7 o inferior**: el módulo no funciona — Health Connect requiere mínimo Android 8.0. La pantalla del módulo te indicará "Health Connect no disponible".
- **Android 8–13**: Health Connect viene como una app separada. La primera vez que pulses *Conceder acceso*, Android te llevará a la Play Store para instalarla. Después vuelves a Oficio y el flujo continúa.
- **Android 14+**: Health Connect ya viene de serie. Funciona sin pasos extra.
- **iOS**: solo en dispositivos físicos. El simulador de Xcode no tiene HealthKit, por lo que el módulo aparecerá vacío.
- **Sin datos previos no hay nada que mostrar**. Si nunca has usado un wearable, una báscula inteligente, o una app de actividad, las tarjetas saldrán con "Sin datos…". Para tener algo que ver, conecta tu wearable habitual o la app de Samsung Health / Google Fit / Apple Salud y deja que vuelque info al store.
- **Concesión parcial es posible**. Si solo concedes pasos y rechazas el resto, las otras tarjetas quedarán vacías; la app no te molesta más con el diálogo.
