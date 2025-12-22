# nReact

Namaste react

# parcel

- dev build
- local server
- HMR - Hot Module Replacement(makes changes quickly after save changes in the file)

- parcel uses file watching algorithm - written in c++
- parcel also uses caches
- image optimization
- minification
- bundling
- compress
- consistent hashing
- code splitting
- differential bundling - to support older browsers
- diagnostics
- error handling
- https
- tree shaking - remove unused code
- different build for dev and prod bundlers
  when we build production app using "npx parcel build index.html" we should remove main:app.js in package.json cuz we told the app's entry point is index.html
