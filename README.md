# Achilles Fitness 🏛️

App de fitness PWA — entrenador personal en tu bolsillo. Tracking de workouts, nutrición, ayuno intermitente y progreso.

**Stack:** React 19 + TypeScript + Vite + Tailwind CSS 4 + Zustand + Dexie (IndexedDB) + Supabase (sync opcional)

## Quick Start

```bash
# 1. Clonar
git clone https://github.com/darLAAGAM/achilles-fitness.git
cd achilles-fitness

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Edita .env con tus credenciales de Supabase (ver sección abajo)

# 4. Arrancar dev server
npm run dev
```

La app arranca en `http://localhost:5173`.

## Configurar Supabase (Sync en la nube)

La app funciona 100% offline con IndexedDB. Supabase es **opcional** para sync entre dispositivos.

### Si quieres activar sync:

1. Crea un proyecto en [supabase.com](https://supabase.com) (gratis)
2. Ve a **SQL Editor** y ejecuta el contenido de `supabase-setup.sql`
3. Copia tu URL y anon key desde **Settings → API**
4. Crea `.env` en la raíz:

```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-anon-key-aqui
```

### Si NO necesitas sync:

No hace falta tocar nada. La app usa IndexedDB local por defecto. El sync con Supabase se activa manualmente desde Settings dentro de la app.

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Dev server con HMR |
| `npm run build` | Build de producción |
| `npm run preview` | Preview del build |
| `npm run lint` | ESLint |

## Estructura del proyecto

```
src/
├── features/           # Módulos principales
│   ├── workouts/       # 💪 Tracking de sesiones
│   ├── progress/       # 📈 Métricas y PRs
│   ├── nutrition/      # 🍗 Macros
│   └── settings/       # ⚙️ Perfil y onboarding
├── components/         # Componentes reutilizables
│   ├── ui/             # Base: Card, Button, Modal
│   ├── layout/         # BottomNav, Header
│   ├── workout/        # ExerciseCard, RestTimer
│   └── charts/         # Gráficas
├── stores/             # Zustand (estado global)
├── services/db/        # Dexie/IndexedDB
├── services/supabase/  # Sync cloud (opcional)
├── data/               # Programas y ejercicios (estáticos)
└── utils/              # Cálculos (1RM, macros, etc.)
```

## Cómo personalizar

### Cambiar programas de entrenamiento
Edita `src/data/programs.ts`. Cada programa tiene fases, días y ejercicios. El formato es auto-explicativo.

### Cambiar ejercicios
Edita `src/data/exercises.ts`. Puedes añadir/quitar ejercicios con sus vídeos de YouTube y cues de forma.

### Cambiar estética/colores
Los colores están en CSS variables en `src/index.css` y en las constantes de Tailwind. El tema actual es "Greek warrior" pero puedes cambiarlo entero tocando las variables.

### Cambiar rutinas de movilidad
Edita `src/data/mobility-routines.ts`.

## Tecnologías clave

- **Zustand** — Estado global simple (sin boilerplate de Redux)
- **Dexie** — Wrapper sobre IndexedDB para storage offline ilimitado
- **PWA** — Instalable en móvil, funciona sin internet
- **Recharts** — Gráficas de progreso
- **date-fns** — Manejo de fechas con locale

## Arquitectura de datos

```
UI Component → Zustand Store → Dexie (IndexedDB)
                                  ↕ (opcional)
                              Supabase (cloud sync)
```

- **Zustand + localStorage:** Estado UI (usuario, tab activa, sesión de ayuno). Carga instantánea.
- **Dexie/IndexedDB:** Datos pesados (historial de workouts, sets, métricas). Sin límite de tamaño.
- **Supabase:** Backup/sync opcional entre dispositivos.

## Deploy

```bash
npm run build
# El output está en /dist — servir con cualquier hosting estático
# (Vercel, Netlify, Cloudflare Pages, GitHub Pages...)
```

Para Vercel: conecta el repo y listo, auto-detecta Vite.

## Documentación técnica completa

Ver `PROJECT.md` para la documentación exhaustiva: decisiones de arquitectura, lecciones aprendidas, patrones de código, y best practices.

## Licencia

MIT — haz lo que quieras con él.
