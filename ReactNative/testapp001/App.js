import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from "./header"
import Content from "./content"
import Footer from "./Footer"
import Item from "./Item"

export default class App extends React.Component {
  render(){
    var items=[]
    for(var i =0; i<7;i++){
      items.push(<Item text={("Item"+i)} flex={1} key={i}/>)
    }
    return (
      <View style={styles.container}>
        {items}
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
});
