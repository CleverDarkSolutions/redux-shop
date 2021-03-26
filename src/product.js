import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { increment, decrement, setValues } from './features/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import store from './app/store';

let productStyle = {
    width: '25em',
    height: '45em',
    borderRadius: '2em',
    border: '#909090 solid 2px',
    background: '#F0F0F0',
    position: 'relative',
    top: '5em',
    float: 'left',
    marginRight: '1em'
}

let imgStyle = {
    width: '15em',
    height: '25em',
    borderRadius: '2em',
    position: 'relative',
    top: '5em'
}

let labelStyle = {
    fontSize: '2em',
    position: 'relative',
    top: '3em'
}

let buttonStyle = {
    position: 'absolute',
    right: '0.5em',
    top: '1em',
}

let buttonStyle2 = {
    margin: '1em'
}

let spanStyle = {
    position: 'relative',
    top: '3em',
    fontSize: '2em'
}

let stockStyle = {
    fontSize: '1em',
    color: 'black',
    position: 'absolute',
    fontWeight: 'bold',
    top: '1em',
    left: '3em'
}

const ProductElement = (props) => {
    const val = useSelector(state => state.counter.values);
    const dispatch = useDispatch();
    const id = props.id;
    const stock1 = useSelector(state => state.counter.values[id].stock);
    const quantity1 = useSelector(state => state.counter.values[id].quantity);
    const tempQ = useSelector(state => state.counter.values[id].tempQ);
    console.log(tempQ);


    useEffect(() => {
        dispatch(setValues({
            id: props.id,
            quantity: quantity1, // props.quantity would reset it to 0 when switching
            stock: stock1, // props.stock would reset it to 0 when switching
            tempQ: 0, 
            price: props.price,
            label: props.label
        }));
    }, []); // second argument to prevent infinite loop

    return (
        <div style={productStyle}>
            <Button variant="outline-dark" style={buttonStyle} onClick={() => {
                dispatch(setValues({
                    id: props.id,
                    quantity: tempQ, // props.quantity would reset it to 0 when switching
                    stock: stock1, // props.stock would reset it to 0 when switching
                    tempQ: 0,
                    price: props.price,
                    label: props.label
                }))}}>Do koszyka</Button>
            <img style={imgStyle} src={props.src}></img>
            <div style={labelStyle}>{props.label}</div>
            <div style={labelStyle}>{props.price}zł</div>
            <div style={spanStyle}>
                <Button style={buttonStyle2} variant="outline-dark" onClick={() => {
                    dispatch(decrement(id));
                }}>-</Button>
                <span>{tempQ}</span>
                <Button style={buttonStyle2} variant="outline-dark" onClick={() => {
                    dispatch(increment(id))
                }}>+</Button>
            </div>
            <span style={stockStyle}>{val[id].stock} left</span>
        </div>
    )
}

export default ProductElement;