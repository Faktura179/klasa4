import React, { Component } from 'react';
import { View, Text } from 'react-native';

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
      <View>
        <Text> EditUser </Text>
      </View>
    );
  }
}

export default EditUser;
