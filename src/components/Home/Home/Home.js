import React from 'react';
import Header from '../Header/Header'
import Product from '../Products/Product';
import Service from '../Service/Service';
import CartButton from '../../shared/Cart/CartButton'
const Home = () => {
    return (
        <main>
            <Header />
            <Service />
            <Product />
            <CartButton />
        </main>
    );
};

export default Home;