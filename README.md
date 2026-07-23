# Недвижими имоти Надежда

Начална страница на сайт за недвижими имоти — React + TypeScript + Tailwind CSS, изградени с Vite.

## Технологии

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) за бързо разработване и build
- [Tailwind CSS 4](https://tailwindcss.com/) за стилизиране
- [Font Awesome](https://fontawesome.com/) за икони

## Структура на проекта

```
src/
  components/    React компоненти (Header, SearchBar, SearchButton, CityCard, ChatButton)
  lib/assets.ts  Пътища към изображенията, използвани в проекта
  App.tsx        Началната страница
  main.tsx       Входна точка на приложението
```

## Стартиране локално

```bash
npm install
npm run dev
```

Приложението ще стартира на `http://localhost:5173`.

## Build

```bash
npm run build
```

Резултатът се генерира в папка `dist/`.

## Preview на build-натия проект

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

Всички Supabase променливи са в `.env` (локално, gitignored) и публичните са в `vercel.json` (Vercel deploy).

| Variable | Описание | Vercel |
|---|---|---|
| `VITE_SUPABASE_URL` | Supabase URL (client) | ✅ vercel.json |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Publishable key (client) | ✅ vercel.json |
| `VITE_SUPABASE_PROJECT_ID` | Project ID (client) | ✅ vercel.json |
| `SUPABASE_URL` | Supabase URL (server) | ✅ vercel.json |
| `SUPABASE_PUBLISHABLE_KEY` | Publishable key (server) | ✅ vercel.json |
| `SUPABASE_JWKS_URL` | JWKS endpoint | ✅ vercel.json |
| `SUPABASE_SECRET_KEY` | Secret key (server-only) | ⚠️ Vercel Dashboard или `./scripts/setup-vercel-env.sh` |

**Secret key във Vercel:** GitHub блокира secret keys в git. Добави `SUPABASE_SECRET_KEY` във Vercel Dashboard → Environment Variables, или пусни:

```bash
cp .env.example .env   # попълни стойностите
./scripts/setup-vercel-env.sh imoti-nadezhda
./scripts/setup-vercel-env.sh kuneto77
```

Supabase клиентът е свързан в `src/lib/supabase.ts` и се инициализира при старт на приложението.
