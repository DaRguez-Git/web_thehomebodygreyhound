# How to set up IGDB in Oficio

**What it does**: IGDB (Internet Game Database) is Oficio's source for video-game search — when you add a *Video game* entry to the Cultural Log, IGDB fills in title, year, cover art and platforms.

## Steps

IGDB uses Twitch's account system for authentication. Even if you don't use Twitch as a social network, you need to register an "application" in their developer console.

1. Go to [dev.twitch.tv](https://dev.twitch.tv/) with your Twitch account (create one first if you don't have it).
2. Verify your account has **2FA enabled** (Twitch requires it to register apps; if not, **Account Security → Set Up Two-Factor Authentication**).
3. Once 2FA is set, open [dev.twitch.tv/console/apps](https://dev.twitch.tv/console/apps).
4. Click **Register Your Application** and fill in:
   - **Name**: *Oficio* (or whatever you like; it must be unique on Twitch).
   - **OAuth Redirect URLs**: `http://localhost`. Yes, exactly: `http` and `localhost`. You won't actually use this redirect — but the form requires one.
   - **Category**: *Application Integration*.
   - **Client Type**: *Confidential*.
5. Click **Create**. You'll land on the app detail page.
6. Copy the **Client ID** shown on that page.
7. Click **New Secret** to generate a Client Secret. Copy it **immediately** — it is not shown again.
8. Paste both into Oficio: **Settings → External APIs → IGDB → Configure**.
9. Tap **Test connection** to verify.

## Cost and limits

Free. Rate limit: 4 requests per second. Oficio caches aggressively to stay well below it.

The internal access token IGDB requires expires every ~60 days; Oficio refreshes it automatically when needed.

## Heads-up

- **Registration goes through Twitch, not IGDB**. IGDB has been owned by Twitch since 2019 and they share authentication. It looks odd but `dev.twitch.tv` is the right URL.
- **The Client Secret is shown ONCE**. If you lose it, go back to the app's console and click **New Secret** to generate a new one (the previous secret is invalidated).
- **2FA is mandatory** on the Twitch account in order to create apps. If Twitch refuses to let you create an app, that is usually why.
