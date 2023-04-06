import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Shoe from '../Shoe/Shoe';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        // step 2 get the product by usuing id
        for (const id in storedCart) {
            const addCart = products.find(product => product.id === id)
            if(addCart){
                let quantity = storedCart[id];
                addCart.quantity = quantity
            //    step:4 push cart
                saveCart.push(addCart)
            }
           
        }
        // step set cart
        setCart(saveCart)
    }, [products])

    const handlerAddBtn = (product) => {
        const newNumber = [...cart, product];
        setCart(newNumber);
        addToDb(product.id)
    }
    const clearCart = ()=>{
        setCart([])
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Shoe
                        key={product.id}
                        product={product}
                        handlerAddBtn={handlerAddBtn}
                    ></Shoe>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                clearCart={clearCart}
                >
                    <Link className='cheak' to='/order'>
                        <button className='prosed-btn'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;