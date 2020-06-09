import React, { Component } from 'react';
import './App.css';
// import { Link, Route} from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Mens from './components/Mens';
// import Womens from './components/Womens';
// import Cart from './components/Cart'
import Header from './components/Header';

export default class App extends Component {

  render() {
    return (
    <div className="App">
      <Header />
    </div>
  );
  }
  
}


