# Advent of Code — Solutions (TypeScript)

This repository contains my Advent of Code solutions (https://adventofcode.com). Solutions are written in TypeScript and organized by year and day.

## Conventions

- Each puzzle day has two entry files: `part01.ts` and `part02.ts`.
- Keep puzzle inputs in `input.txt` and do not commit your personal puzzle input (add to .gitignore if needed).
- Put shared utilities under `assets/` (per-year or top-level).

## Quick start

Install dependencies (pnpm / npm / yarn):
Windows (pnpm):
```powershell
pnpm install
```
npm:
```powershell
npm install
```

Run a specific solution (examples):

With ts-node / tsx:
```powershell
pnpm exec tsx 2025/01/part01.ts
# or
pnpm exec ts-node-esm 2025/01/part01.ts
```

Or add a script in package.json for convenience:
```json
{
  "scripts": {
    "run:day": "tsx"
  }
}
```
Then:
```powershell
pnpm run run:day -- 2025/01/part01.ts
```

## TypeScript notes

- Use ES module imports (recommended).
- If you import files with explicit `.ts` extensions you may need to enable:
```json
{
  "compilerOptions": {
    "allowImportingTsExtensions": true
  }
}
```
in `tsconfig.json` or remove the `.ts` extension from imports when running transpiled code.

## Adding a new day

1. Create folder `YYYY/DD/`.
2. Add `part01.ts`, `part02.ts`, and `input.txt`.
3. Implement and run locally against `sample-input.txt` first, then `input.txt`.

---  
Keep it simple, iterate quickly, and have fun solving the puzzles.