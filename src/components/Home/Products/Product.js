import React, { useState } from 'react';
import allProduct from '../../../product';
import SingleProduct from '../SingleProduct/SingleProduct';
import Bed from '../../../images/bed.PNG'
import Sofa from '../../../images/sofa.PNG'
import Tabel from '../../../images/table.PNG'
import Chair from '../../../images/chair.PNG'
const Product = () => {

    return (
        <section style={{ background: '#f7f7f7' }}>

            <div className="container-fluid ps-0">
                <div className="row">
                    <div className="col-md-2">
                        <div className="sidebar-container sticky-top" >
                            <ul className="list-unstyled sidebar">
                                <li><a href=""><img src={Bed} className="" style={{ width: '15px', marginRight: '10px' }} /> Bed</a></li>
                                <li><a href=""><img src={Chair} className="" style={{ width: '15px', marginRight: '10px' }} /> Chair</a></li>
                                <li><a href=""><img src={Sofa} className="" style={{ width: '15px', marginRight: '10px' }} /> Sofa</a></li>
                                <li><a href=""><img src={Tabel} className="" style={{ width: '15px', marginRight: '10px' }} /> Table</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="row my-5">
                            {allProduct.map(product => <SingleProduct product={product}></SingleProduct>)}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;