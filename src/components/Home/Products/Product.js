import React, { useState } from 'react';
import allProduct from '../../../product';
import SingleProduct from '../SingleProduct/SingleProduct';
const Product = () => {
    const [product, setProduct] = useState('all product')
    const [data, setData] = useState(allProduct)
    // const table = allProduct.filter(td => td.categories === product)
    // if (product === 'all product') {
    //     setData(allProduct) //() => setProduct('Bed')
    // }
    const handle = (id) => {
        if (id === 'all product') {
            setProduct(id)
            setData(allProduct)
        }
        if (id === 'Bed') {
            let bed = allProduct.filter(bedData => bedData.categories === id)
            setProduct(id)
            setData(bed)
        }
        if (id === 'Chair') {
            let chair = allProduct.filter(bedData => bedData.categories === id)
            setProduct(id)
            setData(chair)
        }
        if (id === 'Sofa') {
            let sofa = allProduct.filter(bedData => bedData.categories === id)
            setProduct(id)
            setData(sofa)
        }
        if (id === 'Table') {
            let table = allProduct.filter(bedData => bedData.categories === id)
            setData(table)
        }
    }
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
                                    <li onClick={() => handle('all product')}>
                                        <p className="dropdown-item dropdownlink ms-2 pe-4 my-3">All Product</p>
                                    </li>
                                    <li onClick={() => handle('Bed')}>
                                        <p className="dropdown-item dropdownlink ms-2 pe-4 my-3">Bed</p>
                                    </li>
                                    <li onClick={() => handle('Chair')}>
                                        <p className="dropdown-item dropdownlink ms-2 pe-4 my-3">Chair</p>
                                    </li>
                                    <li onClick={() => handle('Sofa')}>
                                        <p className="dropdown-item dropdownlink ms-2 pe-4 my-3">Sofa</p>
                                    </li>
                                    <li onClick={() => handle('Table')}>
                                        <p className="dropdown-item dropdownlink ms-2 pe-4 my-3">Table</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="row my-5">
                            {data.map(product => <SingleProduct product={product}></SingleProduct>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;