import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className ="cart">
            <h4>Selected Clothes</h4>
             <p>Selected Items: {cart.length}</p>
             <button>CHOOSE 1 FOR ME</button>
             <button>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;