import React, { Component } from 'react';
import "./App.css"
import Checkbox from './Checkbox';
import Board from './Board';
import Board2 from "./Board2"

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      plansze:["A","B","C","D"],
      uklady:[[ [1,1,1,1,1],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
              ],
              [
                [1,0,0,0,0],
                [0,1,0,0,0],
                [0,0,1,0,0],
                [0,0,0,1,0],
                [0,0,0,0,1],
              ],
              [
                [0,0,0,0,1],
                [0,0,0,1,0],
                [0,0,1,0,0],
                [0,1,0,0,0],
                [1,0,0,0,0],
              ],
              [
                [0,0,0,0,1],
                [0,0,0,0,1],
                [0,0,0,0,1],
                [0,0,0,0,1],
                [0,0,0,0,1],
              ],
            ],
      color:"",
      visible:[true,true,true,true],
      zapisane:[]
    }
    this.toggleBoard = this.toggleBoard.bind(this)
    this.saveBoard=this.saveBoard.bind(this)
    this.Click=this.Click.bind(this)
    this.usun=this.usun.bind(this)
  }

  componentDidMount(){
    var c= prompt("Podaj kolor: ")
    this.setState({color:c})
  }
  toggleBoard(id){
    this.setState((state)=>{
      state.visible[id]=!state.visible[id]
      return {visible: state.visible}
    })

  }
  saveBoard(id){
    console.log(this.state.uklady[id])
    this.setState((state)=>{
      state.zapisane.push(this.state.uklady[id])
      return {zapisane: state.zapisane}
    })
  }
  Click(boardID, tileID){
    console.log(boardID,tileID)
    this.setState((state)=>{
      if(state.uklady[boardID][tileID.i][tileID.j]==0){
        state.uklady[boardID][tileID.i][tileID.j]=1
      }else{
        state.uklady[boardID][tileID.i][tileID.j]=0
      }
      return {uklady:state.uklady}
    })
  }
  usun(){
    this.setState({zapisane:[]})
  }
  render() {
    var checkboxes = this.state.plansze.map((el,i)=>{
      return <Checkbox name={el} id={i} key={i} toggle={this.toggleBoard}/>
    })
    var boards = this.state.plansze.map((el,i)=>{
      return <Board name={el} id={i} key={i} uklad={this.state.uklady[i]} color={this.state.color} visible={this.state.visible[i]} save={this.saveBoard} click={this.Click}/>
    })
    var saved = this.state.zapisane.map((el,i)=>{
      return <Board2 name={el} id={i} key={i} uklad={this.state.zapisane[i]} color={this.state.color} visible={this.state.visible[i]} save={this.saveBoard} click={this.Click}/>
    })
    return (
      <div className="app">
        <div className="left">
         <div>
          <div className="checkboxes">
              checkboxes<br/>
              {checkboxes}
          </div>
         </div>
         <div className="boards">
           boards<br/>
           {boards}
         </div>
         <input type="submit" value="usuń wszystko" onClick={this.usun}/>
        </div>
        <div className="right">
          {saved}
        </div>
      </div>
    );
  }
}

export default App;