import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)


/*
There are two ways of passing data to a component- by props or by state
To render a component - after a completion it changes the output in the html
Props pass information from parent to children

The state of a component:
- is self contained (expanded or not expanded)
- determines how the component will render
- mutate
- can be turned to JSON- serializable

Pure functions return only one result, so the state interrupts functional programming
Functions usually don't keep information about their previous calls
Hooks are tools that can be attached to a component. 
useState enables functional components to have state
The state is saved between the function's calls
*/