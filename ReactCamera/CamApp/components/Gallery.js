import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Dimensions } from 'react-native'
import * as Permissions from 'expo-permissions'
import * as MediaLibrary from 'expo-media-library'
import Btn from "./Btn"
import FotoItem from "./FotoItem"

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numColumns:1,
            photos:[]
        };
    }

    static navigationOptions = {
        //header: null,
        title: "Zdjecia",
        headerStyle: {
            backgroundColor: "#bb002f",
        },
        headerTitleStyle: {
            color: "#ffffff"
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", height: 75, marginBottom: 10 }}>
                    <Btn><Text>GRID/LIST</Text></Btn><Btn><Text>OPEN CAMERA</Text></Btn><Btn><Text>REMOVE SELECTED</Text></Btn>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        numColumns={this.state.numColumns}
                        key={this.state.numColumns}
                        data={this.state.photos}
                        renderItem={(item)=>{
                            return <FotoItem uri={item.uri}></FotoItem>
                        }}
                    />
                </View>
            </View>
        );
    }

    async componentDidMount() {
        let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            alert('brak uprawnień do czytania image-ów z galerii')
        }

        let obj = await MediaLibrary.getAssetsAsync({
            first: 100,           // ilość pobranych assetów
            mediaType: 'photo'    // typ pobieranych danych, photo jest domyślne
        })
        alert(JSON.stringify(obj.assets, null, 4))
        this.setState({photos:obj.assets})
    }
}

export default Gallery;
