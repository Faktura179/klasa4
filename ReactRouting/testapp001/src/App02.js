import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App01.css"
import Home from "./Home"
import About from "./About"
import Products from "./Products01"

class App extends Component {
    render() {
        return (
            <div>
                <div className="header">My application</div>
                <Router> 
                    <div className="menu">  
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/products">Products</Link>
                    </div> 

                    <Route exact path="/" component={Home} /> 
                    <Route path="/about" component={About} />
                    <Route path="/products" component={Products} />
                                
                </Router>
            </div>
        );
    }
}

export default App;