# The Weather module in Oficio

**What it does**: the Weather module shows current weather + the next 24 hours + the next 7 days for any location. The query goes to WeatherAPI with a 10-minute cache.

## Steps

**You don't need to configure anything.** The WeatherAPI key is bundled in the app — Oficio takes care of the quota.

1. Enable the *Weather* module from **Settings → Modules** (it's enabled by default).
2. Open the module. By default it shows a preset location (Madrid).
3. To change it, use the search icon and type your city, or tap **Use my location** to detect it via GPS (the first time it will ask for the location permission; that permission is used only for this, no history is stored).
4. You can save several favourite locations and switch between them.

## Cost and limits

**Free for you**. The WeatherAPI quota is paid by the studio's developer (1 million requests per month on the free tier). Oficio caches each query for 10 minutes to stay clear of the limit — typical personal use is ~50 requests a day.

## Heads-up

- **Internet required** to refresh. Without a network, Oficio shows the last cached version with a "stale data" notice.
- **Location permission is optional**. It's only requested if you tap *Use my location*. If you type the city by name, it isn't needed. Coordinates are sent to WeatherAPI; Oficio does not keep a history.
- **If the monthly quota ever runs out** (massive use across all installs), Oficio will switch to a fallback provider or ask you to plug in your own key. This is not a problem today and you don't need to do anything.
