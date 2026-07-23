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

## Environment variables

Публичните Supabase стойности са в `vercel.json` (за Vercel build/deploy). За локална разработка копирай `.env.example` → `.env.local` и попълни стойностите.

| Variable | Описание | Къде |
|---|---|---|
| `VITE_SUPABASE_URL` | Supabase project URL | Client (Vite) |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Publishable key (public) | Client (Vite) |
| `VITE_SUPABASE_PROJECT_ID` | Project ID | Client (Vite) |
| `SUPABASE_URL` | Supabase project URL | Server |
| `SUPABASE_PUBLISHABLE_KEY` | Publishable key | Server |
| `SUPABASE_JWKS_URL` | JWKS endpoint | Server |
| `SUPABASE_SECRET_KEY` | **Secret key — server-only** | Vercel Dashboard only |

> **Важно:** `SUPABASE_SECRET_KEY` не се commit-ва в git. Добави го ръчно във Vercel Dashboard → Project Settings → Environment Variables (Production + Preview).

> Началната страница все още не прави Supabase заявки — env vars са конфигурирани за бъдеща интеграция и за Vercel project compatibility.
