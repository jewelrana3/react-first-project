import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Reviewitem.css'

const Reviewitem = ({product,handleRemoveFromBuutton}) => {
    const {_id,img,name,quantity,price} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='name-title'>{name}</p>
                <p>Price:<span className='price-text'>${price}</span></p>
                <p>Quantity:<span className='price-text'>{quantity}</span></p>
            </div>
            <button onClick={()=>handleRemoveFromBuutton(_id)} className='delete-button'>
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />  
            </button>
        </div>
    );
};

export default Reviewitem;