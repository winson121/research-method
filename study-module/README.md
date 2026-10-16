# ITI5125 study module — workspace guide

> **New laptop? Read `D:\ITI5125\PROJECT-HANDOVER.md` first** — it documents the whole
> project, every decision, the build recipe, and the exact prompt to resume with.

This folder is the build area for your one-stop study modules. You normally never need to touch anything here — just open the HTML file.

## Layout

```
D:\ITI5125\
├─ Week01\  Week02\        ← your original unit materials (never modified)
├─ _incoming\               ← drop NEW weekly materials here (e.g. _incoming\Week03)
├─ PROJECT-HANDOVER.md      ← full project docs + decisions + resume prompt
└─ study-module\
   ├─ ITI5125-study-module-week01-02.html   ← the one-stop module (open this)
   ├─ index.html             ← redirect page for the local preview
   ├─ assets\figures\       ← figures extracted from papers/slides, embedded into the HTML
   └─ notes\                ← extracted plain text of every source (build inputs)
```

## How a new week flows

1. You drop the new week's files into `_incoming\WeekNN\`.
2. You paste the reusable prompt (below) into a new conversation.
3. I extract everything, build the new module, and hand you an updated HTML.

## Reusable prompt for future weeks

```
Build my ITI5125 study module for Week NN.
- Sources: everything in D:\ITI5125\_incoming\WeekNN (slides, papers, workshops, saved pages)
- Quiz N covers weeks X–Y [update the range]
- Requirements: consume-mode explanations, inline SVG diagrams, step-through
  diagram players for multi-part visuals, embedded paper figures, bite-size
  quizzes after every chunk, workshop activities fully solved with reasoning,
  question bank (~35/week) mixing concept + multi-select + scenario/role-play +
  table/graph/data-analysis questions, simulated quiz mode, everything embedded
  in one self-contained HTML file.
- Output: D:\ITI5125\study-module\ITI5125-study-module-weekXX-NN.html
```
