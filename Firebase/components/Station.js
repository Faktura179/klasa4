import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Station extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      
    return (
      <View style={{ marginVertical:10, marginHorizontal:20, shadowColor:"#fff", shadowOffset:{width:1,height:1},shadowOpacity:1,shadowRadius:2,elevation:3 }} elevation={1}>
            <Text> Total stations: {this.props.data.totalDocks}</Text>
      </View>
    );
  }
}

export default Station;
