import React from 'react';
import { useSelector } from 'react-redux';
import StockElement from './stockElement';

let tableStyle = {
    width: '60%',
    margin: 'auto'
}

let style = {
    marginTop: '5em'
}

const Stock = () => {
    const items = useSelector(state => state.counter.values);
    const componentsToRender = items.map((item, index) => (
        <StockElement key={index} id={item.id} productName={item.label} productStock={item.stock}></StockElement>
    ));
    return (
        <div style={style}>
            <table style={tableStyle} className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {componentsToRender}
                </tbody>
            </table>
        </div>
    )
}

export default Stock;