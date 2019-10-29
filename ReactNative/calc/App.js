import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Calcs from "./components/Calcs";
import Button from "./components/Button"

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      buttons:[[1,2,3],[4,5,6],[7,8,9],[".",0,"="]],
      signs:["C","/","*","-","+"],
      result:"",
      calculation:"",
    }
    this.onPress = this.onPress.bind(this)
  }

  onPress(char){
    if(char in [1,2,3,4,5,6,7,8,9,0]){
      this.setState((state)=>{return {calculation:state.calculation+char}})
    }
    else if(["/","*","-","+"].includes(char)){
      console.log(this.state.calculation.charAt(this.state.calculation.length-1))
      if(!["/","*","-","+"].includes(this.state.calculation.substr(-1))&&this.state.calculation!=""){
        this.setState((state)=>{return {calculation:state.calculation+char}})
      }
    }else if(char=="="){
      var res= Function("return "+this.state.calculation)()
      if(res=="Infinity"){
        res=""
      }
      this.setState({result:res})
    }else if(char == "C"){
      this.setState((state)=>{return{result:"",calculation:state.calculation.substring(0,state.calculation.length-1)}})
    }
    else if(char == "."){
      this.setState((state)=>{return {calculation:state.calculation+char}})
    }
  }

  render(){
    var buttons = this.state.buttons.map((el,i)=>{
      var btns = el.map((el,i)=>{
        return <Button key={i} text={el} style={{backgroundColor:"#888"}} onpress={this.onPress}/>
      })
      return <View style={{flex:1,flexDirection:"row"}} key={i}>{btns}</View>
    })
    var signs = this.state.signs.map((el,i)=>{
      return <Button key={i} text={el} style={{backgroundColor:"#aaa"}} onpress={this.onPress}/>
    })

    return (
      <View style={styles.container}>
        <Calcs result={this.state.result} calculation={this.state.calculation}/>
        <View style={{flex:2,backgroundColor:"#ddd",width:"100%", flexDirection:"row"}}>
          <View style={{flex:3}} >
            {buttons}
          </View>
          <View style={{flex:1}} >
            {signs}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
