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
                      <a href="#home">Home</a>
                      <a href="#mens">Mens</a>
                      <a href="#womens">Womens</a>
                      <a href="#about">About</a>   
                    </Router>
                                  
                </div>                
                <h1 class="title">Bonami</h1>
                </div>
                </div>
            </div>
        )
    }
}
