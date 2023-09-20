import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom' directly
import './index.css';
import App from './App';
import Context from './components/ContextProvider/Context';
import { BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './components/ContextProvider/CartContext';

ReactDOM.render(
  <BrowserRouter>
      <Context>
    <CartProvider>
        <App />
    </CartProvider>
      </Context>
  </BrowserRouter>,
  document.getElementById('root')
);
