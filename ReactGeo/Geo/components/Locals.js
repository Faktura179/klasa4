import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Switch, StyleSheet } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Btn from "./Btn"
import LocationItem from "./LocationItem"
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { AsyncStorage } from "react-native"

class Locals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleAll: false,
            locationPermited: false,
            locations: [],
            locSwitches:[],
        };
        this.changeAll = this.changeAll.bind(this)
        this.savePosition = this.savePosition.bind(this)
        this.goToMap = this.goToMap.bind(this)
        this.deleteAll = this.deleteAll.bind(this)
        this.onLocSwitch = this.onLocSwitch.bind(this)
    }

    static navigationOptions = {
        // header: null,
        title: "Lokalizacje",
        headerStyle: {
            backgroundColor: "#004ba0",
        },
        headerTitleStyle: {
            color: "#ffffff"
        }
    }

    changeAll() {
        this.setState((state) => {
            var flag = !state.toggleAll
            var sw = state.locSwitches.map((item)=>{
                return flag
            })
            return { toggleAll: !state.toggleAll, locSwitches: sw }
        })
    }

    async savePosition() {
        var pos = true
        if (this.state.locationPermited) {
            pos = await this.getPosition()
        } else {
            this.setPermissions()
            if (this.state.locationPermited) {
                pos = await this.getPosition()
            } else {
                pos = false
            }
        }
        if (pos !== false) {
            this.setState((state) => {
                state.locations.push(pos)
                state.locSwitches.push(false)
                return { locations: state.locations, locSwitches: state.locSwitches }
            })
            this.setData(pos.timestamp, pos)
        }
    }

    deleteAll() {
        this.state.locations.map((item, index) => {
            this.removeData(item.timestamp)
        })
        this.setState({ locations: [] })
    }

    goToMap() {
        var markers = this.state.locSwitches.map((item,index)=>{
            if(item)
                return this.state.locations[index]
        })
        markers = markers.filter((item)=>item!=undefined)
        if(markers.length>0){
            this.props.navigation.navigate("Map", {markers:markers})
        }else{
            alert("Zaznacz lokalizacje")
        }
    }

    onLocSwitch(index){
        this.setState((state)=>{
            state.locSwitches[index] = !state.locSwitches[index]
            return {locSwitches: state.locSwitches}
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <View style={{ flexDirection: "row", height: 50 }}>
                        <Btn onPress={this.savePosition}>
                            <Text style={style.BTNtxt}>Pobierz i zapisz pozycję</Text>
                        </Btn>
                        <Btn onPress={this.deleteAll}>
                            <Text style={style.BTNtxt}>Usuń wszystkie dane</Text>
                        </Btn>
                    </View>
                    <View style={{ flexDirection: "row", height: 50, paddingHorizontal: 15 }}>
                        <Btn style={[{ marginRight: -50 }]} onPress={this.goToMap}>
                            <Text style={style.BTNtxt}>PRZEJDŹ DO MAPY</Text>
                        </Btn>
                        <Switch onValueChange={this.changeAll} value={this.state.toggleAll} />
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList data={
                        this.state.locations
                    }
                        renderItem={({ item, index }) => {
                            return (<LocationItem value={this.state.locSwitches[index]} index={index} onValueChange={this.onLocSwitch}><Text style={{ fontWeight: "500" }}>Timestamp: {item.timestamp}</Text><Text style={{ fontSize: 12, color: "#444" }}>longitude: {item.coords.longitude}</Text><Text style={{ fontSize: 12, color: "#444" }}>latitude: {item.coords.latitude}</Text></LocationItem>)
                        }}
                        style={{ padding: 15 }}
                        keyExtractor={(item, index) => index.toString()}
                    >

                    </FlatList>
                </View>
            </View>
        );
    }

    componentDidMount() {
        this.setPermissions()
        this.getAllData().then((result)=>{
            result = result.map((item)=>{
                this.setState((state)=>{
                    state.locSwitches.push(false)
                    return {locSwitches: state.locSwitches}
                })
                return JSON.parse(item)
                
            })
            this.setState({locations:result})
        })
    }

    setPermissions = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            alert('Nie zezwolono na dostęp do lokalizacji')
        } else {
            this.setState({ locationPermited: true })
        }
    }

    getPosition = async () => {
        let pos = await Location.getCurrentPositionAsync({})
        //alert(JSON.stringify(pos, null, 4))
        return pos
    }

    setData = async (key, value) => {
        key = JSON.stringify(key)
        value = JSON.stringify(value)
        await AsyncStorage.setItem(key, value);
    }

    getData = async (key) => {
        let val = await AsyncStorage.getItem(key);
        return val
    }

    removeData = async (key) => {
        key = JSON.stringify(key)
        await AsyncStorage.removeItem(key)
    }

    getAllData = async () => {
        let keys = await AsyncStorage.getAllKeys();
        let stores = await AsyncStorage.multiGet(keys);
        let maps = stores.map((result, i, store) => {
            let key = store[i][0];
            let value = store[i][1];
            return (value)
        });
        return maps
    }
}

const style = StyleSheet.create({
    BTNtxt: { fontWeight: "500", fontSize: 15 },
})

export default Locals;
