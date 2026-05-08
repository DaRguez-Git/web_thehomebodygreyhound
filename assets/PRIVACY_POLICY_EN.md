# Oficio — Privacy Policy

**Last updated**: <!-- ADD PUBLICATION DATE, format YYYY-MM-DD -->

## Who is responsible

This app is developed by **TheHomebodyGreyhound** (the "developer"). For any
question about this policy or how your data is handled, contact
**<!-- [YOUR-CONTACT-EMAIL] -->**.

## At a glance

- **Oficio is offline by design.** Your tasks, journal, pantry, notes,
  recipes, weekly plan, shopping list, cultural log and the rest of
  the modules live exclusively in your device's local storage. The
  Health module reads and writes against the system's store (Health
  Connect / HealthKit), also on device.
- **There is no Oficio server.** We don't register accounts. We
  don't collect analytics. We don't show ads. We don't sell data.
- **Two cases where Oficio does send data to a third party**, and
  always because you explicitly enable the feature:
    1. Weather forecast: query to **WeatherAPI**.
    2. AI assistant (optional module): query to **Anthropic**.
- In both cases you can choose not to use the feature and the app
  remains 100% local.

## What Oficio stores on your device

Everything you enter into the app is stored on the device:

- **Local database** (encrypted by the OS): tasks, journal entries,
  pantry items, notes, notebooks, RSS feeds and articles, calendar
  events you create, recipes (including photos), cultural entries,
  weekly meal plan and shopping list.
- **Preferences** (`SharedPreferences`): theme choice, enabled
  modules, bottom-bar order, favourite locations, home-screen
  customization, currently selected day in each module.
- **Secure storage** (Keychain on iOS, EncryptedSharedPreferences
  on Android): API keys you configure for optional modules
  (Cultural Log, AI Assistant).
- **Files in the app's directory**: recipe photos you add (folder
  `recipe_photos/`).

This data does not leave the device unless you **explicitly** use
the export functions (Settings → "Share backup" / "Copy to
clipboard"), in which case the content goes wherever you choose
(another app, email, your own cloud storage…).

## Third-party services that do receive data when you use them

### 1. WeatherAPI (weatherapi.com)

- **When**: when you open the Weather module or check the forecast
  from the home screen.
- **What is sent**: the **coordinates** (latitude/longitude) of the
  location you have selected or are searching for, and the
  **literal text** you type in the location search.
- **What is NOT sent**: no data from tasks, journal, pantry, etc.
- **Frequency**: at most once every 10 minutes (local cache) per
  queried location.
- **Provider's policy**:
  https://www.weatherapi.com/privacy.aspx

### 2. Anthropic (Claude) — only if you enable the AI module

- **When**: when you send a message in the AI module's chat. If you
  do not use that module, no calls are made.
- **What is sent**: the text you type and, if the AI invokes one of
  its tools to answer you, the **results of that tool** over your
  data (e.g. if you ask "what did I write in my journal about
  vacations?", the tool reads your journal and sends the relevant
  fragments to Anthropic).
- **What is NOT sent**: anything the AI hasn't requested via a
  tool. Your full database is never sent.
- **Provider's policy**: Anthropic states in its API terms that it
  does **not train its models on data sent through the API by
  default**. See https://www.anthropic.com/legal/privacy
- **How to disable it**: delete the API key in Settings → AI, or
  disable the AI module in Settings → Modules.

> If Oficio adds other AI providers in the future (OpenAI, Google
> Gemini, etc.), this policy will be updated to name them and link
> their respective policies. Choosing a provider will always be
> your decision, and by default the module ships without any
> provider configured.

## System permissions the app requests

Oficio only requests the permissions strictly required for the
module you are using:

- **Calendar** (Android: `READ_CALENDAR`/`WRITE_CALENDAR`, iOS:
  `NSCalendarsUsageDescription`): required for the Calendar module.
  Reads and creates events in the device's native calendar. No
  cloud transfer — the OS calendar handles everything.
- **Notifications** (Android 13+: `POST_NOTIFICATIONS`): for the
  optional morning summary. The notification is scheduled locally.
- **Exact alarms** (`SCHEDULE_EXACT_ALARM`, `USE_EXACT_ALARM`): so
  the morning notification fires at the chosen time even with
  Android's "Doze" mode active.
- **Location** (`ACCESS_COARSE_LOCATION`, `ACCESS_FINE_LOCATION`):
  only requested if you tap "Use my location" in the Weather
  module. The coordinate is sent to WeatherAPI; no history is
  stored and it is not shared with anyone else.
- **Camera** (`NSCameraUsageDescription`) and **photos**
  (`NSPhotoLibraryUsageDescription`): to add photos to recipes. The
  photo is copied to the app's directory and never uploaded to any
  server.
- **Health** (Android: `health.READ_*` and `health.WRITE_WEIGHT`
  permissions through Health Connect; iOS:
  `NSHealthShareUsageDescription` and `NSHealthUpdateUsageDescription`
  through HealthKit): only requested if you enable the Health module
  and open it. Oficio reads your steps, weight, sleep and exercise
  from the system's health store and displays them in the app. When
  you log a new weight measurement, it is written back to the same
  system store so it also shows up in the native Health app. **This
  data is not sent to any server**: reads and writes happen on
  device against Health Connect (Android) or HealthKit (iOS).
- **Internet**: required for WeatherAPI, AI and to download RSS
  feeds.

No permission is used for tracking purposes.

## Cookies, identifiers and advertising

Oficio uses no cookies, includes no analytics or advertising SDKs,
generates and stores no advertising identifiers (Google AAID, Apple
IDFA), and sends no usage telemetry.

## How long is data kept

For as long as the app is installed on your device and you do not
delete it manually. If you uninstall the app, the operating system
also wipes the local database and the keys in secure storage.

## Your rights

- **Access and export**: any data is exportable from Settings →
  "Share backup" or "Copy to clipboard". Format is human-readable
  JSON.
- **Deletion**: you can delete individual items from within the app.
  To wipe everything at once, uninstall the app or clear app data
  from OS Settings → Apps → Oficio → Storage.
- **Rectification and objection**: since you enter the data and
  there is no central server, there is no administrative procedure
  to request — you modify or delete directly in the app.

For matters concerning data already sent to a third party
(WeatherAPI, Anthropic), please contact that third party directly;
their policies and procedures are linked above.

## Children

Oficio is not specifically aimed at children under 13 (or the
minimum age in your jurisdiction). We do not collect personally
identifiable information; nonetheless, if you are the guardian of a
minor using the app, we recommend supervising features that require
a network connection (Weather, AI).

## Changes to this policy

If the policy changes (for example, on adding another AI provider),
we will publish the new version with an updated "Last updated"
date and, if the change is material, will communicate it in an
upcoming app release.

## Contact

**<!-- [YOUR-CONTACT-EMAIL] -->**

This policy is governed by Spanish law and, where applicable, by
the EU General Data Protection Regulation (GDPR).
