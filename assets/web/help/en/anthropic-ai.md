# How to set up Anthropic AI in Oficio

**What it does**: with your Anthropic API key, Oficio's AI module becomes an assistant that can read and modify all your modules (tasks, journal, pantry, etc.) using local tools.

## Steps

1. Go to [console.anthropic.com](https://console.anthropic.com/) and create an account (with email or Google).
2. Once inside, head to **Settings → API Keys** (or use the **API Keys** entry in the side menu).
3. Click **Create Key** and give it a name you'll recognise later (e.g. *Oficio*).
4. Copy the key that appears; it starts with `sk-ant-…`. Copy it before closing the dialog: **it is shown only once** (you can regenerate it later if you lose it).
5. Before you can use it, go to **Settings → Plans & Billing** and add credit (minimum $5). Without credit the key fails with a 401 error.
6. Paste the key into Oficio: **Settings → AI → API key** and tap **Test connection** to confirm it works.

## Cost and limits

Pay as you go, no subscription. Varies per model:

- **Haiku**: cheapest, ~$0.25 per million input tokens and ~$1.25 per million output tokens. For typical personal use in Oficio (short queries, no more than 10–20 messages a day) it usually costs **less than €1/month**.
- **Sonnet**: balanced cost and capability, ~$3 / $15 per million.
- **Opus**: most capable but most expensive, ~$15 / $75 per million.

You can switch model at any time from **Settings → AI → Model**.

## Heads-up

- **`console.anthropic.com` ≠ `claude.ai`**. Even if you already have an account on `claude.ai` for chatting, you need a separate account on `console.anthropic.com` to get an API key. The `claude.ai` one does not work.
- **You must add credit before the first call**. This is the most common mistake: you create the account, generate a key, paste it into the app, and everything fails with 401 — because the account has $0 balance.
- **The API key lives encrypted on your device**. Oficio stores it in Keychain (iOS) or EncryptedSharedPreferences (Android). To revoke it, go back to the Anthropic console and delete it there; in Oficio just tap **Delete key** in Settings → AI.
