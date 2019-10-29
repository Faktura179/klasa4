import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onPress = this.onPress.bind(this)
  }

  onPress(){
    this.props.onpress(this.props.text)
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity style={styles.btn} onPress={this.onPress}>
            <Text style={styles.txt}> {this.props.text} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn:{
        width:"100%",
        height:"100%",
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    txt:{
        fontSize:50,
        fontWeight:"300",
        color:"#fff"
    }
  });
  

export default Button;
