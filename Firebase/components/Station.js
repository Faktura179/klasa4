import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Btn from "./Btn"

class Station extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.mapClick = this.mapClick.bind(this)
  }

  mapClick(){
    this.props.mapClick(this.props.data.longitude,this.props.data.latitude)
  }

  render() {
      
    return (
      <View style={{ marginVertical:15, marginHorizontal:25, shadowColor:"#fff", shadowOffset:{width:1,height:1},shadowOpacity:1,shadowRadius:2,elevation:3 }} elevation={1}>
            <Text style={{fontSize:20, fontWeight:"500"}}>{this.props.data.stAddress1}</Text>
            <View style={{flex:1,flexDirection:"row", marginVertical:10}}>
              <View style={{flex:1}}>
                <Text>lat: {this.props.data.latitude}</Text>
                <Text>lng: {this.props.data.longitude}</Text>
                <Text>razem stacji: {this.props.data.totalDocks}</Text>
              </View>
              <View style={{flex:1, paddingLeft:20, paddingVertical:6}}>
                <View style={{flexDirection:"row",flex:1}}><View style={{flex:this.props.data.availableDocks,backgroundColor:"#222", justifyContent:"center", alignItems:"center",}}><Text style={{color:"#fff",fontWeight:"600"}}>R</Text></View><View style={{flex:this.props.data.totalDocks-this.props.data.availableDocks,backgroundColor:"#777", justifyContent:"center", alignItems:"center"}}><Text style={{color:"#fff",fontWeight:"600"}}>S</Text></View></View>
                <View style={{backgroundColor:this.props.data.statusValue=="In Service" ? "#51e600":"#ffbb00",justifyContent:"center", alignItems:"center",flex:1}}><Text style={{color:"#fff",fontWeight:"600"}}>{this.props.data.statusValue}</Text></View>
              </View>
            </View>
            <Btn onPress={this.mapClick} style={{justifyContent:"flex-end"}}><Text style={{fontWeight:"600"}}>Mapa</Text></Btn>
      </View>
    );
  }
}

export default Station;
