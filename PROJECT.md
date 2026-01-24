# Achilles Fitness

## Tu Entrenador Personal para Alcanzar el Físico de un Guerrero Griego

> *"Fashion fades, but gains remain."* — Probably some Greek philosopher, if gyms existed back then.

---

## The Origin Story

Picture this: You want to get in shape like Brad Pitt in *Troy*—ripped abs, warrior shoulders, the whole Greek demigod aesthetic. You could hire a personal trainer for €100/hour, or you could build an app that does the same thing... but follows you everywhere in your pocket, works offline, and never judges you for skipping leg day.

**Achilles Fitness** is that app. It's a Progressive Web App (PWA) built with React and TypeScript that acts as your personal fitness coach. It tracks your workouts, monitors your nutrition, handles intermittent fasting, and shows you exactly how far you've come on your journey from mortal to myth.

---

## Technical Architecture: How It All Fits Together

### The Big Picture

Think of Achilles Fitness as a Greek temple with four pillars:

```
                    ┌─────────────────────────────┐
                    │         React UI            │
                    │   (The Temple's Facade)     │
                    └─────────────────────────────┘
                                 │
          ┌──────────────────────┼──────────────────────┐
          │                      │                      │
          ▼                      ▼                      ▼
   ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
   │   Zustand   │      │    Dexie    │      │   Vite +    │
   │   Stores    │◄────►│  IndexedDB  │      │    PWA      │
   │  (Memory)   │      │   (Disk)    │      │  (Offline)  │
   └─────────────┘      └─────────────┘      └─────────────┘
```

1. **React UI** — What you see. Components, pages, buttons, charts.
2. **Zustand Stores** — The app's short-term memory. Fast state management.
3. **Dexie/IndexedDB** — The app's long-term memory. Persists everything to disk.
4. **Vite + PWA** — The magic that makes it installable and work offline.

### The Data Flow

When you log a set during your workout, here's what happens:

```
You tap "Log Set"
       │
       ▼
┌─────────────────┐
│  SetInput.tsx   │  ← Component captures weight/reps
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  workoutStore   │  ← Zustand validates & calculates 1RM
│    addSet()     │     Checks if it's a PR
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│     Dexie       │  ← Saves to IndexedDB for permanence
│  workoutSets    │
└─────────────────┘
```

This pattern repeats everywhere: **Component → Store → Database**. Simple, predictable, debuggable.

---

## Codebase Structure: Finding Your Way Around

```
achilles-fitness/
│
├── src/
│   ├── App.tsx              # 🏠 Home base - tab routing lives here
│   ├── main.tsx             # 🚀 Launch pad - React starts here
│   │
│   ├── types/
│   │   └── index.ts         # 📋 The contracts - all TypeScript interfaces
│   │
│   ├── features/            # 🏛️ The four pillars of the app
│   │   ├── workouts/        # 💪 Track exercise sessions
│   │   ├── progress/        # 📈 Body metrics & PRs
│   │   ├── nutrition/       # 🍗 Macro tracking
│   │   └── settings/        # ⚙️ Profile & onboarding
│   │
│   ├── components/          # 🧱 Reusable building blocks
│   │   ├── ui/              #    Base: Card, Button, Modal, Input
│   │   ├── layout/          #    Structure: BottomNav, Header
│   │   ├── workout/         #    Domain: ExerciseCard, RestTimer
│   │   └── charts/          #    Data viz components
│   │
│   ├── stores/              # 🧠 The app's brain
│   │   ├── userStore.ts     #    Who you are + app state
│   │   ├── workoutStore.ts  #    What you're lifting
│   │   └── fastingStore.ts  #    When you're eating
│   │
│   ├── services/db/
│   │   └── database.ts      # 💾 IndexedDB setup via Dexie
│   │
│   ├── data/
│   │   ├── programs.ts      # 📚 Workout programs (Achilles, Wolverine, etc.)
│   │   └── exercises.ts     # 🏋️ Exercise database with form cues
│   │
│   └── utils/
│       └── calculations.ts  # 🧮 Fitness math (1RM, macros, strength levels)
│
├── vite.config.ts           # ⚡ Build config + PWA setup
└── package.json             # 📦 Dependencies
```

### The Feature Module Pattern

Each feature follows the same structure:

```
features/workouts/
├── pages/
│   ├── TodayWorkout.tsx     # Main workout screen
│   └── ExerciseDetail.tsx   # Exercise modal view
└── index.ts                 # Barrel export
```

This isn't random—it's intentional. When you need to work on "progress tracking," you go to `features/progress/`. When you need to fix "the workout screen," you go to `features/workouts/`. No hunting through 50 random files.

---

## Technologies Used (And Why)

### React 19 + TypeScript

**Why React?** Because it's the industry standard and the ecosystem is massive. Finding answers on Stack Overflow? Easy. Hiring someone who knows it? Easy. Building complex UIs? React handles it.

**Why TypeScript?** Because fitness apps deal with complex data—workouts have sessions, sessions have sets, sets have weights and reps. TypeScript catches errors *before* they reach users. When you typo `weight` as `wieght`, TypeScript screams at you during development, not at 3 AM when a user files a bug report.

### Zustand for State Management

**Why not Redux?** Redux is great, but it's overkill for this app. Zustand is like Redux's chill younger sibling—same philosophy (single source of truth), but 90% less boilerplate.

```typescript
// Creating a store in Zustand is this simple:
const useWorkoutStore = create<WorkoutState>((set) => ({
  currentSession: null,
  startSession: (template) => set({ currentSession: template }),
  endSession: () => set({ currentSession: null }),
}))
```

That's it. No reducers, no action creators, no connect(). Just a hook that returns your state.

### Dexie for IndexedDB

**Why IndexedDB?** LocalStorage has a 5-10MB limit. IndexedDB can store gigabytes. Fitness apps accumulate data—months of workouts, hundreds of sets, progress photos. You need real storage.

**Why Dexie?** Raw IndexedDB APIs are a nightmare. Dexie wraps them in a friendly Promise-based interface:

```typescript
// Without Dexie (IndexedDB raw API):
const request = indexedDB.open('mydb', 1);
request.onsuccess = function(event) {
  const db = event.target.result;
  const tx = db.transaction('workouts', 'readonly');
  const store = tx.objectStore('workouts');
  const getRequest = store.get(id);
  getRequest.onsuccess = function() {
    // Finally, your data... 🥴
  };
};

// With Dexie:
const workout = await db.workoutSessions.get(id); // Done. 😎
```

### Vite + PWA Plugin

**Why Vite?** Speed. Vite's dev server starts in milliseconds because it serves ES modules directly instead of bundling everything first. During development, changes appear instantly.

**Why PWA?** Two magic words: **offline support** and **installable**. Users can add Achilles to their home screen and use it at the gym without wifi. The service worker caches everything—even YouTube form videos via smart caching rules.

### Tailwind CSS 4

**Why Tailwind?** Because CSS-in-JS solutions add runtime overhead, and maintaining separate CSS files leads to dead code accumulating like old gym equipment nobody uses.

Tailwind keeps styles close to components, tree-shakes unused classes, and makes responsive design trivial:

```jsx
<div className="text-sm md:text-base lg:text-lg">
  {/* Small on mobile, medium on tablet, large on desktop */}
</div>
```

---

## Why We Made These Technical Decisions

### Decision 1: No React Router

You might notice there's no `react-router-dom`. Instead, navigation is controlled by a simple `activeTab` state in `userStore`:

```typescript
// In App.tsx
const { activeTab } = useUserStore()

return (
  <>
    {activeTab === 'workout' && <TodayWorkout />}
    {activeTab === 'progress' && <ProgressDashboard />}
    {activeTab === 'nutrition' && <MacroTracker />}
    {activeTab === 'settings' && <Settings />}
  </>
)
```

**Why?** This app is a mobile-first PWA with four main screens. No deep linking needed, no complex nested routes, no URL parameters. React Router would be overhead for no benefit. Sometimes the simplest solution is the right one.

### Decision 2: Feature-Based Architecture

We could have organized by file type:

```
components/
  TodayWorkout.tsx
  ProgressDashboard.tsx
  MacroTracker.tsx
pages/
services/
```

Instead, we organize by feature:

```
features/
  workouts/
  progress/
  nutrition/
```

**Why?** When you work on "nutrition tracking," everything you need is in one folder. You're not jumping between `components/`, `hooks/`, `services/`, and `pages/` folders. Colocation reduces cognitive load.

### Decision 3: CSS Variables + Tailwind + Inline Styles (The Trifecta)

This might look weird:

```jsx
<div
  className="rounded-lg p-4"
  style={{ backgroundColor: workoutTypeColors[type] }}
>
```

**Why the mix?**
- **CSS Variables** define the design system (colors, spacing)
- **Tailwind** handles structural styling (padding, flex, grid)
- **Inline styles** handle *dynamic* values that depend on runtime data

Workout type colors change based on whether it's push day, pull day, or leg day. Putting every possible color in Tailwind's config bloats the CSS. Inline styles keep it lean.

### Decision 4: Zustand Persistence + Dexie (Dual Storage)

We use *both* localStorage (via Zustand's `persist`) and IndexedDB (via Dexie). Why not just one?

| Storage | Fast? | Capacity | Survives Refresh? |
|---------|-------|----------|-------------------|
| Memory (Zustand) | ⚡ Instant | Limited | ❌ No |
| localStorage | Fast | 5-10MB | ✅ Yes |
| IndexedDB | Medium | Unlimited | ✅ Yes |

**The strategy:**
- **Zustand persist** saves critical UI state to localStorage (user profile, active tab, fasting sessions). This loads instantly on app start.
- **Dexie/IndexedDB** stores the heavy stuff (workout history, all sets ever logged, progress photos). This loads asynchronously after the UI is up.

Result: The app feels instant on launch, and no data is ever lost.

---

## Lessons Learned: Bugs, Pitfalls, and Wisdom

### Lesson 1: The Epley Formula Revelation

**The Bug:** Early versions tracked weight lifted but showed no progress over time. Users felt demotivated—"I'm lifting the same weight!"

**The Fix:** Implement **estimated 1RM** using the Epley formula:

```typescript
const estimated1RM = weight * (1 + reps / 30)
```

If you bench 60kg for 8 reps, your estimated max is ~76kg. Now the app can track *strength*, not just weight. Suddenly, doing 60kg for 10 reps shows as progress (1RM: ~80kg).

**The Lesson:** In fitness apps, raw data isn't enough. Users need *interpreted* data. Nobody cares that they lifted 157.5kg total volume today—they care that they're getting stronger.

### Lesson 2: The localStorage Quota Nightmare

**The Bug:** After a few months of use, the app crashed with `QuotaExceededError`.

**The Root Cause:** Storing workout history in localStorage. Each session with 20+ sets, every day, for months... that's megabytes of JSON.

**The Fix:** Move heavy data to IndexedDB, keep only essentials in localStorage:

```typescript
// Good: Store in localStorage
{ userId: "abc", currentPhase: "bulk", activeTab: "workout" }

// Bad: Store in localStorage (moved to Dexie)
{ workoutHistory: [ /* 500 sessions × 20 sets each */ ] }
```

**The Lesson:** localStorage has a ~5MB limit per domain. It's for preferences, not databases. Use IndexedDB for anything that grows over time.

### Lesson 3: The Fasting Timer That Stopped

**The Bug:** Users reported the fasting timer "freezing" when they switched apps.

**The Root Cause:** Using `setInterval` to update time. When the app goes to background, browsers throttle intervals to save battery.

**The Fix:** Store the *start timestamp*, calculate elapsed time on each render:

```typescript
// Bad: Tracking elapsed time with intervals
const [elapsed, setElapsed] = useState(0)
useEffect(() => {
  const interval = setInterval(() => setElapsed(e => e + 1), 1000)
  return () => clearInterval(interval)
}, [])

// Good: Calculate from timestamp
const getElapsedTime = () => {
  if (!session.startTime) return 0
  return Math.floor((Date.now() - new Date(session.startTime).getTime()) / 1000)
}
```

**The Lesson:** Never track duration by incrementing a counter. Store the timestamp, calculate the delta. Clocks work even when your app doesn't.

### Lesson 4: The Personal Record False Positives

**The Bug:** Users got "New PR!" notifications on their first session with a new exercise. Obviously not a PR—they had no history.

**The Fix:** Check if previous records exist before celebrating:

```typescript
const isPersonalRecord = previousMax > 0 && newWeight > previousMax
```

**The Lesson:** Edge cases matter more in fitness apps than you'd think. First workout, switching programs, deload weeks—users follow non-linear paths. Always ask "what if this is the first time?"

### Lesson 5: The Safe Area Saga

**The Bug:** On iPhones with the Dynamic Island, the header text was hidden behind the notch. On older iPhones, the bottom navigation overlapped the home indicator.

**The Fix:** Respect the safe areas:

```css
.page-container {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}

.bottom-nav {
  padding-bottom: calc(0.5rem + env(safe-area-inset-bottom));
}
```

**The Lesson:** Mobile-first doesn't just mean "small screens." It means notches, home indicators, edge gestures, keyboard overlays. Test on real devices, not just Chrome DevTools.

### Lesson 6: The Hydration Mismatch Mystery

**The Bug:** React threw hydration warnings in development. The initial render didn't match.

**The Root Cause:** Server (or build-time) rendering showed one thing, client showed another. Specifically, dates formatted differently based on locale.

**The Fix:** Use `date-fns` with explicit locale:

```typescript
import { es } from 'date-fns/locale'
format(date, 'EEEE, d MMMM', { locale: es })
```

**The Lesson:** Dates, times, and numbers are localization landmines. Always use a library with explicit locale settings. Never trust `toLocaleDateString()` to be consistent.

---

## How Good Engineers Think

### 1. Start With Types

Before writing any UI, define your data shapes:

```typescript
interface WorkoutSet {
  id: string
  sessionId: string
  exerciseId: string
  weight: number
  reps: number
  estimated1RM: number
  isPersonalRecord: boolean
  completedAt: Date
}
```

**Why?** Types are documentation that the compiler enforces. When you have 20 components passing workout data around, types ensure everyone agrees on what a "workout" looks like.

### 2. Separate What Changes From What Doesn't

In Achilles, the *programs* and *exercises* are static data. They live in `/data/` as plain objects. The *user's workout logs* change constantly. They live in the database.

```typescript
// Static (never changes during runtime)
export const ACHILLES_PROGRAM: WorkoutProgram = { ... }

// Dynamic (changes all the time)
const sessions = await db.workoutSessions.toArray()
```

**Why?** Static data can be bundled and cached forever. Dynamic data needs database queries, loading states, and error handling. Mixing them creates confusion.

### 3. Make Invalid States Impossible

Instead of:
```typescript
interface FastingSession {
  isActive: boolean
  isPaused: boolean
  isCompleted: boolean
}
// What if isActive AND isCompleted are both true? 🤔
```

Use discriminated unions:
```typescript
type FastingStatus = 'active' | 'completed' | 'broken'
interface FastingSession {
  status: FastingStatus
}
// Now it can only be ONE thing. ✅
```

**Why?** Fewer bugs. You can't accidentally set conflicting flags. The type system prevents entire categories of errors.

### 4. Fail Gracefully

The app must work even when things go wrong:

```typescript
const getPersonalRecord = (exerciseId: string): number => {
  const sets = db.workoutSets
    .where('exerciseId').equals(exerciseId)
    .toArray()

  if (sets.length === 0) return 0  // No history? Return 0, not null or undefined.

  return Math.max(...sets.map(s => s.weight))
}
```

**Why?** Real users have empty states, corrupted data, and devices that lose power mid-operation. Assume nothing, handle everything.

### 5. Optimize Perceived Performance

The app loads Zustand stores (localStorage) instantly, but Dexie queries take milliseconds. So we show the UI immediately with loading placeholders:

```tsx
const TodayWorkout = () => {
  const [loading, setLoading] = useState(true)
  const sessions = useWorkoutStore(s => s.recentSessions)

  useEffect(() => {
    loadRecentSessions().then(() => setLoading(false))
  }, [])

  if (loading) return <Skeleton /> // User sees *something* instantly
  return <WorkoutList sessions={sessions} />
}
```

**Why?** An app that shows a blank screen for 500ms feels broken. An app that shows a skeleton for 500ms feels fast. Perception > reality.

---

## Best Practices We Followed

### 1. Colocation

Keep related code together:
- Components import their own styles
- Feature folders contain their own pages
- Stores import from types, not scattered interfaces

### 2. Single Source of Truth

User data lives in `userStore`. Workout data lives in `workoutStore`. No duplicates, no sync issues.

### 3. Explicit Over Implicit

```typescript
// Explicit: Clear what this does
const calculateMacros = (bodyweightKg: number, phase: 'bulk' | 'cut' | 'maintain') => { ... }

// Implicit: Magic numbers, unclear intent
const f = (w, p) => w * (p === 1 ? 33 : p === 2 ? 25 : 30)
```

### 4. Progressive Enhancement

Core features work offline. Nice-to-haves (YouTube embeds) require connectivity. The app degrades gracefully.

### 5. Mobile-First Design

Every component starts with mobile constraints, then adds tablet/desktop styles. Not the other way around.

---

## The Tech Stack Summary

| Layer | Technology | Why |
|-------|------------|-----|
| Framework | React 19 | Ecosystem, performance, familiarity |
| Language | TypeScript 5.9 | Type safety, better DX |
| State | Zustand | Simple, fast, minimal boilerplate |
| Database | Dexie (IndexedDB) | Offline storage, large capacity |
| Styling | Tailwind CSS 4 | Utility-first, no runtime overhead |
| Build | Vite 7.2 | Speed, ES modules, HMR |
| PWA | Vite PWA Plugin | Offline support, installable |
| Icons | Lucide React | Lightweight, consistent |
| Charts | Recharts | React-native, customizable |
| Dates | date-fns | Immutable, tree-shakeable, locale support |

---

## What's Next?

The architecture supports expansion:

- **AI Coach** — Analyze workout patterns, suggest improvements
- **Social Features** — Share workouts, compare with friends
- **Wearable Sync** — Import heart rate, sleep data
- **Export Options** — PDF progress reports, calendar integration
- **Multi-language** — Already Spanish, ready for i18n

The foundation is solid. The temple of gains is ready for more pillars.

---

## Final Thoughts

Building Achilles Fitness taught me that fitness apps aren't just CRUD operations with a gym theme. They're about *motivation*—showing progress, celebrating PRs, making users feel like warriors.

The code reflects this: Every calculation (1RM, strength level, weekly volume) exists to transform raw numbers into meaningful progress. Every animation and color choice serves the Greek warrior aesthetic that makes users *want* to open the app.

Good fitness apps don't just track workouts. They make you feel like Achilles himself, one set at a time.

---

*"We are what we repeatedly do. Excellence, then, is not an act, but a habit."*
— Aristotle (who definitely would have tracked his macros)

