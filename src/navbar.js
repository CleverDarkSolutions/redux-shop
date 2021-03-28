import React from 'react';

let styleNav = {
    height: '5vw',
    color: 'white',
    fontSize: '3vw'
}

let navElement1 = {
    position: 'absolute',
    top: '0vh',
    left: '5vw'
}

let navElement2 = {
    position: 'absolute',
    top: '0vh',
    left: '25vw'
}

let navElement3 = {
    position: 'absolute',
    top: '0vh',
    left: '45vw'
}

let navElement4 = {
    position: 'absolute',
    top: '0vh',
    left: '65vw'
}
const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark" style={styleNav}>
                <ul className="navbar-nav mr-auto list-inline" >
                    <li className="nav-item list-inline-item" style={navElement1} >
                        <a className="nav-link" onClick={props.functionOne}>Kolekcja</a>
                    </li>
                    <li className="nav-item list-inline-item" style={navElement2} >
                        <a className="nav-link" onClick={props.functionTwo}>Koszyk</a>
                    </li>
                    <li className="nav-item list-inline-item" style={navElement3} >
                        <a className="nav-link" onClick={props.functionThree}>Stock</a>
                    </li>

                    <li className="nav-item list-inline-item" style={navElement4} >
                        <a className="nav-link" onClick={props.functionFour}></a>
                    </li>
                </ul>

            </nav>


        </div>
    )
}

export default Navbar;