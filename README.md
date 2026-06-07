# MiloWeb Studio Landing

Gotowa strona wizytówka / landing page premium dla agencji tworzącej strony www, landing page'e, sklepy internetowe i automatyzacje AI.

## Co jest w paczce

- Next.js + React + TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react icons
- react-hook-form + zod
- wielojęzyczny selektor języka
- dark/light mode
- landing page z sekcjami: hero, usługi, grupy docelowe, oferty, porównanie pakietów, proces, portfolio, AI, opinie, FAQ, kontakt, footer
- dodatkowe podstrony: `/strony-internetowe`, `/landing-page`, `/sklepy-internetowe`, `/automatyzacje-ai`, `/portfolio`, `/cennik`, `/kontakt`, `/blog`, `/polityka-prywatnosci`, `/regulamin`
- demo realizacji pakietu Business Premium: `/business-premium-demo`
- gotowy statyczny eksport w folderze `out`

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Strona lokalnie: `http://localhost:3000`

## Build produkcyjny

```bash
npm run build
```

Po buildzie gotowe pliki statyczne są w folderze `out`.

## Wdrożenie

Folder `out` można wrzucić na hosting statyczny, np. Vercel, Netlify, Cloudflare Pages albo zwykły hosting obsługujący HTML/CSS/JS.

## Edycja treści

Najważniejsze dane strony, oferty, FAQ, pakiety, portfolio i podstrony są w pliku:

```text
lib/content.ts
```

Główny komponent landing page:

```text
components/sections/LandingPage.tsx
```
