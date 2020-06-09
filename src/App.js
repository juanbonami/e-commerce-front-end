import React, { Component } from 'react';
import './App.css';
// import { Link, Route} from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Mens from './components/Mens';
// import Womens from './components/Womens';
// import Cart from './components/Cart'
import DefaultPage from './components/DefaultPage';
import Header from './components/Header';

export default class App extends Component {

  render() {
    return (
    <div className="App">
      <Header />
      {/* <Router>
                        <div className="bg-img">
                           <div className="container">
                            <div className="topnav">
                                <Link to="/home">Home</Link>
                                <Link to="/mens">Mens</Link>
                                <Link to="/womens">Womens</Link>
                                <Link to="/cart">Cart</Link>  
                            </div>
                                <h1 className="title">Bonami</h1>
                        </div> 
                        </div>
                        
                        <Route path="/home" />
                        <Route path="/mens" component={Mens} />
                        <Route path="/womens" component={Womens} />
                        <Route path="/cart" component={Cart} />
                    </Router> */}
      <DefaultPage />
    </div>
  );
  }
  
}


