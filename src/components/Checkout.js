import React, { useEffect, useState } from 'react';
import './checkout.css';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const authId = localStorage.getItem('userid');
  const d = new Date();
  let text = d.toString();
  const [formData, setFormData] = useState({
    userId: authId,
    name: '',
    email: '',
    number: '',
    address: '',
    paymentMethod: 'Cash On Delivery',
    date : text
  });

  const location = useLocation();


  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return; // Prevent multiple submissions
    }
    setIsSubmitting(true);
    const orderData = location.state.orderData;
    // console.log(formData);
    try {
      const res = await fetch('https://royal-backend-seller.onrender.com/addmyorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData, orderData }),
      });

      let result = await fetch(`https://royal-backend-seller.onrender.com/cartsdelete/${authId}`, {
        method: "delete"
      });

      const response = await fetch('https://royal-backend-seller.onrender.com/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData, orderData }),
      });

      if (response.ok) {
        toast.success("Order is Successfully done 😃!", {
          position: "top-center"
        });
        setTimeout(function () {
          navigate('/home');
        }, 2000);
      } else {
        console.error('Failed to place the order');
      }
    } catch (error) {
      console.error('Error during order placement:', error);
    } finally {
      setIsSubmitting(false); // End the loading state after submission
    }
  };


  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Number</label>
          <input
            type="number"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Shipping Address</label>
          <textarea
            id="address"
            name="address"
            rows="4"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="payment-method">Payment Method</label>
          <select
            id="payment-method"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="Cash On Delivery">Cash On Delivery</option>
            {/* <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option> */}
          </select>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <div class="spinner-border" role="status">
            <span class="sr-only">:)</span>
          </div> :'Place Order' }
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
