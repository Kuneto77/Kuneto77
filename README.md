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

Този проект е чисто статичен frontend — не прави заявки към бекенд, Supabase или друг API, затова **не изисква никакви `.env` файлове или environment variables** (нито локално, нито във Vercel). Всички изображения се зареждат директно от CDN URL-и в `src/lib/assets.ts`.
