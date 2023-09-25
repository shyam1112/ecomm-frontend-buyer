import React, { useEffect, useState } from 'react'
import './myorder.css'

export default function Myorder() {

    const [activeItemIndexes, setActiveItemIndexes] = useState([]);
    const [activeSectionIndexes, setActiveSectionIndexes] = useState([]);
    const [orders, setOrders] = useState([]);
    const authId = localStorage.getItem('userid');
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            let result = await fetch(`https://royal-backend-seller.onrender.com/myorder/${authId}`);
            result = await result.json();
            // console.log(result);
            setOrders(result);
            // Initialize activeItemIndexes and activeSectionIndexes arrays
            setActiveItemIndexes(new Array(result.length).fill(false));
            setActiveSectionIndexes(new Array(result.length).fill(false));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const toggleItemAccordion = (index) => {
        // Create a copy of activeItemIndexes and update the corresponding index
        const updatedIndexes = [...activeItemIndexes];
        updatedIndexes[index] = !updatedIndexes[index];
        setActiveItemIndexes(updatedIndexes);
    };

    const toggleSectionAccordion = (index) => {
        // Create a copy of activeSectionIndexes and update the corresponding index
        const updatedIndexes = [...activeSectionIndexes];
        updatedIndexes[index] = !updatedIndexes[index];
        setActiveSectionIndexes(updatedIndexes);
    };
    const deleteorder = async(id)=>{
        let result = await fetch(`https://royal-backend-seller.onrender.com/myorderid/${id}`, {
            method: "delete"
        });
        result = await result.json();
        if (result) {
            getData();
        }
    }
  return (
    <div className='myorder'>
    <h1>Order List</h1>
    <hr />
    <ul>
        {orders.map((order, index) => (
            <li key={index}>
                <button
                    className={`accordion ${activeItemIndexes[index] ? "active" : ""}`}
                    onClick={() => toggleItemAccordion(index)}
                >
                    {activeItemIndexes[index] ? "-" : "+"} Order {index + 1}
                </button>
                <div
                    className="panel"
                    style={{
                        maxHeight: activeItemIndexes[index] ? "1000px" : "0",
                        transition: "max-height 0.2s ease-out",
                    }}
                >
                    {/* <h2>Order Details</h2> */}
                    
                    {/* <p> <b>User ID:</b> {order._id}</p> */}
                    {/* <button onClick={()=>deleteorder(order._id)}>Delete</button> */}
                    <p> <b>Name:</b> {order.name}</p>
                    <p><b>Email: </b>{order.email}</p>
                    <p><b>Address:</b> {order.address}</p>
                    <p><b>Payment Method:</b> {order.paymentMethod}</p>
                    <p><b>Total: </b>{order.total}</p>
                    <p><b>Date: </b>{order.date}</p>

                    <h2>Order Items</h2>
                    <ul>
                        {order.cart.map((item, itemIndex) => (
                            <li key={itemIndex}>
                                <button
                                    className={`accordion ${activeSectionIndexes[index] ? "active" : ""}`}
                                    onClick={() => toggleSectionAccordion(index)}
                                >
                                    {activeSectionIndexes[index] ? "-" : "+"} item
                                </button>
                                <div
                                    className="panel"
                                    style={{
                                        maxHeight: activeSectionIndexes[index] ? "1000px" : "0",
                                        transition: "max-height 0.2s ease-out",
                                        backgroundColor: "aliceblue",
                                    }}
                                >
                                    <p><b>Name:</b> {item.name}</p>
                                    <p><b>Price:</b> {item.price}</p>
                                    <p><b>Category:</b> {item.category}</p>
                                    <p><b>Company: </b>{item.company}</p>
                                    <p><b>Size: </b>{item.size}</p>
                                    <p><b>Color: </b><div
                                        style={{
                                            backgroundColor: `${item.color1}`,
                                            width: "30px",
                                            height: "20px",
                                        }}></div>
                                        </p>
                                    <p><b>Image:</b><img src={item.img} alt="img" style={{ width: "600" }} /></p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </li>
        ))}
    </ul>
</div>
  )
}
