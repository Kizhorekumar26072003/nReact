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

Render
-whenever the state variable updates , react will re render the component

React Algorithm

- reconciliation algorithm(React Fiber)
  Vdom is representation of actual DOM
  in raect 16 the new way update vdom has came up which is react fiber
- Diff algorithm
  it find outs the difference between the two vdoms . old vdom and updated new vdom

incremental rendering

ep-6 exploring the world
monolith , micro service architecture

MonoLith-one large system

MicroServcies - break down into multiple services . all the services combine together forms a bigger app(eg:ui,auth,db,frontend,backend) this is called as separation of concerns. it follows single responsibilty principle

two ways to render data
1,loads - api - render

2,loads - render - api - rerender (we are using this in react)
react's render cycles are very fast

Hook is nothing but js function

this is named import
import { name } from './module';
This is default import
import anyName from './module';

Types of routing
Client side routing
Server side routing
