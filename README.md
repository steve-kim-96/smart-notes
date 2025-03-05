Smart Notes – An Advanced Note-Taking App

A feature-rich note-taking app where you can create, categorize, and search notes efficiently.
Features & How They Use React Hooks

✅ Real-Time Note Editing (useState, useEffect, useRef)

    Store and update notes dynamically.
    Auto-save notes with useEffect.
    Use useRef for focusing on an input field when adding a new note.

✅ Search & Filtering (useState, useMemo)

    Use useMemo to optimize filtering large note lists.
    Search for keywords in real-time without lag.

✅ Tagging System (useState, useEffect, useMemo)

    Assign tags to notes and filter them using useMemo for efficiency.

✅ Drag & Drop Reordering (useCallback)

    Use useCallback to optimize functions handling note reordering.

✅ Dark Mode & Theming (useState, useEffect)

    Store and update theme preferences using localStorage.

✅ Persistent Storage (LocalStorage or Firebase) (useEffect)

    Sync data across sessions.

✅ Pinned Notes & Prioritization (useState, useEffect)

    Keep important notes at the top.

Tech Stack

    Frontend: React (hooks-heavy), SCSS
    State Management: Context API or Zustand (if scaling up)
    Backend (Optional): Firebase (for real-time sync)
