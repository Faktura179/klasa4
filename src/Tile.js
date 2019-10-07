import React, { Component } from 'react';
import "./Tile.css"

class Tile extends Component {
    constructor(props){
        super(props)
        this.state={clicked:false, background:"none"}
        this.onClick=this.onClick.bind(this)
    }
    componentDidMount(){
        if(this.props.clicked==1){
            this.setState((state)=>{
                return {clicked: !state.clicked}
            },()=>{
                if(this.state.clicked){
                    this.setState({background:this.props.color||"red"})
                }else{
                    this.setState({background:"none"})
                }
            })
        }
    }
    onClick(){
        if(this.props.nc!=true)
        this.setState((state)=>{
            return {clicked: !state.clicked}
        },()=>{
            if(this.state.clicked){
                this.setState({background:this.props.color||"red"})
            }else{
                this.setState({background:"none"})
            }
            this.props.click(this.props.id)
        })
    }
    render() {
        
        return (
            <div className="tile" onClick={this.onClick} style={{background:this.state.background}}>
                
            </div>
        );
    }
}

export default Tile;