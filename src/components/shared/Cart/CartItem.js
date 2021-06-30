import React from 'react';
const CartItem = ({ product }) => {
    console.log(product);
    return (
        <div className="cart-product p-4 d-flex align-items-center" style={{ borderBottom: "1px solid rgb(247, 247, 247)" }}>
            <img className="w-25 me-3" src={product.img} alt="" />
            <div className="product-detail mb-2">
                <h6 className="line-clamp mb-2">{product.name}</h6>
                <p className="common-color fw-bold">${product.price}</p>
            </div>
            <i class="fal fa-times close-btn"></i>
        </div>
    );
};

export default CartItem;