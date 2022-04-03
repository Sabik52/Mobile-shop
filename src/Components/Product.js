import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name, price, img} = props.product;
    return (
        <div className = "product">
            <img src ={img} alt = ""></img>
            <h2>{name}</h2>
            <h3>Price: {price}</h3>
            <button onClick = {() => props.handleAddToCart(props.product)} className= "cart-button">Add to Cart <FontAwesomeIcon icon ={faShoppingCart} ></FontAwesomeIcon> </button>
            
        </div>
    );
};

export default Product;