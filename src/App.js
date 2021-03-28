import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import ProductCollection from './productCollection';
import Cart from './cart';
import store from './app/store';
import {useDispatch,useSelector} from 'react-redux';
import {show1,show2,show3} from './features/mainSlice';
import {useState} from 'react';
import Stock from './stock';
import Blur from 'react-css-blur';


function App() {
  const dispatch = useDispatch();
  const subMenu =  useSelector(state => state.switches);  
  const console1 = useSelector(state => state.counter.values[1]);
  console.log(console1);
  console.log(subMenu);
  return (
    <div className="App">
      <Navbar functionOne={() => { dispatch(show1()); }} functionTwo={() => { dispatch(show2()); }} functionThree={() => {dispatch(show3())}}></Navbar>
      {subMenu.subMenu1 && <ProductCollection></ProductCollection>}
      {subMenu.subMenu2 && <Cart></Cart>}
      {subMenu.subMenu3 && <Stock></Stock>}
    </div>
  );
}

export default App;
