import React, { Children } from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,clearCart,children}) => {
    
    // const count = props.cart; option 1
    // const {count} = props; option 2
    

    let totalPriece = 0;
    let quantity = 0;
    let totalShipping = 0;
    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        // product.quantity = product.quantity || 1;
        totalPriece = totalPriece + product.price + product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPriece*7/100;
    const grandTotal = totalPriece + totalShipping +tax;
    return (
        <div className='cart'>
            <h4 className='order'>Order Sumarry</h4>
            <p>Select Item:{quantity}</p>
            <p>Total Price:{totalPriece}</p>
            <p>Shipping :{totalShipping}</p>
            <p>Tax:{tax}</p>
            <h4>Grand Total :{grandTotal}</h4>
            <button onClick={clearCart} className='clear-cart'>
                Clear Cart
                <FontAwesomeIcon icon={faTrashAlt} />
                </button>
                {children}
        </div>
    );
};

export default Cart;