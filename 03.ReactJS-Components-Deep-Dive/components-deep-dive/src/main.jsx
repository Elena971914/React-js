import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

//Race conditions is a term defining when we have concurrent operations, asynchronous, parallel, that are trying to reach a resource, but the two operations may happen in different order than the one we expect. This is why React doesn't make changes based just on previous state of element, but uses updater functions, that take this element just before changing it and ensures it changes the actual value.

// When we want to illustrate (render) array data we need lists and keys. 

// Side effect is making component do something when it is mounted, updated, of before unmounting (rendering happens) 