import React from 'react';
import CartElement from './cartElement';
import store from './app/store';
import { useSelector } from 'react-redux';

let tableStyle = {
    width: '60%',
    margin: 'auto'
}

const Cart = () => {
    const items = useSelector(state => state.counter.values);
    console.log(items);
    const componentsToRender = items.map((item, index) => (
        <CartElement key={index} id={item.id} productName={item.label} productPrice={item.price} productQuantity={item.quantity}></CartElement>
    ));

    const total = (arr) => {
        let sum=0
        for(let i=0;i<arr.length;i++){
            sum += arr[i].price * arr[i].amount;
        }
        return sum;
    }

    return (
        <div>
            <h3>Your cart</h3>
            <table style={tableStyle} className="table table-bordered">
                <thead>
                    <th scope="row">ID</th>
                    <th scope="row">Name</th>
                    <th scope="row">Price</th>
                    <th scope="row">Amount</th>
                    <th scope="row">Delete</th>
                </thead>
                <tbody>
                    {componentsToRender}
                    <tr>
                        <th scope="row"></th>
                        <th scope="row">Summary</th>
                        <th></th>
                        <th></th>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Cart;