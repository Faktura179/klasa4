import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import Database from "./Database"

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.addBtn = this.addBtn.bind(this)
  }

  async addBtn(){
    let added = await Database.add(0,0)
    this.props.navigation.state.params.reload();
    this.props.navigation.navigate("List")
  }

  render() {
    return (
      <View style={{backgroundColor:"#512DA7", flex:1}}>
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
