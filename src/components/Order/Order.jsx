import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Reviewitem from '../Reviitem/Reviewitem';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData();

    const [cart,setCart] = useState(savedCart);
   
    const handleRemoveFromBuutton=(id)=>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart=()=>{
        setCart([])
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <Reviewitem
                    key={product.id}
                    product={product}
                    handleRemoveFromBuutton={handleRemoveFromBuutton}
                    ></Reviewitem>)
                }
            </div>
            <div className='savedCart-container'>
                <Cart 
                cart={cart}
                clearCart={clearCart}
                > 
               <Link className='cheak' to="/cheakout">
                    <button className='prosed-btn'>Prosed Cheak</button>
               </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;