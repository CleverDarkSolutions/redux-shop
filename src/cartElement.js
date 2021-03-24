import React from 'react';

const CartElement = (props) => {
    return(
            <tr>
                <td scope="row">{props.img}</td>
                <td>{props.productName}</td>
                <td>{props.productPrice}</td>
                <td>{props.productQuantity}</td>
            </tr>
    )
}

export default CartElement;