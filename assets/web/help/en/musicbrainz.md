# How to set up MusicBrainz in Oficio

**What it does**: MusicBrainz is the open music encyclopedia — Oficio queries it to add albums, artists and discography data to the Cultural Log when you log classical music, jazz, old vinyl or anything Last.fm doesn't cover well.

## Steps

**No account or API key needed.** Just:

1. Open Oficio → **Settings → External APIs**.
2. In the **MusicBrainz** block, flip the toggle.
3. (Optional) Tap **Test connection** to confirm the service responds from your network.

That's it. Oficio identifies itself with `User-Agent: Oficio/1.0` on every request — out of courtesy and because MusicBrainz requires apps using its API to do so.

## Cost and limits

Free. **Rate limit: 1 request per second** (the strictest of the sources Oficio uses). It's a hard limit: if three apps abuse it from the same IP, MusicBrainz can temporarily block you with 503.

Oficio respects the limit by serializing requests internally.

## Heads-up

- **Don't abuse it**. MusicBrainz is run by a non-profit (the MetaBrainz Foundation) on goodwill. Searching 50 albums in 5 seconds will get you blocked and bring the API down for everyone on your network.
- **If you need Last.fm data (listens), this isn't it**. MusicBrainz only carries discographic metadata: artists, albums, tracks, dates. For "what have I listened to" use Last.fm.
