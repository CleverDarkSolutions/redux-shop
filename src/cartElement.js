import React from 'react';

const CartElement = (props) => {
   if(props.productQuantity>0){
    return(
            <tr>
                <td scope="row">{props.id}</td>
                <td>{props.productName}</td>
                <td>{props.productPrice}</td>
                <td>{props.productQuantity}</td>
            </tr>
    )
   }
   else{
       return '';
   }
}

export default CartElement;