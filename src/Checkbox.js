import React, { Component } from 'react';
import "./Checkbox.css"

class Checkbox extends Component {
    constructor(props){
        super(props)
        this.state={
            visible:true
        }
        this.onChange=this.onChange.bind(this)
    }

    onChange(){
        this.setState((state)=>{
            return {visible:!state.visible}
        },()=>{
            this.props.toggle(this.props.id)
        })
    }
    render() {
        return (
            <div className="checkbox">
                <div>{this.props.name}</div>
                <input type="checkbox" onChange={this.onChange} checked={this.state.visible}/>
            </div>
        );
    }
}

export default Checkbox;