import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Reviewitem from '../Reviitem/Reviewitem';
import './Order.css'

const Order = () => {
    const cart = useLoaderData();
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <Reviewitem
                    key={product.id}
                    product={product}
                    ></Reviewitem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;