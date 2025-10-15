# Autism Self-Assessment

This is a static Next.js application that guides visitors through a short autism self-assessment.
It displays 20 yes/no questions one at a time, stores progress locally in the browser, and shares
a results summary when seven or more responses are “Yes”.

## Running locally

```bash
npm install
npm run dev
```

The site will be served at `http://localhost:3000`.

## Static export for GitHub Pages

To produce a static build that can be published to GitHub Pages:

```bash
npm run export
```

The generated files live in the `out/` directory. Update `next.config.mjs` with a `basePath` and
`assetPrefix` if you plan to serve the site from a subdirectory, such as `<user>.github.io/<repo>`.

## Project structure

- `app/` – App Router pages and global layout
- `data/questions.ts` – List of assessment questions
- `app/quiz` – Interactive questionnaire
- `app/result` – Results summary, including highlights for “Yes” answers

All questionnaire progress is stored locally in `localStorage` under the key
`autism-self-test-answers`. Use the “Clear answers” button to wipe stored responses.
