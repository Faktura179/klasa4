import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import firebase from "firebase"
import { FlatList } from 'react-native-gesture-handler';
import Station from "./Station"
import Btn from "./Btn"

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:null,
      dataLoaded:false
    };
    this.stations = this.getFirebase().child("stations_big") // "stations" to nazwa tablicy w obiekcie jsona
    this.getUser = this.getUser.bind(this)
    this.getFirebase = this.getFirebase.bind(this)
    this.goHome = this.goHome.bind(this)
    this.logout = this.logout.bind(this)
  }

  static navigationOptions = {
    //header: null,
    title: "Stations in NY",
    headerStyle: {
        backgroundColor: "#c67100",
    },
    headerTitleStyle: {
        color: "#000000"
    }
}

  goHome(){
    this.props.navigation.navigate("Home")
  }

  logout(){
    firebase.auth()
   .signOut()
   .then(() => {alert("Logged out"); this.props.navigation.navigate("Login")})
   .catch((error) => alert(error))
  }

  render() {
    return (
      <View>
        <View>
          <Text style={{textAlign:"center", fontSize:20, color:"#ff0000",backgroundColor:"#ffd149"}}>Signed in: {this.getUser().email}</Text>
          <View style={{flexDirection:"row", height:40}}>
            <Btn onPress={this.goHome}><Text>HOME</Text></Btn><Btn onPress={this.logout}><Text>LOG OUT</Text></Btn>
          </View>
        </View>
        {this.state.dataLoaded ?
        <FlatList data={this.state.data}
          renderItem={({item})=><Station data={item}></Station>}
          keyExtractor={(item,index)=>index.toString()}/> :  <View style={{marginTop:50}}><ActivityIndicator color="#ffd149" size="large" /><Text style={{fontSize:15, textAlign:"center"}}>Loading Data...</Text></View>
        }
      </View>
    );
  }

  getFirebase() {
    return firebase.database().ref()
  }

  getUser(){
    return firebase.auth().currentUser
  }

  componentDidMount() {
    this.stations.on("value", (elements) => {
      //console.log(elements.val())
      // wykonaj foreach na tej kolekcji, wpisując potrzebne dane do tablicy w state
      var arr=[]
      elements.val().forEach((item) => {
        var station = {
          availableBikes:item.availableBikes,
          availableDocks: item.availableDocks,
          latitude:item.latitude,
          longitude:item.longitude,
          stAddress1:item.stAddress1,
          statusValue:item.statusValue,
          testStation:item.testStation,
          totalDocks:item.totalDocks
        }
        arr.push(station)
      })
      //console.log(arr)
      //state
      this.setState({
        data: arr,
        dataLoaded:true
      })

    })
  }

}

export default Main;
