import React from 'react';

const StockElement = (props) => {
    return(
        <tr>
            <td scope="row">{props.id}</td>
            <td>{props.productName}</td>
            <td>{props.productStock}</td>
        </tr>
    )
}

export default StockElement;