import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import CircleBtn from "./CircleBtn"
import { Dimensions } from 'react-native'
import * as MediaLibrary from 'expo-media-library'

var bin = require("../assets/icons/bin.png")

class BigPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.delete = this.delete.bind(this)
  }

  static navigationOptions = ({navigation}) => { return {
    //header: null,
    title: "Zdjęcie",
    headerStyle: {
        backgroundColor: "#bb002f",
    },
    headerTitleStyle: {
        color: "#ffffff"
    }
}
}

  async delete(){
    await MediaLibrary.deleteAssetsAsync([this.props.navigation.state.params.id]);
    this.props.navigation.state.params.refresh()
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Image
            resizeMode={'cover'}
            style={{ width: "100%", height: "100%" }}
            source={{ uri: this.props.navigation.state.params.uri }}
        />
        <CircleBtn onPress={this.delete} viewStyle={{position:"absolute", bottom:30, left:(Dimensions.get("window").width/2-30)}}><Image source={bin} style={{width:50, height:50}}/></CircleBtn>
      </View>
    );
  }
}

export default BigPhoto;
