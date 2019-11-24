import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

var plus = require("../assets/icons/plus.png")

class FotoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked:false,

    };
    this.onPress = this.onPress.bind(this)
    this.onLongPress = this.onLongPress.bind(this)
  }

  onPress(){
    this.setState((state)=>{return {clicked: !state.clicked}})
    this.props.onPress(this.props.id)
  }

  onLongPress(){
    this.props.onLongPress(this.props.uri, this.props.id)
  }

  render() {
    return (
      <View style={{margin:10}}>
        <TouchableOpacity onPress={this.onPress} onLongPress={this.onLongPress}>
          <Image source={{uri : this.props.uri}} style={this.props.style} /> 
          <Text style={{position:"absolute",bottom:0,right:0, color:"#fff",padding:10,fontWeight:"700"}}>{this.props.id}</Text>
          {this.state.clicked ? (<View style={{position:"absolute", top:0,left:0, backgroundColor:"rgba(255,255,255,0.5)", width:"100%",height:"100%", alignItems:"center",justifyContent:"center"}}><Image source={plus} style={{width:50,height:50}}/></View>):null}
        </TouchableOpacity>
      </View>
    );
  }

  componentDidMount(){
    if(this.props.clicked)
      this.setState({clicked:true})
  }
}


FotoItem.propTypes={
  onPress: PropTypes.func.isRequired,
  onLongPress: PropTypes.func.isRequired,
}


export default FotoItem;
