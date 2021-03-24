import React from 'react';
import CartElement from './cartElement';
import store from './app/store';

const Cart = (props) => {
    return(
        <div>
            <h3>Your cart</h3>
            <table className="table table-bordered">
            <CartElement productName="Dresik" productPrice="20" productQuantity="2"></CartElement>
            <CartElement productName="Dresik" productPrice="20" productQuantity="2"></CartElement>
            </table>
        </div>
    )
}

export default Cart;