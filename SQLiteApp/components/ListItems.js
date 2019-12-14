import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ListItem from './ListItem';

class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return (
        <View>

            {
                //tutaj renderuje się tablica obiektów klasy <ListItem />
                <ListItem/>
            }

        </View >
    )
    }   
}

export default ListItems;
