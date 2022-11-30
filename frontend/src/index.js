import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

// const rootElement = 
// document.getElementById('root');
// const root = createRoot(rootElement);
// root.render(
//     <App />
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


