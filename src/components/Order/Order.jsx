import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Reviewitem from '../Reviitem/Reviewitem';
import './Order.css'

const Order = () => {
    const savedCart = useLoaderData();

    const [cart,setCart] = useState(savedCart);
    const handleRemoveFromBuutton=(id)=>{
        const remaing = cart.filter(product => product.id !== id);
        setCart(remaing);
        console.log(id)
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    savedCart.map(product => <Reviewitem
                    key={product.id}
                    product={product}
                    handleRemoveFromBuutton={handleRemoveFromBuutton}
                    ></Reviewitem>)
                }
            </div>
            <div className='savedCart-container'>
                <Cart cart={savedCart}> </Cart>
            </div>
        </div>
    );
};

export default Order;