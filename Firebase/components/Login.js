import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import Btn from "./Btn"
import firebase from 'firebase'

var bike = require("../assets/images/bike.jpg")

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        login:"",
        pass:"",
        errorMessage:"",
    };
    this.txtlogin = this.txtlogin.bind(this)
    this.pass = this.pass.bind(this)
    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
  }

  static navigationOptions = {
    //header: null,
    title: "Login",
    headerStyle: {
        backgroundColor: "#c67100",
    },
    headerTitleStyle: {
        color: "#ffffff"
    }
}

  txtlogin(text){
    this.setState({login:text})
  }

  pass(text){
    this.setState({pass:text})
  }

  login(){
    firebase
    .auth()
    .signInWithEmailAndPassword(this.state.login, this.state.pass)
    .then(() => this.props.navigation.navigate("Main"))
    .catch(error => this.setState({ errorMessage: error.message }))
  }

  register(){
    this.props.navigation.navigate("Register")
  }

  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center',}}>
          <View>
                <Image source={bike} style={{top:-200 ,width:400, height:400, borderRadius:400, marginBottom:-200}}/>
                <Text style={{color:"#ff0000", maxWidth:"90%",textAlign:"center"}}>{this.state.errorMessage}</Text>
                <TextInput  style={{ height: 40, borderBottomColor: '#ccc', borderBottomWidth: 1}}
                        onChangeText={this.txtlogin}
                        value={this.state.login}
                        placeholder="Login"/>
                <TextInput  style={{ height: 40, borderBottomColor: '#ccc', borderBottomWidth: 1 }}
                        onChangeText={this.pass}
                        value={this.state.pass}
                        placeholder="Password"
                        secureTextEntry={true}
                        />
                <Btn onPress={this.login} viewStyle={{flex:0, height:50}}><Text>LOG IN</Text></Btn>
                <Btn onPress={this.register} viewStyle={{flex:0,height:50}}><Text>YOU DON'T HAVE AN ACCOUNT? REGISTER NOW!</Text></Btn>
          </View>
      </View>
    );
  }
}

export default Login;
