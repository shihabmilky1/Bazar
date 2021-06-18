import React from 'react';
import './SingleProduct.css'
const SingleProduct = ({ img, name, discount }) => {
    return (
        <div className="col-md-3 my-3" >
            <div className="card p-2" style={{ border: '0' }}>
                <img className="img-fluid " src={img} alt="product" />
                {discount === '0' ? '' : <span className="badge badge-warning">{discount}%</span>}
                <div className="card-body">
                    <h6 className="card-title">{name}</h6>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;