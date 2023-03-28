import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Shoe from '../Shoe/Shoe';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [count,setCount] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart)
    },[])

    const handlerAddBtn =(product)=>{
        const newNumber = [...count,product];
        setCount(newNumber);
        addToDb(product.id)
    }
    return (
        <div className='shop'>
            <div className="products-container">
                {
                    products.map(product => <Shoe
                        key={product.id}
                        product = {product}
                        handlerAddBtn = {handlerAddBtn}
                    ></Shoe>)
                }
            </div>
            <div className="shop-container">
               <Cart count ={count}></Cart>
            </div>
        </div>
    );
};

export default Shop;