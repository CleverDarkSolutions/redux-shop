import React from 'react';
import { Button } from 'react-bootstrap';
import { increment, decrement } from './features/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import store from './app/store';

let productStyle = {
    width: '20em',
    height: '40em',
    background: '#F0F8FF',
    borderRadius: '2em',
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
    top: '1em'
}

let spanStyle = {
    position: 'relative',
    top: '3em',
    fontSize: '2em'
}

const ProductElement = (props) => {
    const val = useSelector(state => state.counter.values.stock);
    const dispatch = useDispatch();
    const id = props.id;
    return (
        <div style={productStyle}>
            <Button style={buttonStyle}>Do koszyka</Button>
            <img style={imgStyle} src={props.src}></img>
            <div style={labelStyle}>{props.label}</div>
            <div style={labelStyle}>{props.price}zł</div>
            <div style={spanStyle}>
                <Button onClick={() => {
                    dispatch(decrement(id));
                    }}>-</Button>
                <span>{val[id]}</span>
                <Button onClick={() => { 
                    dispatch(increment(id))}}>+</Button>
            </div>
        </div>
    )
}

export default ProductElement;