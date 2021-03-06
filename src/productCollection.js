import React from 'react';
import ProductElement from './product';
import { Button } from 'react-bootstrap';
import { increment, decrement } from './features/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import store from './app/store';

let style = {
    margin: 'auto'
}


const ProductCollection = () => {
    const dispatch = useDispatch();
    return (
        <div style={style}>
            <ProductElement 
            id="0" src="https://i.pinimg.com/736x/6d/b6/af/6db6af53e670cc719a8380c2fa292204.jpg" label="Dres od adasia" price="100">
            </ProductElement>

            <ProductElement 
            id="1" src="https://carry.pl/23625-home_default/gi-04-spodnie.jpg" label="Jeansy" price="90">
            </ProductElement>

            <ProductElement 
            id="2" src="https://static.supersklep.pl/1200777-tshirt-champion-crewneck-214674-mlg-w1920w.jpg" label="T-shirt" price="20">
            </ProductElement>

            <ProductElement
            id="3" src="https://www.sklepmartes.pl/144140-thickbox_default/damskie-buty-carina-l-37032508-puma.jpg" label="Buty" price="120"
            ></ProductElement>

        </div>
    )
}

export default ProductCollection;