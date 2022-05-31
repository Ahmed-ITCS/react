import React from 'react';
import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client';
//import './index.css';
import Home from './Home';

Element = document.getElementById("root");
const root = createRoot(Element);

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);