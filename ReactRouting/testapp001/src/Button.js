import React, { Component } from 'react';
import "./Button.css"

class Button extends Component {
    constructor(props){
        super(props)
        this.onClick=this.onClick.bind(this)
    }
    onClick(){
        alert("Dziala")
    }
    render() {
        return (
            <div className="btn">
                BATON Component
                <button onClick={this.onClick}>Klik me</button>
            </div>
        );
    }
}

export default Button;