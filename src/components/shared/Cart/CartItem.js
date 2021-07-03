import React, { useContext } from 'react';
import { ApplicationProvider } from '../../../App';
const CartItem = ({ product }) => {
    const [cart, setCart, user, setUser] = useContext(ApplicationProvider)
    const deleteProduct = (product) => {
        console.log(product.id);
        const deleteItem = cart.filter(item => item.id !== product.id);
        setCart(deleteItem)
    }

    return (
        <div className="cart-product p-4 d-flex align-items-center" style={{ borderBottom: "1px solid rgb(247, 247, 247)" }}>
            <img className="w-25 me-3" src={product.img} alt="" />
            <div className="product-detail mb-2 w-100">
                <h6 className="line-clamp mb-2">{product.name}</h6>
                <p className="common-color fw-bold">${parseInt(product.price - product.discount)}</p>
            </div>
            <div className="d-flex justify-content-end">
                <i onClick={() => deleteProduct(product)} class="fal fa-times close-btn"></i>
            </div>
        </div>
    );
};

export default CartItem;