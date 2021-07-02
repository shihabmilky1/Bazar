import React, { useContext } from 'react';
import Modal from 'react-modal';
import { ApplicationProvider } from '../../../App';
import './ProductPopUp.css'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '25%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        userSelect: 'none',
        zIndex: '100 !important',
        padding: '0',
        overflow: 'visible', transition: 'all 3s'
    },
};
Modal.setAppElement('#root');



const ProductPopUp = ({ modalIsOpen, setIsOpen, product }) => {
    const [cart, setCart, user, setUser] = useContext(ApplicationProvider)
    const { name, img, description, quantity, categories, price, discount } = product;
    function closeModal() {
        setIsOpen(false);
    }
    const discountTotalPrice = (parseInt(price) - parseInt(discount));



    const addCart = (product) => {
        setCart([...cart, product])
        const added = cart.find(item => item.id === product.id)
        console.log(added);
        if (added) {
            const remaining = cart.filter(item => item.id !== product)
            setCart(remaining)
        } else {
            const newCart = [...cart, product]
            setCart(newCart)
        }

    }


    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="close-icon" onClick={closeModal} >
                    <i className="fal fa-times"></i>
                </div>
                <div className="container p-0 m-0">
                    <div className="row mx-auto">
                        <div className="col-md-6 p-0 m-0" style={{ borderRight: '1px solid #ececec', position: 'relative' }}>
                            <img className="img-fluid" src={img ? img : ''} />
                            {discount === '0' ? '' : <span className="badge badge-warning">-${discount}</span>}
                        </div>
                        <div className="col-md-6 p-5">
                            <h5 className="name">{name}</h5>
                            <p className="quantity">{quantity}pc(s)</p>
                            <p className="description">{description}</p>
                            <span className="categories mt-4">{categories}</span>
                            <div className="price-cart d-flex align-items-center justify-content-between">
                                <div className=" d-flex align-items-center justify-content-between">
                                    <p className={discount >= 0 ? 'price' : "discountPrice"}>
                                        {discount > 0 ? '$' + discountTotalPrice : ""}
                                    </p>
                                    <p className={discount <= 0 ? 'price' : "discountPrice ms-3"}>
                                        ${price}
                                    </p>
                                </div>
                                <button onClick={() => addCart(product)} className="btn cart"><i className="fas fa-bags-shopping me-1"></i> Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ProductPopUp;