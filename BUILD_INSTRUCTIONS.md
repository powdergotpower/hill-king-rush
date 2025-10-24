# Rock King - Android APK Build Instructions

## Prerequisites

1. **Node.js** (v18 or higher): [Download Node.js](https://nodejs.org/)
2. **Git**: [Download Git](https://git-scm.com/)
3. **Android Studio**: [Download Android Studio](https://developer.android.com/studio)
4. **Java JDK 17**: [Download JDK](https://adoptium.net/)

---

## Method 1: Build Locally on Your Computer

### Step 1: Transfer to GitHub
1. In Lovable, click the **GitHub** button (top right)
2. Click **"Export to GitHub"**
3. Clone your repository locally:
   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd <YOUR_PROJECT_NAME>
   ```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Build the Web App
```bash
npm run build
```

### Step 4: Add Android Platform
```bash
npx cap add android
```

### Step 5: Sync Capacitor
```bash
npx cap sync android
```

### Step 6: Open in Android Studio
```bash
npx cap open android
```

### Step 7: Build APK in Android Studio
1. Wait for Gradle sync to complete
2. Go to **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
3. Once complete, click **"locate"** to find your APK file
4. Install the APK on your Android device

**APK Location:** `android/app/build/outputs/apk/debug/app-debug.apk`

---

## Method 2: Automatic Build with GitHub Actions

The project includes a GitHub Actions workflow that automatically builds the APK when you push to the main branch.

### Step 1: Push to GitHub
After transferring your project to GitHub (see Method 1, Step 1), ensure your code is pushed:
```bash
git add .
git commit -m "Setup Android build"
git push origin main
```

### Step 2: Monitor Build
1. Go to your GitHub repository
2. Click on the **"Actions"** tab
3. Watch the "Build Android APK" workflow run
4. Once complete, download the APK from the **Artifacts** section

---

## Testing on Device

### Installing the APK:

**Option A: USB Cable**
1. Enable **Developer Options** on your Android device
2. Enable **USB Debugging**
3. Connect device via USB
4. Run: `adb install app-debug.apk`

**Option B: Direct Install**
1. Transfer APK to your device
2. Open the APK file
3. Allow installation from unknown sources
4. Install the app

---

## Development Mode (Hot Reload)

For faster development, you can use hot reload:

1. Make sure the `server.url` in `capacitor.config.ts` points to your Lovable preview URL
2. Build and install the APK once
3. Any changes you make in Lovable will automatically appear in the app!

---

## Production Build

For production release:

1. Remove or comment out the `server` section in `capacitor.config.ts`
2. Build: `npm run build`
3. Sync: `npx cap sync android`
4. In Android Studio: **Build** → **Generate Signed Bundle / APK**
5. Follow the signing wizard to create a release APK

---

## Troubleshooting

### Gradle Build Fails
- Ensure Java JDK 17 is installed
- Run: `cd android && ./gradlew clean`

### App Crashes on Launch
- Check logcat in Android Studio: **View** → **Tool Windows** → **Logcat**

### Screen Orientation Issues
- The app is designed for landscape mode
- If it shows in portrait, rotate your device

---

## Next Steps: Adding Gameplay

The current build includes:
- ✅ Landscape orientation
- ✅ Map rendering
- ✅ Game HUD
- ✅ UI navigation

To add actual 3D gameplay:

1. **Physics Engine**: Add `@react-three/cannon` or `cannon-es`
2. **Player Controller**: Implement touch joystick controls
3. **AI Bots**: Create enemy AI logic
4. **Shooting Mechanics**: Implement raycasting for bullets
5. **Collision Detection**: Add hit detection

Consider using:
- **Three.js + Cannon.js** for physics
- **Babylon.js** (has built-in physics)
- **Unity WebGL** (export Unity game to web)

---

## Resources

- [Capacitor Documentation](https://capacitorjs.com/)
- [Three.js Documentation](https://threejs.org/docs/)
- [Babylon.js Documentation](https://doc.babylonjs.com/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)

---

**🎮 Your game infrastructure is ready! Now add the gameplay mechanics to bring Rock King to life!**
