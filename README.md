# 🎮 Rock King - Mobile 3D Shooter

**Conquest Canyon** - Fast-paced vertical combat shooter optimized for mobile devices.

![Rock King](https://img.shields.io/badge/Platform-Android-green)
![Build](https://img.shields.io/badge/Build-Capacitor-blue)
![Framework](https://img.shields.io/badge/Framework-React-61dafb)

---

## 🎯 Game Overview

**Objective:** Control "King's Hill" - the central rock formation. The player with the most time on the hill wins!

**Features:**
- 8-player battles (1 Human + 7 AI Bots)
- Vertical combat with jumping mechanics
- Dynamic weapon system with zoom mechanics
- Mobile-optimized touch controls
- 5-minute fast-paced matches

---

## 🏗️ Tech Stack

- **Frontend:** React + TypeScript + Vite
- **Styling:** Tailwind CSS + shadcn/ui
- **3D Graphics:** Three.js + React Three Fiber
- **Mobile:** Capacitor (iOS & Android)
- **State Management:** TanStack Query

---

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:8080`

### Building Android APK

See detailed instructions in **[BUILD_INSTRUCTIONS.md](BUILD_INSTRUCTIONS.md)**

**Quick build:**
```bash
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

Then build APK in Android Studio.

---

## 📱 Features

### ✅ Implemented
- Mobile-first responsive design
- Landscape orientation enforcement
- Game lobby with leaderboard
- Interactive 3D map preview
- Game HUD with health, timer, ammo
- Conquest Canyon map rendering
- Google Sign-In UI
- Android APK build pipeline

### 🎯 Ready for Implementation
- 3D player movement and controls
- Weapon shooting mechanics
- AI bot behaviors
- Physics and collision detection
- Network multiplayer (optional)

---

## 🎮 Controls (Planned)

- **Left Joystick:** Movement
- **Right Joystick:** Camera/Aim
- **Jump Button:** Jump to elevated positions
- **Shoot Button:** Fire weapon
- **Weapon Switch:** Cycle through weapons

---

## 🗺️ Map Details

**Conquest Canyon:**
- Central King's Hill (main objective)
- 25-30 buildings for cover
- 4-5 secondary rock clusters
- Multiple ramps and platforms
- 360° tactical sightlines

---

## 🛠️ Development Roadmap

### Phase 1: Infrastructure ✅ COMPLETE
- [x] Mobile UI/UX
- [x] Navigation system
- [x] Capacitor setup
- [x] Build pipeline

### Phase 2: Gameplay (Next)
- [ ] Player controller with touch input
- [ ] Weapon mechanics
- [ ] AI bot implementation
- [ ] Physics engine integration

### Phase 3: Polish
- [ ] Sound effects and music
- [ ] Visual effects and particles
- [ ] Match statistics
- [ ] Achievement system

---

## 📦 Project Structure

```
rock-king/
├── src/
│   ├── components/
│   │   ├── game/          # Game-specific components
│   │   │   ├── MapView.tsx
│   │   │   ├── GameHUD.tsx
│   │   │   ├── Leaderboard.tsx
│   │   │   └── Scene3D.tsx
│   │   └── ui/            # UI components (shadcn)
│   ├── pages/
│   │   ├── Index.tsx      # Landing page
│   │   ├── Lobby.tsx      # Game lobby
│   │   └── Game.tsx       # Main game
│   ├── assets/            # Images and static files
│   └── lib/               # Utilities
├── android/               # Android native project (after cap add)
├── capacitor.config.ts    # Capacitor configuration
└── BUILD_INSTRUCTIONS.md  # Detailed build guide
```

---

## 🎨 Design System

**Color Palette:**
- Primary: Desert Sand (#b89968)
- Secondary: Military Dark Gray
- Accent: Objective Green
- Danger: Alert Red

**Typography:**
- Headings: Bold, tactical style
- Body: Clear, readable
- UI Text: Monospace for stats

---

## 🔧 Configuration

### Capacitor Config
Edit `capacitor.config.ts` for app settings:
- App ID: `app.lovable.a57f006466954800bb6b00c38318324e`
- App Name: `Rock King`
- Server URL: Points to Lovable preview for hot reload

### Environment
No environment variables needed for basic functionality.

---

## 📖 Documentation

- [Build Instructions](BUILD_INSTRUCTIONS.md)
- [Lovable Documentation](https://docs.lovable.dev/)
- [Capacitor Docs](https://capacitorjs.com/)

---

## 🤝 Contributing

This is a Lovable project! Make changes by:
1. Prompting in Lovable
2. Using Visual Edits
3. Editing code directly after export to GitHub

---

## 📄 License

This project was created with Lovable.

---

## 🎮 Lovable Project

**URL:** https://lovable.dev/projects/a57f0064-6695-4800-bb6b-00c38318324e

Built with ❤️ using [Lovable](https://lovable.dev/)

---

**Ready to dominate King's Hill? Build your APK and start playing!** 🏆
