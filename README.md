# Autism Self-Assessment

https://sites.google.com/d/1zVjrYfjrJTC5Cw28t_tQONykFBDzL36U/p/1PX5xVeLxrX3hDvMxsw_xQoDCNLKQ-kww/edit

## Running locally

```bash
npm install
npm run dev
```

The site will be served at `http://localhost:3000`.

## Project structure

- `app/` – App Router pages and global layout
- `data/questions.ts` – List of assessment questions
- `app/quiz` – Interactive questionnaire
- `app/result` – Results summary, including highlights for “Yes” answers
-  progress is cached locally in `localStorage` under the key
`autism-self-test-answers`. Use the “Clear answers” button to wipe stored responses.
