import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom' directly
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './components/ContextProvider/CartContext';

ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
        <App />
    </CartProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
