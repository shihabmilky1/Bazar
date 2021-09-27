import React from 'react'
import { Link } from 'react-router-dom';
import { Steps } from 'rsuite';

let dateFormat = require("dateformat");

function OrderData({ data }) {
    const totalPrice = data.cart.reduce((total, cart) => total + parseInt(cart.price), 0)
    const discpuntPrice = data.cart.reduce((total, cart) => total + parseInt(cart.discount), 0)
    return (

        <div style={{ border: '1px solid #efefef' }} className="my-4 shadow-sm">
            <div className="p-3 d-flex justify-content-between " style={{ borderBottom: '1px solid #efefef' }}>
                <h5 className="order-detail"><span>Order Details - {data._id}</span></h5>
                <div className="d-flex align-items-center ">

                    <Link to={`/ordersDetail/${data._id}`} style={{ textDecoration: 'none', color: 'rgb(1, 147, 118)' }}><i style={{ textDecoration: 'none', color: 'rgb(1, 147, 118)', marginTop: '0px', fontSize: '13px' }} className="me-1 fal fa-eye"></i> See Detail</Link>
                </div>
            </div>
            <div className="">
                <div className="p-3 ">
                    <div className="my-2">
                        <strong style={{ fontSize: '15px' }}>Shipping Address</strong>
                        <p> {data.shipmentData.address}</p>
                    </div>
                    <div className="my-2">
                        <strong style={{ fontSize: '15px' }} className="pt-2">Order Date:</strong>
                        <p className="">  {dateFormat(data.date, "dS mmmm, yyyy")}</p>
                    </div>
                </div>
                <div className="p-3 " style={{ borderTop: '1px solid #efefef' }}>
                    <div className="d-flex justify-content-between my-2 ">
                        <span style={{
                            margin: '0px 15px 0px 0px', fontSize: '14px', color: '#77798c', lineHeight: '21px', fontFamily: "Lato,sans-serif"
                        }}>Sub Total</span>
                        <span style={{
                            margin: '0px 15px 0px 0px', fontSize: '14px', color: '#77798c', lineHeight: '21px', fontFamily: "Lato,sans-serif"
                        }}>${totalPrice - discpuntPrice}</span>
                    </div>
                    <div className="d-flex justify-content-between my-2">
                        <span style={{
                            margin: '0px 15px 0px 0px', fontSize: '14px', color: '#77798c', lineHeight: '21px', fontFamily: "Lato,sans-serif"
                        }}>Delivery Fee</span>
                        <span style={{
                            margin: '0px 15px 0px 0px', fontSize: '14px', color: '#77798c', lineHeight: '21px', fontFamily: "Lato,sans-serif"
                        }}>$0</span>
                    </div>
                    <div className="d-flex justify-content-between my-2">
                        <span style={{
                            margin: '0px 15px 0px 0px', fontSize: '14px', color: '#77798c', lineHeight: '21px', fontFamily: "Lato,sans-serif"
                        }}>Discount</span>
                        <span style={{
                            margin: '0px 15px 0px 0px', fontSize: '14px', color: '#77798c', lineHeight: '21px', fontFamily: "Lato,sans-serif"
                        }}>$0</span>
                    </div>
                    <div className="d-flex justify-content-between my-2">
                        <strong>  <span style={{
                            margin: '0px 15px 0px 0px', fontSize: '14px', color: '#77798c', lineHeight: '21px', fontFamily: "Lato,sans-serif"
                        }}>Total</span></strong>
                        <strong> <span style={{
                            margin: '0px 15px 0px 0px', fontSize: '14px', color: '#77798c', lineHeight: '21px', fontFamily: "Lato,sans-serif"
                        }}>${totalPrice - discpuntPrice}</span>
                        </strong>
                    </div>
                </div>
            </div>
            <div className="p-4 mt-3" style={{ borderTop: '1px solid #efefef' }}>
                <Steps current={data.step}>
                    <Steps.Item title="Pending" />
                    <Steps.Item title="Order Receive" />
                    <Steps.Item title="In progress" />
                    <Steps.Item title="Done" />
                </Steps>
            </div>
        </div>
    )
}

export default OrderData;
