import React from 'react';

let infoStyle = {
    width: '15em',
    height: '10em',
    borderRadius: '2em',
    border: '#909090 solid 2px',
    background: '#F0F0F0',
    fontSize: '2em',
    marginLeft: '3em',
    marginTop: '2em',
    float: 'left'
}

let h1Style = {
    marginTop: '1em'
}

const InfoElement = (props) => {
    return(
        <div style={infoStyle}>
            <h1 style={h1Style}>{props.title}</h1>
            <span>{props.description}</span>
        </div>
    )
}

export default InfoElement;