import React from 'react';
import {Button} from 'react-bootstrap';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setValues} from './features/counterSlice';
import {showPayment} from './features/mainSlice';
import Blur from 'react-css-blur';

const Checkout = (props) => {
    let checkoutStyle = {
        width: '100em',
        height: '50em',
        position: 'absolute',
        top: '10%',
        left: '10%',
        borderRadius: '2em',
        border: '#909090 solid 2px',
        background: '#F0F0F0',
        filter: 'none'
    }

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

    useEffect(()=>{
        checkoutStyle = {
            width: '100em',
            height: '50em',
            position: 'absolute',
            top: '10%',
            left: '10%',
            borderRadius: '2em',
            border: '#909090 solid 2px',
            background: '#F0F0F0',
            filter: 'none'
        }
    })

    return(
        <div style={checkoutStyle}>
            <h1>Do zapłaty: {props.total}</h1>
            <Button onClick={
              ()=> {
                  clearState();
                  dispatch(showPayment());            }
            }>Płace i zamawiam</Button>
        </div>
    )
}

export default Checkout;