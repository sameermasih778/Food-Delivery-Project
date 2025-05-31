import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import "./MyOrders.css"
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets';

const MyOrders = () => {
    const { url, token, user } = useContext(StoreContext); // make sure user context is available
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        try {
           const response = await axios.post(
               `${url}/api/orders/userorders`,
                   {},  // optionally include { userId: ... } if required
                    { headers: { token } }
                  );

            setData(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.error("Error fetching user orders", error);
        }
    };

    useEffect(() => {
        if (token && user) {
            fetchOrders();
        }
    }, [token, user]);

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className='container'>
                {data.length === 0 ? (
                    <p>No orders found</p>
                ) : (
                    data.map((order, index) => (
                        <div key={index} className='my-orders-order'>
                            <img src={assets.parcel_icon} alt="" />
                            <p>
                                {order.items.map((item, idx) => (
                                    <span key={idx}>
                                        {item.name} x {item.quantity}
                                        {idx !== order.items.length - 1 && ", "}
                                    </span>
                                ))}
                            </p>
                            <p>${order.amount}.00</p>
                            <p>Items: {order.items.length}</p>
                            <p><span>&#x25cf;</span><b>{order.status}</b></p>
                            <button onClick={fetchOrders} >Track Order</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default MyOrders;