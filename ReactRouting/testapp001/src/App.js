import React, { Component } from 'react';
import "./App.css"
import Button from "./Button"

class App extends Component {
    render() {
        return (
            <div className="app">
                EJ PI PI Component<br/>
                <Button/><Button/><Button/>
            </div>
        );
    }
}

export default App;