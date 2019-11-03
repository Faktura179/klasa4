import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableOpacity style={styles.btn} onPress={this.props.onPress}>
                    <Text style={styles.txt}> {this.props.text} </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFEB3B',
        alignSelf:"center",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,

    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    txt: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff",
        padding: 5,
    }
});

export default MyButton;
