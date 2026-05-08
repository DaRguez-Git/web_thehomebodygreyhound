# How to set up Last.fm in Oficio

**What it does**: Last.fm keeps your music-listening history (*scrobbles*). With your API key + username, Oficio can show your tops, recent listens and link albums in the Cultural Log.

## Steps

1. If you don't have a Last.fm account, sign up at [last.fm/join](https://www.last.fm/join). Note down your **username** (not the email — you'll need it later).
2. Set up a scrobble client (Spotify integration, Pano Scrobbler on Android, etc.) so your listens show up on your profile. Without scrobbles, Last.fm has nothing to show you.
3. With the account ready, go to [last.fm/api/account/create](https://www.last.fm/api/account/create) (logged in).
4. Fill in the form:
   - **Application name**: *Oficio* (or whatever you like).
   - **Application description**: anything, e.g. *Personal media tracker*.
   - **Application homepage URL**: anything (your blog, or `https://oficio.app`).
   - **Callback URL**: leave it empty.
5. Accept the terms and click **Submit**.
6. The next page shows you:
   - **API key**: copy this. This is the one Oficio needs.
   - **Shared secret**: ignore it. It's only used for writing scrobbles, and Oficio only reads.
7. Paste the key into Oficio: **Settings → External APIs → Last.fm → Configure**:
   - **API Key**: from the previous step.
   - **Username**: your Last.fm handle (not the email).
8. Tap **Test connection**. If everything is fine, Last.fm will return your profile info.

## Cost and limits

Free. Rate limit: 5 requests per second and roughly 1,000 per day per application. Oficio caches its calls; you won't hit the limit.

## Heads-up

- **"Username" is the handle, not the email**. This is the #1 mistake on this service: you put your email in the *Username* field and the test fails with "User not found". Your handle is the one that appears in your profile URL — `last.fm/user/<YOUR_HANDLE>`.
- **If your account has no scrobbles, there's nothing to show**. The API key will respond fine, but the lists will stay empty until some app starts logging your listens.
- **You don't need the `Shared secret`** for Oficio (read-only use). If a guide somewhere asks for it, ignore it in this case.
