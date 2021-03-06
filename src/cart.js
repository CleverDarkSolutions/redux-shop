import React from 'react';
import CartElement from './cartElement';
import store from './app/store';
import {Button} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import InfoElement from './infoElement';

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
            sum += Number(arr[i].price) * Number(arr[i].quantity);
        }
        return Number(sum);
    }
    console.log(items);
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
                        <th scope="row" colSpan="2">Total: {total(items)} zł</th>
                        <th scope="row"><Button variant="success">To payment</Button></th>
                    </tr>
                </tbody>
            </table>
            <InfoElement title="Szybka wysyłka" description="Zawozimy waszą paczke w zawrotne 2 dni robocze i nie tolerujemy opóźnień!"
            ></InfoElement>
            <InfoElement title="Gwarancja jakości" description="Nasze towary pochodzą od zaufanych dostawców i marek rozpoznawalnych na całym świecie"
            ></InfoElement>
            <InfoElement title="30 dni na zwrot" description="Jeżeli nie spodoba ci się nasz produkt, możesz bez podania powodu odesłać go w ciągu 30 dni"
            ></InfoElement>
        </div>
    )
}

export default Cart;