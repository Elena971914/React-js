import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// The file that starts the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);

/* 
Vite is a developer tool acting as builder and transpiler that will comprise everything in a project. 
npm create vite my-app
npm create vite . - it creates an app in the current directory
After there are a couple questions - Select a framework - React; Select a variant - JavaScript
npm i
npm run dev

component - function that returns a React element

export default can be used for direct export and should be imported in the file we need, for example in the base structure in the App.jsx
named exports are good only for utility functions and when exporting too many functions

For the project: 
there shouldn't be any class, should be className, 
all self-closing tags should be self-closed, 
all comments-deleted, if there is "for=" -> htmlFor;
delete the initial css

CTRL+SHIFT+L - marks every occurrence 
if the tab of what we want to import is open the IDE imports it automatically

*/
