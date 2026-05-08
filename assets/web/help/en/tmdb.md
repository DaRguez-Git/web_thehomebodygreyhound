# How to set up TMDb in Oficio

**What it does**: TMDb (The Movie Database) powers movie and series search in the Cultural Log — when you add a *Film* or *Series* entry, Oficio queries TMDb to autocomplete title, year, poster and synopsis.

## Steps

1. Create a free account at [themoviedb.org](https://www.themoviedb.org/signup).
2. Verify your email (you'll receive a link).
3. Once logged in, open your profile → **Settings → API** (or jump straight to [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)).
4. Click **Request an API Key** and choose type **Developer** (free; *Commercial* requires manual approval and you don't need it).
5. Fill in the form: personal use application, country, short description. Accept the terms.
6. Once approved (instant for Developer), you'll see two credentials:
   - **API Key (v3 auth)**: looks like `1234abcd...`. **This is NOT the one you need.**
   - **API Read Access Token (v4 auth)**: looks like `eyJhbGciOiJI...`. **This is the one Oficio needs.**
7. Copy the v4 token and paste it into Oficio: **Settings → External APIs → TMDb → Configure**.
8. Tap **Test connection** to verify.

## Cost and limits

Free for personal use. No per-request cost. Rate limit: ~50 requests per second, plenty for any normal use (Oficio caches results, so you won't notice the limit).

## Heads-up

- **v3 vs v4**: TMDb gives you TWO types of credential. Oficio uses the **v4 token** (also called *API Read Access Token*) starting with `eyJ…` because it is a JWT. If you copy the v3 (short alphanumeric string) by mistake you'll get 401 errors.
- **No need to request the Commercial API**. Developer is the free, sufficient one. Only request Commercial if you ship the app to third parties using your own key — and that's not your case, since each user enters their own.
