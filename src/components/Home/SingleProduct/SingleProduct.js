import React, { useState } from 'react';
import './SingleProduct.css'
import ProductPopUp from '../ProductPopup/ProductPopUp'

const SingleProduct = ({ product }) => {

    const { img, name, discount } = product
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <div onClick={openModal} className="col-md-3 my-3" >
                <div className="card p-2" style={{ border: '0', cursor: 'pointer' }}>
                    <img className="img-fluid " src={img} alt="product" />
                    {discount === '0' ? '' : <span className="badge badge-warning">{discount}%</span>}
                    <div className="card-body">
                        <h6 className="card-title">{name}</h6>
                    </div>
                </div>
            </div>
            <ProductPopUp modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} product={product}></ProductPopUp>
        </>
    );
};

export default SingleProduct;