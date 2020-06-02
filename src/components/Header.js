import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './DefaultPage';
import Mens from './Mens';
import Womens from './Womens';
import Cart from './Cart';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div class="bg-img">
                <div class="container">
                <div class="topnav">
                    <Router>
                        <Link to="/home">Home</Link>
                        <Link to="/mens">Mens</Link>
                        <Link to="/womens">Womens</Link>
                        <Link to="/cart">Cart</Link>

                        <Route path="/home" component={App} />
                        <Route path="/mens" component={Mens} />
                        <Route path="/womens" component={Womens} />
                        <Route path="/cart" component={Cart} />
                    </Router>
                                  
                </div>                
                <h1 class="title">Bonami</h1>
                </div>
                </div>
            </div>
        )
    }
}
