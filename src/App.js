import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Error from "./components/Error";
import { Routes, Route, useNavigate } from "react-router-dom"

import Home from "./components/Home";
import Cart from "./components/Cart";
import CartContain from "./components/CartContain";
import Profile from './components/Profile';
import Checkout from "./components/Checkout";

function App() {

  return (
    <>

          <Header />
     
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/profile/:id" element={<Profile/>} />
              <Route path='/cartcontains/:id' element={<CartContain />} />
              <Route path="/:id/*" element={<Error />} />
            </Routes>
  
         
    </>
  );
}

export default App;
