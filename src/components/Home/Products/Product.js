import React from 'react';
import allProduct from '../../../product';
import SingleProduct from '../SingleProduct/SingleProduct';
const Product = () => {
    return (
        <section style={{ background: '#f7f7f7' }}>

            <div className="container-fluid ps-0">
                <div className="row">
                    <div className="col-md-2">
                        <div className="sidebar-container sticky-top ">
                            <ul className="list-unstyled sidebar">
                                <li><a href="">Bed</a></li>
                                <li><a href="">Chair</a></li>
                                <li><a href="">Sofa</a></li>
                                <li><a href="">Table</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="row my-5">
                            {allProduct.map(product => <SingleProduct {...product}></SingleProduct>)}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Product;