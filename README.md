# Harry Potter Explorer

Aplikasi web untuk menjelajahi dunia sihir — karakter, rumah, dan mantra dari semesta Harry Potter.

## Tech Stack

- **Framework**: Next.js 16 (App Router, React Server Components)
- **Styling**: TailwindCSS v4
- **Icons**: Lucide React
- **Language**: TypeScript (strict mode)
- **Data**: [HP API](https://hp-api.onrender.com) via native `fetch()` dengan ISR revalidation

## Features

- Browse karakter dengan bento card grid (image full-bleed + hover overlay)
- Filter karakter berdasarkan rumah (Gryffindor, Slytherin, Ravenclaw, Hufflepuff)
- Search karakter berdasarkan nama (debounced 300ms)
- Load More tanpa kehilangan data sebelumnya
- House color themes (CSS custom properties berubah sesuai rumah aktif)
- Halaman detail karakter (patronus, wand, actor, ancestry, dll.)
- Browse mantra secara alfabetis
- Loading skeleton + error boundary per route
- Animasi fade-in dan hover transitions

## Setup

### 1. Clone & install dependencies

```bash
git clone <repo-url>
cd harry-potter-explorer
npm install
```

### 2. Konfigurasi environment

Buat file `.env.local` di root project:

```bash
cp .env.example .env.local
```

Isi nilai berikut di `.env.local`:

```env
NEXT_PUBLIC_HP_API_URL=https://hp-api.onrender.com
```

### 3. Jalankan dev server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Jalankan development server (Turbopack) |
| `npm run build` | Build untuk production |
| `npm run start` | Jalankan production server |
| `npm run lint` | Jalankan ESLint |

## Struktur Proyek

```
src/
├── constants/          # Konstanta (house colors)
├── features/
│   ├── characters/     # Komponen, service, dan types karakter
│   └── spells/         # Komponen, service, dan types mantra
├── lib/                # HP API client (hpFetch)
├── shared/
│   ├── components/     # Komponen reusable (Navbar, SkeletonCard, dll.)
│   ├── hooks/          # Custom hooks (useDebounce)
│   └── utils/          # Utilities (cn)
└── types/              # Shared types
app/
├── character/[id]/     # Halaman detail karakter
├── spells/             # Halaman daftar mantra
├── layout.tsx          # Root layout + Navbar
└── page.tsx            # Halaman utama (daftar karakter)
```

## Deploy

Deploy ke [Vercel](https://vercel.com) dengan menambahkan environment variable `NEXT_PUBLIC_HP_API_URL` di project settings.
