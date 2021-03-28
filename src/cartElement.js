import React from 'react';
import {Button} from 'react-bootstrap';
import {useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {setValues, increment, decrement} from './features/counterSlice';

let elementStyle = {
    display: 'table-row'
}

let buttonStyle = {
    marginRight: '0.5em',
    marginLeft: '0.5em'
}

const CartElement = (props) => {
    const dispatch = useDispatch();
    const id = props.id;
    const items = useSelector(state => state.counter.values)
   if(props.productQuantity>0){
    return(
            <tr style={elementStyle}>
                <td scope="row">{props.id}</td>
                <td>{props.productName}</td>
                <td>{props.productPrice} zł</td>
                <td>
                <Button variant="outline-dark" style={buttonStyle} onClick={() => { dispatch(decrement({ id: id, which: 'quantity' })) }}>-</Button>
                    {props.productQuantity}
                <Button variant="outline-dark" style={buttonStyle} onClick={() => { dispatch(increment({ id: id, which: 'quantity' })) }}>+</Button>
                </td>

                <td><Button variant="danger" onClick={() => {
                    dispatch(setValues({
                        id: props.id,
                        quantity: 0, // setting quantity to 0 after deleting
                        stock: items[id].stock,
                        tempQ: 0,
                        price: props.productPrice,
                        label: props.productName
                    }))
                }}>X</Button></td>
            </tr>
    )
   }
   else{
       return ''; // prevents rendering empty rows
   }
}

export default CartElement;