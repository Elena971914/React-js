import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

/* npm i react-router-dom
BrowserRouter - so that the whole app has access to the router functionalities
Routes and route - in the app.jsx - <Routes><Route path="/" element={<Home />} /></Routes>
<Nav.Link as={Link} to="/">Home</Nav.Link> -- react bootstrap
or <Link to="/about">About</Link> --ordinary*/