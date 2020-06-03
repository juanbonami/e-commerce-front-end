import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div class="bg-img">
                <div class="container">
                <div class="topnav">
                  <a href="#home">Home</a>
                  <a href="#mens">Mens</a>
                  <a href="#womens">Womens</a>
                  <a href="#about">About</a>                 
                </div>                
                <h1 class="title">Bonami</h1>
                </div>
                </div>

                {/* <Router>
                        <Link to="/home">Home</Link>
                        <Link to="/mens">Mens</Link>
                        <Link to="/womens">Womens</Link>
                        <Link to="/cart">Cart</Link>

                        <Route path="/home" component={App} />
                        <Route path="/mens" component={Mens} />
                        <Route path="/womens" component={Womens} />
                        <Route path="/cart" component={Cart} />
                    </Router> */}
            </div>
        )
    }
}
