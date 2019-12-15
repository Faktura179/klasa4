import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import Database from "./Database"

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hour:"00",
        minutes:"00",
        setHour:true,
        setMinutes:false,
    };
    this.addBtn = this.addBtn.bind(this)
    this.setMinutes = this.setMinutes.bind(this)
    this.setHour = this.setHour.bind(this)
  }

  async addBtn(){
    let added = await Database.add(2,24)
    this.props.navigation.state.params.reload();
    this.props.navigation.navigate("List")
  }

  setHour(){
    this.setState({setHour:true, setMinutes:false})
  }

  setMinutes(){
    this.setState({setHour:false, setMinutes:true})
  }

  _chooseHour(){

  }

  _chooseMinutes(){
      
  }

  render() {
    return (
      <View style={{backgroundColor:"#512DA7", flex:1}}>
          <View style={{flexDirection:"row", justifyContent:"space-around"}}>
              <TouchableOpacity onPress={this.setHour}>
                  <Text style={{color: this.state.setHour? "#F30157":"#fff", fontSize:80}}>{this.state.hour}</Text>
              </TouchableOpacity>
              <Text style={{color:"#fff", fontSize:80}}> : </Text>
              <TouchableOpacity onPress={this.setMinutes}>
                  <Text style={{color: this.state.setMinutes? "#F30157":"#fff", fontSize:80}}>{this.state.minutes}</Text>
              </TouchableOpacity>
          </View>
        <View>
            {this.state.setHour? _chooseHour():_chooseMinutes()}
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
