import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Font from "expo-font";
import Btn from "./Btn" 

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontloaded:null,
        };
        this.start = this.start.bind(this)
    }

    componentDidMount = async () => {
        await Font.loadAsync({
            'monospace': require('../assets/fonts/spacemonoregular.ttf'), // Uwaga: proszę w nazwie fonta nie używać dużych liter
            'calistoga': require('../assets/fonts/calistoga.ttf')
        });
        this.setState({ fontloaded: true })
    }

    static navigationOptions = {
        header: null,
        title: "any title",
        headerStyle: {
            backgroundColor: "#c67100",
        },
        headerTitleStyle: {
            color: "#ffffff"
        }
    }

    start(){
        this.props.navigation.navigate("Authentication")
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[{ flex: 2, backgroundColor: "#ffa000" }, styles.header]}>
                    <Text style={[{ fontSize: 30 }, styles.headerTxt, this.state.fontloaded ? styles.txt:null]}>Firebase</Text>
                    <Text style={[{ fontSize: 20 }, styles.headerTxt, this.state.fontloaded ? styles.txt:null]}>Authenticate users</Text>
                    <Text style={[{ fontSize: 20 }, styles.headerTxt, this.state.fontloaded ? styles.txt:null]}>Use database</Text>
                </View>
                <View style={[{ flex: 3, backgroundColor: "#eeeeee" }, styles.body]}>
                    <Btn onPress={this.start}>
                        <Text style={[{ textAlign: "center", fontSize: 25,fontWeight:"600" }, this.state.fontloaded ? styles.txt:null]}>START</Text>
                    </Btn>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        justifyContent: "center",
        alignContent: "center"
    },
    headerTxt: {
        color: "#000",
        textAlign: "center"
    },
    body: {
        justifyContent: "center",
        alignContent: "center",
    },
    
    txt:{fontFamily:"calistoga"},
})

export default Home;