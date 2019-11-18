import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class FotoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Image source={this.props.uri} />
      </View>
    );
  }
}

export default FotoItem;
