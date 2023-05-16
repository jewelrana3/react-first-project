import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Shoe from '../Shoe/Shoe';
import './Shop.css'
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const { totalProduct } = useLoaderData()
    const [currentPages, setCurrentPages] = useState(0)
    const [itemsperPages, setItemsperPages] = useState(10)

    const totalPages = Math.ceil(totalProduct / itemsperPages)

    const pagesNumber = [...Array(totalPages).keys()]
    

    // useEffect(() => {
    //     fetch('http://localhost:5000/products')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5000/products?page=
            ${currentPages}&limit=${itemsperPages}`);

            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    }, [currentPages, itemsperPages]);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        // step 2 get the product by usuing id
        for (const id in storedCart) {
            const addCart = products.find(product => product._id === id)
            if (addCart) {
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
        addToDb(product._id)
    }
    const clearCart = () => {
        setCart([])
        deleteShoppingCart();
    }
    const options = [5, 10, 20]
    function handleSelectChange(event){
        setItemsperPages(parseInt(event.target.value))
        setCurrentPages(0)
    }

    return (
        <>
            <div className='shop-container'>
                <div className="products-container">
                    {
                        products.map(product => <Shoe
                            key={product._id}
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
            {/* {pagination} */}
            <div className='pagination'>
                <h2>Current Pages:{currentPages}:Items perpages{itemsperPages}</h2>
                {
                    pagesNumber.map(number => <button 
                        key={number}
                        className={currentPages === number ? 'selected':''}
                        onClick={() => setCurrentPages(number)}
                    >{number}</button>)
                }
                <select value={itemsperPages} onChange={handleSelectChange}>
                    {options.map(option=>(
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default Shop;