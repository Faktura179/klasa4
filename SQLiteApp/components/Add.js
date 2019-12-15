import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, Vibration } from 'react-native';
import Database from "./Database"

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hour:0,
        minutes:0,
        setHour:true,
        setMinutes:false,
    };
    this.addBtn = this.addBtn.bind(this)
    this.setMinutes = this.setMinutes.bind(this)
    this.setHour = this.setHour.bind(this)
    this.clickHour = this.clickHour.bind(this) 
  }

  async addBtn(){
    let added = await Database.add(this.state.hour,this.state.minutes)
    this.props.navigation.state.params.reload();
    this.props.navigation.navigate("List")
  }

  setHour(){
    this.setState({setHour:true, setMinutes:false})
  }

  setMinutes(){
    this.setState({setHour:false, setMinutes:true})
  }

  clickHour(hour){
    this.setState({hour:hour})
    Vibration.vibrate(50)
    this.setState({setHour:false, setMinutes:true})
  }

  clickMinutes(minutes){
    this.setState({minutes:minutes})
    Vibration.vibrate(50)
  }

  _chooseHour(){
    let h12=[];
    let h24=[];
    let size= 50
    for (let i = 0; i < 12; i++) {
      h12.push(<View style={{position:"absolute",top:(Dimensions.get("window").width/2) + ((Dimensions.get("window").width/2-size/2)*Math.cos(2*Math.PI/12*i+(Math.PI)))-size/2, left:(Dimensions.get("window").width/2) + ((Dimensions.get("window").width/2-size/2)*Math.sin(2*Math.PI/12*i+(Math.PI)))-size/2,width:size,height:size, backgroundColor:"#F30157", borderRadius:size/2}} key={i} >
        <TouchableOpacity style={{width:"100%", height:"100%" ,justifyContent:"center", alignItems:"center"}} onPress={()=>this.clickHour(12-i)}>
          <Text style={{color:"#fff", fontSize:20, fontWeight:"600"}}>{12-i}</Text>
        </TouchableOpacity>
      </View>)
    }
    size = size*2/3
    for (let i = 0; i < 12; i++) {
      let a = 24-i
      if(a==24)
        a=0
      h24.push(<View style={{position:"absolute",top:(Dimensions.get("window").width/2) + ((Dimensions.get("window").width/2-size/2*5)*Math.cos(2*Math.PI/12*i+(Math.PI)))-size/2, left:(Dimensions.get("window").width/2) + ((Dimensions.get("window").width/2-size/2*5)*Math.sin(2*Math.PI/12*i+(Math.PI)))-size/2,width:size,height:size, backgroundColor:"#F30157", borderRadius:size/2}} key={i} >
        <TouchableOpacity style={{width:"100%", height:"100%" ,justifyContent:"center", alignItems:"center"}} onPress={()=>this.clickHour(a)}>
          <Text style={{color:"#fff", fontSize:20, fontWeight:"600"}}>{a}</Text>
        </TouchableOpacity>
      </View>)
    }
    return(
      <View style={{position:"relative", width:Dimensions.get("window").width, height: Dimensions.get("window").width}}>
        {h12}
        {h24}
      </View>
    )
  }

  _chooseMinutes(){
    let h60=[];
    let n=60
    let size=20;
    for (let i = 0; i < n; i++) {
      let a = n-i
      if(i%5!=0)
      h60.push(<View style={{position:"absolute",top:(Dimensions.get("window").width/2) + ((Dimensions.get("window").width/2-size/2*6)*Math.cos(2*Math.PI/n*i+(Math.PI)))-size/2, left:(Dimensions.get("window").width/2) + ((Dimensions.get("window").width/2-size/2*6)*Math.sin(2*Math.PI/n*i+(Math.PI)))-size/2,width:size,height:size, backgroundColor:"#F30157", borderRadius:size/2}} key={i} >
        <TouchableOpacity style={{width:"100%", height:"100%" ,justifyContent:"center", alignItems:"center"}} onPress={()=>{this.clickMinutes(a)}}>
          <Text style={{color:"#fff", fontSize:10, fontWeight:"200"}}>{a}</Text>
        </TouchableOpacity>
      </View>)
    }
    let h12=[]
    size=50
    n=12
    for (let i = 0; i < n; i++) {
      let a = 60-i*5
      if(a==60)
        a=0
      h12.push(<View style={{position:"absolute",top:(Dimensions.get("window").width/2) + ((Dimensions.get("window").width/2-size/2)*Math.cos(2*Math.PI/n*i+(Math.PI)))-size/2, left:(Dimensions.get("window").width/2) + ((Dimensions.get("window").width/2-size/2)*Math.sin(2*Math.PI/n*i+(Math.PI)))-size/2,width:size,height:size, backgroundColor:"#F30157", borderRadius:size/2}} key={i} >
        <TouchableOpacity style={{width:"100%", height:"100%" ,justifyContent:"center", alignItems:"center"}} onPress={()=>{this.clickMinutes(a)}}>
          <Text style={{color:"#fff", fontSize:20, fontWeight:"600"}}>{a}</Text>
        </TouchableOpacity>
      </View>)
    }

    return(
      <View style={{position:"relative", width:Dimensions.get("window").width, height: Dimensions.get("window").width}}>
        {h12}
        {h60}
      </View>
    )
  }

  render() {
    return (
      <View style={{backgroundColor:"#512DA7", flex:1}}>
          <View style={{flexDirection:"row", justifyContent:"space-around"}}>
              <TouchableOpacity onPress={this.setHour}>
                  <Text style={{color: this.state.setHour? "#F30157":"#fff", fontSize:80}}>{this.state.hour<10?"0"+this.state.hour:this.state.hour}</Text>
              </TouchableOpacity>
              <Text style={{color:"#fff", fontSize:80}}> : </Text>
              <TouchableOpacity onPress={this.setMinutes}>
                  <Text style={{color: this.state.setMinutes? "#F30157":"#fff", fontSize:80}}>{this.state.minutes<10?"0"+this.state.minutes:this.state.minutes}</Text>
              </TouchableOpacity>
          </View>
        <View>
            {this.state.setHour? this._chooseHour():this._chooseMinutes()}
        </View>

        <View style={{position:"absolute",bottom:30,left:(Dimensions.get('window').width / 2) - 38,height:76, width:76, borderRadius:40, backgroundColor:"#78bae7"}}>
          <TouchableOpacity onPress={this.addBtn}>
            <Image source={require("../assets/images/plus.png")} style={{height:76, width:76}}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Add;
