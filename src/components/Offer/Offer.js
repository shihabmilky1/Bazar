import React from 'react'
import Navbar from '../shared/Navbar/Navbar';

const Offer = () => {
    return (
        <div>
            <Navbar />
            <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>No Offer Available</h2>
        </div>
    )
}
export default Offer;