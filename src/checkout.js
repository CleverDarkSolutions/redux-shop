import React from 'react';
import {Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {setValues} from './features/counterSlice';

let checkoutStyle = {
    width: '40em',
    height: '20em',
    position: 'absolute',
    top: '50%',
    left: '40%',
    borderRadius: '2em',
    border: '#909090 solid 2px',
    background: '#F0F0F0',
}

const Checkout = (props) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.counter.values);
    const clearState = () => {
        for(let i=0;i<items.length;i++){
            const quantity = items[i].quantity;
            const stock = items[i].stock;
            const price = items[i].price;
            const label = items[i].label;
            dispatch(setValues({
                id: i,
                stock: stock - quantity, // updating items that were bought
                quantity: 0,
                tempQ : 0,
                price: price,
                label: label
            }));
        }
    }
    return(
        <div style={checkoutStyle}>
            <h1>Do zapłaty: {props.total}</h1>
            <Button onClick={
              ()=> {clearState()}
            }>Płace i zamawiam</Button>
        </div>
    )
}

export default Checkout;