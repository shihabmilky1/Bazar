import React from 'react';
import Header from '../Header/Header'
import Product from '../Products/Product';
import Service from '../Service/Service';
const Home = () => {
    return (
        <main>
            <Header />
            <Service />
            <Product />
        </main>
    );
};

export default Home;