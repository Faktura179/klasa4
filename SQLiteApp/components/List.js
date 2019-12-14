import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ListItems from "./ListItems"

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return (
        <ScrollView style={{backgroundColor:"#512DA7"}} >
            <ListItems />
        </ScrollView>
    )
}
}

export default List;
