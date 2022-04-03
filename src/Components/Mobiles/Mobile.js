import React from 'react';
import './Mobile.css'

const Mobile = (props) => {
    const {name, price, id } = props.mobile;

    const addToCart = (id) => {
        console.log('itemadd', id)
    }

    
    return (
        <div className ="product">
           
            <h3>Name:{name}</h3>
            <p>Price:{price}</p>
            
            <button onClick = {() => addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Mobile;