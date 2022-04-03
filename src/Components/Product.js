import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, price, img} = props.product;
    return (
        <div className = "product">
            <img src ={img}></img>
            <h2>{name}</h2>
            <h3>Price: {price}</h3>
            <button></button>
        </div>
    );
};

export default Product;