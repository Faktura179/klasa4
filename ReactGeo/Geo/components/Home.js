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
        });
        this.setState({ fontloaded: true })
    }

    static navigationOptions = {
        header: null,
        title: "any title",
        headerStyle: {
            backgroundColor: "#ff0000",
        },
        headerTitleStyle: {
            color: "#ffffff"
        }
    }

    start(){
        this.props.navigation.navigate("Locals")
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[{ flex: 2, backgroundColor: "#1976d2" }, styles.header]}>
                    <Text style={[{ fontSize: 30 }, styles.headerTxt, this.state.fontloaded ? styles.txt:null]}>Geo Map App</Text>
                    <Text style={[{ fontSize: 20 }, styles.headerTxt, this.state.fontloaded ? styles.txt:null]}>Go and find your position</Text>
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
        color: "#fff",
        textAlign: "center"
    },
    body: {
        justifyContent: "center",
        alignContent: "center",
    },
    
    txt:{fontFamily:"monospace"},
})

export default Home;
