import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Mens from './Mens';
import Womens from './Womens';
import Cart from './Cart';
import DefaultPage from './DefaultPage';

export default class Header extends Component {
    render() {
        return (
            <div>
                    <Router>
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
                        
                        <Route path="/home" component={DefaultPage} />
                        <Route path="/mens" component={Mens} />
                        <Route path="/womens" component={Womens} />
                        <Route path="/cart" component={Cart} />
                    </Router>
                {/* <DefaultPage /> */}
            </div>
        )
    }
}
