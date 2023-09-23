import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Error from "./components/Error";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom"

import Home from "./components/Home";
import Cart from "./components/Cart";
import CartContain from "./components/CartContain";
import Profile from './components/Profile';
import Checkout from "./components/Checkout";
import PrivateCmp from "./components/PrivateCmp";

function App() {

  return (
    <>
  
        <Header />
        <Routes>
          <Route element={<PrivateCmp />}>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path='/cartcontains/:id' element={<CartContain />} />
          <Route path="/:id/*" element={<Error />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
        </Routes>


    </>
  );
}

export default App;
