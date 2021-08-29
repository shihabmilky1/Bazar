import React, { useState } from 'react';
import './SingleProduct.css'
import ProductPopUp from '../ProductPopup/ProductPopUp'
import Fade from 'react-reveal/Fade';
const SingleProduct = ({ product }) => {

    const { img, name, discount } = product
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>

            <div onClick={openModal} className="col-md-3 my-3" >
                <Fade>
                    <div className="card p-2 h-100" style={{ border: '0', cursor: 'pointer' }}>
                        <img className="img-fluid " src={img} alt="product" />
                        {parseInt(discount) < 0 || discount === '' ? '' : <span className="badge badge-warning">-${discount}</span>}
                        <div className="card-body">
                            <h6 className="card-title line-clamp">{name}</h6>
                        </div>
                    </div>
                </Fade>
            </div>
            <ProductPopUp modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} product={product}></ProductPopUp>
        </>
    );
};

export default SingleProduct;