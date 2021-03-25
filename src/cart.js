import React from 'react';
import CartElement from './cartElement';
import store from './app/store';
import {useSelector} from 'react-redux';

let tableStyle = {
    width: '60%',
    margin: 'auto'
}

const Cart = () => {
    const items = useSelector(state => state.counter.values);
    console.log(items);    
    const componentsToRender = items.map((item,index) => (
        <CartElement key={index} id={item.id} productName = {item.label} productPrice = {item.price} productQuantity = {item.quantity}></CartElement>
    ));
    return(
        <div>
            <h3>Your cart</h3>
            <table style={tableStyle} className="table table-bordered">
            <thead>
                <th scope="row">ID</th>
                <th scope="row">Name</th>
                <th scope="row">Price</th>
                <th scope="row">Amount</th>
            </thead>
            <tbody>
                {componentsToRender}
                <tr>
                    <td scope="row"></td>
                    <td scope="row"></td>
                    <td>Sum price</td>
                    <td>Sum amount</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Cart;