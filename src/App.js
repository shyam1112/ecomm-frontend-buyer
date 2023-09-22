import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Error from "./components/Error";
import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./components/ContextProvider/Context";
import Home from "./components/Home";
import Cart from "./components/Cart";
import CartContain from "./components/CartContain";
import Profile from './components/Profile';
import Checkout from "./components/Checkout";

function App() {
  const [data, setData] = useState(false);
  const { logindata, setLoginData } = useContext(LoginContext);
  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });

    const data = await res.json();

    if (data.status == 401 || !data) {
      console.log("user not valid");
    } else {
      console.log("user verify");
      setLoginData(data);
      history("/home");
    }
  }

  useEffect(() => {
    setTimeout(() => {
      DashboardValid();
      setData(true);
    }, 2000)

  }, [])

  return (
    <>
        {data ? (
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
        ) : (
          <div className="loading-spinner" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '24px', color: '#333' }}>
  Loading...
  <div style={{ border: '4px solid rgba(0, 0, 0, 0.3)', borderRadius: '50%', borderTop: '4px solid #333', width: '40px', height: '40px', animation: 'spin 2s linear infinite' }}></div>
</div>
        )}
    </>
  );
}

export default App;
