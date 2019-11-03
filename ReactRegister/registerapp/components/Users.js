import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyButton from "./MyButton"

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.back = this.back.bind(this)
    }

    static navigationOptions = {
        //header: null,
        title: "Users",
        headerStyle: {
            backgroundColor: "#FFA000",
        },
        headerTitleStyle: {
            color: "#ffffff"
        }
    }

    back() {
        this.props.navigation.navigate("Main")
    }

    render() {
        return (
            <View style={styles.container}>
                <MyButton text="Back to Login page" onPress={this.back} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, },
})

export default Users;
