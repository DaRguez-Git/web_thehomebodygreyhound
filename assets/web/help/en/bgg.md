# How to set up BGG (BoardGameGeek) in Oficio

**What it does**: BGG (BoardGameGeek) is the reference database for board games — Oficio uses it to autocomplete title, year, player count, average duration and image when you add a game to the Cultural Log.

## Steps

**No account or API key needed.** Just:

1. Open Oficio → **Settings → External APIs**.
2. In the **BGG** block, flip the toggle.
3. (Optional) Tap **Test connection** to confirm the service responds.

That's it. The next time you add a board game to the Log, BGG will search its catalogue.

## Cost and limits

Free. No explicit rate limit, but **aggressive in practice**:

- BGG can take a few seconds to respond when the search isn't cached on its server.
- In some cases it returns a `202 Accepted` with a *"try again in X seconds"* message. The API asks you to retry after that interval.

Oficio retries automatically when a 202 comes back.

## Heads-up

- **The first search for a specific game can be slow** (3–5 seconds). BGG processes the query asynchronously the first time and then caches the result. Subsequent searches for the same game are instant.
- **XML API, not JSON**. BGG still uses an old XML API (XMLAPIcalypse). Oficio parses it internally; you only notice the speed difference.
- **It doesn't translate titles**. BGG is in English. If you search for *"Catán"* it may not find anything and you'll need to try *"Catan"* or *"Settlers of Catan"*.
