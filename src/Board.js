import React, { Component } from 'react';
import Tile from './Tile';
import "./Board.css"

class Board extends Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onClick=this.onClick.bind(this)
    }
    onSubmit(){
        this.props.save(this.props.id)
    }
    onClick(id){
       this.props.click(this.props.id,id)
    }
    render() {
        var tiles=[]
        for(var i =0; i<5;i++){
            for(var j =0; j<5;j++){
                tiles.push(<Tile key={i*10+j} id={{i:i,j:j}} clicked={this.props.uklad[i][j]} color={this.props.color} click={this.onClick}/>)
            }
            tiles.push(<br key={i*10+6}/>)
        }
        var o=0
        if(this.props.visible){
            o=1
        }
        return (
            
            <div className="board">
                Plansza {this.props.name}
                <div style={{opacity:o}}>
                    <div >
                        {tiles}
                    </div>
                    <input type="submit" value="Zapisz" onClick={this.onSubmit}/>
                </div>
            </div>
        );
    }
}

export default Board;