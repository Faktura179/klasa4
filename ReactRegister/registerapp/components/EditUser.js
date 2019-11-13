import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

var img = require("./user.png")

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    //header: null,
   title: "Edit User",
   headerStyle: {
     backgroundColor: "#FFA000",
   },
   headerTitleStyle: {
     color: "#ffffff"
   }
}
  render() {
    return (
      <View style={[styles.container]}>
        <View style={{flex:2, justifyContent:"center", alignItems:"center"}}>
          <Image source={img} style={{width:150, height:150}}/>
        </View>
        <View style={{flex:3}}>
          <Text style={{textAlign:"center", fontSize:30, padding:20}}>
            {this.props.navigation.state.params.user}
          </Text>
          <Text style={{textAlign:"center", fontSize:30, padding:20}}>
            {this.props.navigation.state.params.user}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFECB3" },
})

export default EditUser;
