# El módulo Tiempo de Oficio

**Para qué sirve**: el módulo Tiempo te enseña el tiempo actual + las próximas 24 horas + los próximos 7 días para cualquier ubicación. La consulta va contra WeatherAPI con caché de 10 minutos.

## Pasos

**No tienes que configurar nada.** La API key de WeatherAPI viene incrustada en la app — Oficio se hace cargo de la cuota.

1. Activa el módulo *Tiempo* desde **Ajustes → Módulos** (viene activado por defecto).
2. Entra al módulo. Por defecto te muestra una ubicación predefinida (Madrid).
3. Para cambiarla, usa el icono de búsqueda y escribe tu ciudad, o pulsa **Usar mi ubicación** para detectarla por GPS (la primera vez te pedirá permiso de ubicación; ese permiso se usa solo para esto, no se guarda histórico).
4. Puedes guardar varias ubicaciones favoritas y conmutar entre ellas.

## Coste y límites

**Gratis para ti**. La cuota de WeatherAPI la paga el desarrollador del estudio (1 millón de peticiones al mes en el plan gratuito). Oficio cachea cada consulta 10 minutos para no acercarse al límite — el típico uso personal son ~50 peticiones al día.

## Avisos

- **Necesita internet** para refrescar. Sin red, Oficio enseña la última versión cacheada con un aviso "datos desactualizados".
- **El permiso de ubicación es opcional**. Solo se pide si pulsas *Usar mi ubicación*. Si introduces la ciudad por nombre, no hace falta. Las coordenadas se mandan a WeatherAPI; Oficio no guarda histórico.
- **Si en algún momento la cuota mensual se agota** (uso masivo entre todos los instalados), Oficio cambiará a un proveedor de respaldo o pediría que pongas tu propia key. Hoy esto no es un problema y no necesitas hacer nada.
