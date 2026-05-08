# How to enable the Health module in Oficio

**What it does**: the Health module reads your steps, weight, sleep and exercise from the system's health store (Health Connect on Android, HealthKit on iOS) and shows them in the app. When you log a weight, it writes back to the same store so it also shows up in the native Health app.

## Steps

**No account or API key needed.** Everything is local.

1. Open Oficio → **Settings → Modules**. The *Health* module is **off by default** (intentionally, so it doesn't ask for sensitive permissions if you're not going to use it).
2. Flip the *Health* toggle. It will appear in the bottom bar (or under the **More** button if you have many modules enabled).
3. Open the module. You'll see a welcome screen with a **Grant access** button.
4. Tap **Grant access**. The operating system opens its own permission dialog:
   - **Android**: the native Health Connect dialog lists the 5 types Oficio wants to read/write (steps, weight read, weight write, sleep, active exercise). You can grant all or only some.
   - **iOS**: the native HealthKit dialog with the same types.
5. You're returned to Oficio automatically. The four cards (steps, weight, sleep, exercise) populate with your data.

To log a new weight measurement from Oficio, in the *Weight* card tap the **+** icon top-right → enter the weight → **Save**. It will appear both in Oficio and in the native Health app.

## Cost and limits

Free. **Zero network**: reads and writes happen against the OS store on your own device. The data does not leave the phone.

## Heads-up

- **Android 7 or below**: the module won't work — Health Connect requires Android 8.0 minimum. The module screen will say "Health Connect not available".
- **Android 8–13**: Health Connect ships as a separate app. The first time you tap *Grant access*, Android will send you to the Play Store to install it. Then come back to Oficio and the flow continues.
- **Android 14+**: Health Connect is built-in. Works out of the box.
- **iOS**: physical devices only. Xcode's simulator has no HealthKit, so the module will appear empty.
- **Without prior data, there is nothing to show**. If you have never used a wearable, smart scale, or activity app, the cards will say "No data…". To have something to look at, hook up your usual wearable or app (Samsung Health / Google Fit / Apple Health) and let it feed the store.
- **Partial granting is possible**. If you only grant steps and refuse the rest, the other cards stay empty; the app won't bother you again with the dialog.
