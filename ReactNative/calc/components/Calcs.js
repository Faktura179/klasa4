import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Calcs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.calcs}>
        <Text style={styles.dzialanie}>{this.props.calculation}</Text>
        <Text style={styles.wynik}>{this.props.result}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    calcs:{
        flex:1,
        backgroundColor: "#a1f2ff",
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width:"100%",
        padding:20,
        
    },
    wynik:{
        fontSize:50,
    },
    dzialanie:{
        fontSize:40,
    }
  });
  
export default Calcs;
