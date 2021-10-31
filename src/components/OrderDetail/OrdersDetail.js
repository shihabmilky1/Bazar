import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Navbar from './../shared/Navbar/Navbar';

let dateFormat = require("dateformat");

const OrdersDetail = () => {
    const { id } = useParams()
    const [orders, setOrders] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoding] = useState(false)

    useEffect(() => {
        setLoding(true)
        fetch(`https://intense-reef-39470.herokuapp.com/orderDetail/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setLoding(false)
                    setOrders(data)
                    setError(null)
                }
            })
            .catch(error => {
                setError(error)
                setLoding(false)
                setOrders([])
            });

    }, [])
    const totalPrice = orders[0]?.cart.reduce((total, cart) => total + parseInt(cart.price), 0)
    const totalDiscount = orders[0]?.cart.reduce((total, cart) => total + parseInt(cart.discount), 0)
    return (
        <>
            {error ?
                <>
                    <Navbar />
                    <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>Something Went Wrong</h2>
                </>
                :
                null
            }
            {
                loading ? (
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : null}
            {orders.length > 0 ? (
                <section style={{ background: '#F3F4F6' }}>
                    <Navbar />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto my-5" >
                                <div className="p-5" style={{ border: '1px solid #F3F4F6', background: '#fff' }}>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="my-3 d-flex align-items-center">
                                            <h6>Status : </h6>
                                            <span className="ms-3" style={{ fontSize: '14px', fontWeight: 'normal', backgroundColor: '#009F7F', color: '#fff', padding: '3px 10px', borderRadius: '3px', display: 'block' }}>{orders[0]?.process}</span>
                                        </div>
                                        <div>
                                            <Link style={{ color: '#009F7F' }} to="/">Back Home</Link>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="row">
                                            <div className="col-md-3 my-3">
                                                <div className="p-3 rounded" style={{ border: '1px solid rgba(229,231,235)' }}>
                                                    <strong >Order Number</strong>
                                                    <p className="mt-1">{orders[0]?._id}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-3 my-3">
                                                <div className="p-3 rounded" style={{ border: '1px solid rgba(229,231,235)' }}>
                                                    <strong >Date</strong>
                                                    <p className="mt-1">{dateFormat(orders[0]?.date, "dS mmmm, yyyy,HH:MM TT")}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-3 my-3">
                                                <div className="p-3 rounded" style={{ border: '1px solid rgba(229,231,235)' }}>
                                                    <strong >Total</strong>
                                                    <p className="mt-1">${totalPrice - totalDiscount}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-3 my-3">
                                                <div className="p-3 rounded" style={{ border: '1px solid rgba(229,231,235)' }}>
                                                    <strong >Payment Method</strong>
                                                    <p className="mt-1">{orders[0]?.paymentSystem}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h5>Total Amount</h5>
                                                <div className="my-4 d-flex align-items-center">
                                                    <p style={{ width: '100px', fontWeight: '600' }} >Sub Total</p>
                                                    <span>: ${totalPrice - totalDiscount}</span>
                                                </div>
                                                <div className="my-4 d-flex align-items-center">
                                                    <p style={{ width: '100px', fontWeight: '600' }} >Shipping Charge</p>
                                                    <span>: $0.00</span>
                                                </div>
                                                <div className="my-4 d-flex align-items-center">
                                                    <p style={{ width: '100px', fontWeight: '600' }}>Tax</p>
                                                    <span>: $0.00</span>
                                                </div>
                                                <div className="my-4 d-flex align-items-center">
                                                    <p style={{ width: '100px', fontWeight: '600' }} >Discount</p>
                                                    <span>: $0.00</span>
                                                </div>
                                                <div className="my-4 d-flex align-items-center">
                                                    <p style={{ width: '100px', fontWeight: '600' }} >Total</p>
                                                    <span>: ${totalPrice - totalDiscount}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h5>Order Detail</h5>
                                                <div className="my-4 d-flex align-items-center">
                                                    <p style={{ width: '100px', fontWeight: '600' }} >Total Item</p>
                                                    <span>:  {orders[0]?.cart.length} items</span>
                                                </div>
                                                <div className="my-4 d-flex align-items-center">
                                                    <p style={{ width: '100px', fontWeight: '600' }} >Delivery Time</p>
                                                    <span>:  {orders[0]?.deliveryService}</span>
                                                </div>
                                                <div className="my-4 d-flex align-items-center">
                                                    <p style={{ width: '100px', fontWeight: '600' }}>Shipping Address</p>
                                                    <span>:  {orders[0]?.shipmentData.address}</span>
                                                </div>
                                                <div className="my-4 d-flex align-items-center">
                                                    <p style={{ width: '100px', fontWeight: '600' }}>Payment ID</p>
                                                    <span>:  {orders[0]?.paymentID}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="">
                                            <table class="table table-borderless" style={{ border: '1px solid #efefef' }}>
                                                <thead className="bg-light">
                                                    <tr>
                                                        <th scope="col">Item</th>
                                                        <th scope="col">Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody style={{}}>
                                                    {orders[0]?.cart.map(cartData => (
                                                        <tr className="">
                                                            <td scope="col">
                                                                <div className="d-flex align-items-center">
                                                                    <img className="me-3" src={cartData.img} alt="" style={{ width: ' 60px ' }} />
                                                                    <div className="mb-2">
                                                                        <span className="line-clamp mb-2">{cartData.name}</span>
                                                                        <p className="common-color fw-bold">${parseInt(cartData.price - cartData.discount)}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="">
                                                                <div className="mt-3" style={{ color: 'rgb(119, 121, 140)' }}>$ {cartData.price - cartData.discount}</div>
                                                            </td>
                                                        </tr>))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            ) : null
            }
        </>

    )
}
export default OrdersDetail;
