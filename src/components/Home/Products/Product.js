import React, { useState } from 'react';
import allProduct from '../../../product';
import SingleProduct from '../SingleProduct/SingleProduct';
const Product = () => {
    const [product, setProduct] = useState('all product')
    return (
        <section style={{ background: '#f7f7f7' }}>

            <div className="container-fluid ps-0">
                <div className="row pt-4">
                    <div className="col-md-10 mx-auto d-flex align-items-center justify-content-between">
                        {product === 'all product' && <h6>No Category Selected</h6>}
                        {product !== 'all product' && <p className="text-capitalize category-badge" style={{ backgroundColor: '#eaeaea', fontSize: '14px', padding: '2px 6px', fontWeight: '500', borderRadius: '3px' }}><span>{product}</span></p>}
                        <ul className="list-unstyled">
                            <li class="nav-item dropdown navlink pe-5">
                                <a className="nav-link dropdown-toggle text-capitalize" style={{ color: '#019376' }} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {product}
                                </a>
                                <ul className="dropdown-menu shadow" aria-labelledby="navbarDropdown">
                                    <li onClick={() => setProduct('Bed')}>
                                        <p className="dropdown-item dropdownlink ms-2 pe-4 my-3">Bed</p>
                                    </li>
                                    <li onClick={() => setProduct('Chair')}>
                                        <p className="dropdown-item dropdownlink ms-2 pe-4 my-3">Chair</p>
                                    </li>
                                    <li onClick={() => setProduct('Sofa')}>
                                        <p className="dropdown-item dropdownlink ms-2 pe-4 my-3">Sofa</p>
                                    </li>
                                    <li onClick={() => setProduct('Table')}>
                                        <p className="dropdown-item dropdownlink ms-2 pe-4 my-3">Table</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col-md-2">
                        <div className="sidebar-container sticky-top" >
                            <ul className="list-unstyled sidebar">
                                <li><a href=""><img src={Bed} className="" style={{ width: '15px', marginRight: '10px' }} /> Bed</a></li>
                                <li><a href=""><img src={Chair} className="" style={{ width: '15px', marginRight: '10px' }} /> Chair</a></li>
                                <li><a href=""><img src={Sofa} className="" style={{ width: '15px', marginRight: '10px' }} /> Sofa</a></li>
                                <li><a href=""><img src={Tabel} className="" style={{ width: '15px', marginRight: '10px' }} /> Table</a></li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="col-md-10 mx-auto">
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