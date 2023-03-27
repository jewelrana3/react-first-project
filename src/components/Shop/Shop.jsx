import React, { useEffect, useState } from 'react';
import Shoe from '../Shoe/Shoe';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop'>
            <div className="products-container">
                {
                    products.map(product => <Shoe
                        key={product.id}
                        product = {product}
                    ></Shoe>)
                }
            </div>
            <div className="shop-container">
                <h4>Shop summary details</h4>
            </div>
        </div>
    );
};

export default Shop;