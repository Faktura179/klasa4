import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class Btn extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={[{ justifyContent: "center", alignContent: "center", flexDirection: "row", height: "100%", alignItems: "center" },this.props.style]} onPress={this.props.onPress}>
                    {this.props.children}
                </TouchableOpacity>
            </View>
        );
    }
}

Btn.propTypes={
    onPress: PropTypes.func.isRequired,
}

export default Btn;
