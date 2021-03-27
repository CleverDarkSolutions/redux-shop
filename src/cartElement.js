import React from 'react';
import {Button} from 'react-bootstrap';
import {useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {setValues} from './features/counterSlice';

let elementStyle = {
    display: 'table-row'
}

const CartElement = (props) => {
    const [state,setState] = useState(1);
    const dispatch = useDispatch();
   if(props.productQuantity>0 && state == 1){
    return(
            <tr style={elementStyle}>
                <td scope="row">{props.id}</td>
                <td>{props.productName}</td>
                <td>{props.productPrice}</td>
                <td>{props.productQuantity}</td>
                <td><Button variant="danger" onClick={() => {
                    setState(0);
                    dispatch(setValues({
                        id: props.id,
                        quantity: 0, // setting quantity to 0 after deleting
                        stock: 10,
                        tempQ: 0,
                        price: props.price,
                        label: props.label
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