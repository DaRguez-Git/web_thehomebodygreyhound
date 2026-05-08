# How to set up Open Library in Oficio

**What it does**: Open Library is the open book database Oficio uses to autocomplete title, author, year, ISBN and cover when adding a book to the Cultural Log.

## Steps

**No account or API key needed.** Just:

1. Open Oficio → **Settings → External APIs**.
2. In the **Open Library** block, flip the toggle.
3. (Optional) Tap **Test connection** to confirm the service responds from your network.

That's it. The next time you add a book to the Log, Oficio will search Open Library automatically.

## Cost and limits

Free with no formal limit. Open Library asks applications to be *reasonable* and to cache results — Oficio does that by default.

## Heads-up

- **Search can be slow** (1–2 seconds) or return slightly disordered results, especially for Spanish-language titles or obscure editions. If a book doesn't appear on the first try, try the ISBN or the English title.
- **No authentication**. Requests are anonymous. If Open Library ever requires an API key (it doesn't today), Oficio will be updated to support it.
