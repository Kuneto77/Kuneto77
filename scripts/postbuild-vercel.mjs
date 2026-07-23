import { cpSync, mkdirSync, writeFileSync } from 'node:fs';

// Some Vercel projects (legacy TanStack/Nitro setup) expect Build Output API layout.
mkdirSync('.vercel/output/static', { recursive: true });
cpSync('dist', '.vercel/output/static', { recursive: true });

writeFileSync(
  '.vercel/output/config.json',
  JSON.stringify(
    {
      version: 3,
      routes: [
        { handle: 'filesystem' },
        { src: '/(.*)', dest: '/index.html' },
      ],
    },
    null,
    2,
  ),
);
