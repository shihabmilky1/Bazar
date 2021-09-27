import React, { useContext, useEffect, useState } from 'react'
import { ApplicationProvider } from '../../App';
import Navbar from './../shared/Navbar/Navbar';
import OrderData from './OrderData';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoding] = useState(false)
    const [cart, setCart, user, setUser] = useContext(ApplicationProvider)
    useEffect(() => {
        setLoding(true)
        fetch('https://intense-reef-39470.herokuapp.com/userOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => {

                if (data) {
                    setLoding(false)
                    setOrders(data)
                }
            })
            .catch(error => setError(error));
    }, [])
    return (
        <section>
            {error && "Something Went Wrong"}
            {loading ? (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : null}
            {orders.length > 0 &&
                <>
                    <Navbar />
                    <div className="container">
                        <div className="row my-5">
                            <div className="col-lg-9 mx-auto">
                                {orders.map(data => (
                                    <OrderData data={data} />
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            }
            {orders.length <= 0 && loading === false && (
                <>
                    <Navbar />
                    <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>No Order Found</h2>
                </>
            )}
        </section>
    )
}
export default Orders;