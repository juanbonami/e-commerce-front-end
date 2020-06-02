import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

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
                    </Router>
                                  
                </div>                
                <h1 class="title">Bonami</h1>
                </div>
                </div>
            </div>
        )
    }
}
