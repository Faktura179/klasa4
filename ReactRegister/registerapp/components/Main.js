import React, { Component } from 'react';
import { View, Text, Button, KeyboardAvoidingView, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MyButton from "./MyButton"
import { TouchableOpacity } from 'react-native-gesture-handler';

const ip = "192.168.1.21"

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
        };
        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
    }
    static navigationOptions = {
        header: null,
        title: "Register",
        headerStyle: {
            backgroundColor: "#FFA000",
        },
        headerTitleStyle: {
            color: "#ffffff"
        }
    }

    login() {
        fetch("http://"+ip+":3000/login", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: this.state.login,
                pass: this.state.password
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if(responseJson){
                    this.props.navigation.navigate("Users")
                }else{
                    alert("Wrong username or password")
                }
            })
            .catch((error) => {
                console.log(error);
            });
        
    }

    register() {
        fetch("http://"+ip+":3000/", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: this.state.login,
                pass: this.state.password
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson){
                    alert("Registered")
                    this.props.navigation.navigate("Users")
                }else{
                    alert("User already exists")
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <View style={{ flex: 1, }}>

                <View style={styles.banner}>
                    <Text style={styles.bannerTxt}> Register Node App </Text>
                </View>

                <View style={styles.bottom}>
                    <View>
                        <Text>Username</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Login"
                            onChangeText={(text) => this.setState({ login: text })}
                            value={this.state.login}
                        />

                        <Text>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={(text) => this.setState({ password: text })}
                            secureTextEntry
                            value={this.state.password}
                        />
                    </View>
                    <MyButton text="Login" onPress={this.login} style={styles.btn} />
                    <MyButton text="Register" onPress={this.register} style={styles.btn} />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    banner: { flex: 2, backgroundColor: "#FFC107", alignContent: "center", justifyContent: "center" },
    bannerTxt: { fontSize: 30, fontWeight: "500", textAlign: "center", color: "#ffffff" },
    input: { height: 30, fontSize: 20, marginBottom: 20, borderBottomColor: "#BDBDBD", borderBottomWidth: 1, },
    bottom: { flex: 3, padding: 25, },
    btn: { marginBottom: 10 }
})
export default Main;
