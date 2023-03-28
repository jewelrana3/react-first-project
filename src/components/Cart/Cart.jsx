import React from 'react';
import './Cart.css'

const Cart = ({count}) => {
    // const count = props.cart; option 1
    // const {count} = props; option 2
    console.log(count)

    let totalPriece = 0;
    let totalShipping = 0;
    for(const product of count){
        totalPriece = totalPriece + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = totalPriece*7/100;
    const grandTotal = totalPriece + totalShipping +tax;
    return (
        <div className='cart'>
            <h4 className='order'>Order Sumarry</h4>
            <p>Select Item:{count.length}</p>
            <p>Total Price:{totalPriece}</p>
            <p>Shipping :{totalShipping}</p>
            <p>Tax:{tax}</p>
            <h4>Grand Total :{grandTotal}</h4>
        </div>
    );
};

export default Cart;