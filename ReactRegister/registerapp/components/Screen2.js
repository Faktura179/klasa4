import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Screen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        // header: null,
        title: "Screen 2",
        headerStyle: {
          backgroundColor: "#00ff00",
        },
        headerTitleStyle: {
          color: "#ffffff"
        }
    }

    render() {
        return (
            <View>
                <Button
                    title="go to screen1"
                    onPress={() => this.props.navigation.navigate("s1")}
                />
            </View>
        );
    }
}

export default Screen2;
