import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAxvwk-H9G81NcBVF4h2ES4OgcJQsx75wY",
    authDomain: "fatula-64b5c.firebaseapp.com",
    databaseURL: "https://fatula-64b5c.firebaseio.com",
    projectId: "fatula-64b5c",
    storageBucket: "fatula-64b5c.appspot.com",
    messagingSenderId: "169937762766",
    appId: "1:169937762766:web:d968f8bbd2ebe54149939f",
    measurementId: "G-4T5NF5KKCM"
  };

  firebase.initializeApp(firebaseConfig);


class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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

  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center',}}>
        <View>
            <ActivityIndicator color="#ffd149" size="large" />
            <Text style={{fontSize:25}}>Authenticating...</Text>
        </View>
      </View>
    );
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            this.props.navigation.navigate("Main")
        }else{
            this.props.navigation.navigate("Login")
        }
        // jeśli user istnieje, wtedy przechodzimy do wyświetlenia ekranu z listą danych pobranych z bazy firebase
        // jeśli nie istnieje - wtedy przechodzimy do ekranu logowania
     })
     
  }
}

export default Authentication;
