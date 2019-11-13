import React, { Component } from 'react';
import { View, Text,StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

var img = require("./user.png")

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.delete = this.delete.bind(this)
    this.edit = this.edit.bind(this)
  }

  delete(){

    this.props.delete(this.props.user, this.props.pass, this.props.klucz)
  }

  edit(){
    this.props.edit(this.props.user, this.props.pass, this.props.klucz)
  }

  render() {
    return (
      <View style={styles.container} key={this.props.klucz}>
        <View style={[styles.sub]}><Image style={[styles.img]} source={img}/></View>
        <View style={[styles.sub,{flex:3}]}>{this.props.children}</View>
        <View style={[styles.sub,{flex:2}]}>
          <View style={[styles.sub]}>
            <TouchableOpacity onPress={this.edit}>
              <Text style={{fontSize:20,color:"#4CAF50"}}> Edit </Text>
            </TouchableOpacity>
          </View>
        <TouchableOpacity style={[styles.sub]} onPress={this.delete}><Text style={{fontSize:20, color:"#E64A19"}}>Delete</Text></TouchableOpacity></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, margin: 15, flexDirection:"row", alignContent:"space-around" },
  sub:{flex:1,flexDirection:"row"},
  img:{width:40,height:40},
})

export default ListItem;
