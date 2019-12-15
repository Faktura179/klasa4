import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import ListItems from "./ListItems"
import Database from "./Database"
import { TouchableOpacity } from 'react-native-gesture-handler';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key:0,
    };
    this.addBtn = this.addBtn.bind(this)
    this.reload = this.reload.bind(this)
  }

  componentDidMount(){
    Database.createTable();
    // Database.add(11,20)
    // Database.add(0,0)
    // Database.add(1,50)
    
  }

  reload(){
    //console.log("reloaded", this.state.key)
    this.setState({key:this.state.key+1})
  }

  addBtn(){
    this.props.navigation.navigate("Add", {reload: this.reload})
  }

  render(){
    return (
      <View style={{flex:1}} key={this.state.key}>
        <ScrollView style={{backgroundColor:"#512DA7"}} >
            <ListItems reload={this.reload}/>
        </ScrollView>
        <View style={{position:"absolute",bottom:30,left:(Dimensions.get('window').width / 2) - 38,height:76, width:76, borderRadius:40, backgroundColor:"#3C0F59"}}>
          <TouchableOpacity onPress={this.addBtn}>
            <Image source={require("../assets/images/plus.png")} style={{height:76, width:76}}/>
          </TouchableOpacity>
        </View>
      </View>
    )
}
}

export default List;
