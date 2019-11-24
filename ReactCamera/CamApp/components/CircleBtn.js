import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

class CircleBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={this.props.viewStyle}>
        <TouchableOpacity onPress={this.props.onPress} style={[{width:75,height:75,borderRadius:75,backgroundColor:"#fff", justifyContent:"center", alignContent:"center",alignItems:"center"},this.props.style]}>
            {this.props.children}
        </TouchableOpacity>
      </View>
    );
  }
}

CircleBtn.propTypes={
    onPress: PropTypes.func.isRequired,
}

export default CircleBtn;
