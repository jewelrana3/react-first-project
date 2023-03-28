import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Shoe.css'

const Shoe = (props) => {
    const {img,name,price,ratings,seller} = props.product;
    const handlerAddBtn = props.handlerAddBtn;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price:${price}</p>
                <p>Manufacturer:{seller}</p>
                <p>Rating:{ratings} Stars</p>
                <button onClick={()=>handlerAddBtn(props.product)} 
                className='add-cart'>
                    Add cart
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </div>
    );
};

export default Shoe;