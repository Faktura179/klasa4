import React, { Component } from 'react';
import Tile from "./Tile"

class Board2 extends Component {
    render() {
        var tiles=[]
        for(var i =0; i<5;i++){
            for(var j =0; j<5;j++){
                tiles.push(<Tile key={i*10+j} id={{i:i,j:j}} clicked={this.props.uklad[i][j]} color={this.props.color} nc={true}/>)
            }
            tiles.push(<br key={i*10+6}/>)
        }
        return (
            <div>
                {tiles}
            </div>
        );
    }
}

export default Board2;