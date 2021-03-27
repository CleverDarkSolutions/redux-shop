import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice';

let buttonStyle = {
    margin: '0.5em'
}

const StockElement = (props) => {
    const dispatch = useDispatch();
    const id = props.id;
    if (props.productName != '') {
        return (
            <tr>
                <td scope="row">{props.id}</td>
                <td>{props.productName}</td>
                <td>
                    <Button onClick={() => { dispatch(decrement({ id: id, which: 'stock'})) }} style={buttonStyle}>-</Button>
                    {props.productStock}
                    <Button onClick={() => { dispatch(increment({ id: id, which: 'stock'})) }} style={buttonStyle}>+</Button>
                </td>
            </tr>
        )
    }
    else return ''; // prevents rendering empty rows
}

export default StockElement;