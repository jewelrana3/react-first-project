import React from 'react';
import './Shoe.css'

const Shoe = (props) => {
    const {img,name,price,ratings,seller} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price:${price}</p>
                <p>Manufacturer:{seller}</p>
                <p>Rating:{ratings} Stars</p>
                <button className='add-cart'>Add cart</button>
            </div>
        </div>
    );
};

export default Shoe;