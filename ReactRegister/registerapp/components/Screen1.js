import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Screen1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        // header: null,
        title: "Screen 1",
        headerStyle: {
          backgroundColor: "#ff0000",
        },
        headerTitleStyle: {
          color: "#ffffff"
        }
    }
    

    render() {
        return (
            <View>
                <Button
                    title="go to screen2"
                    onPress={() => this.props.navigation.navigate("s2")}
                />
            </View>
        );
    }
}

export default Screen1;
