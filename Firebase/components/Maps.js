import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

class Maps extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = {
        // header: null,
        title: "Mapa",
    }

    render() {
        var marker1 = this.props.navigation.state.params.markers[0]
        var markers = this.props.navigation.state.params.markers.map((item,index)=>{
            return <MapView.Marker
            coordinate={{
                latitude: item.coords.latitude,
                longitude: item.coords.longitude,
            }}
            title={"marker "+index}
            description={index.toString()}
            key={index}
        />
        })
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: marker1.coords.latitude,
                        longitude: marker1.coords.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    {markers}
                </MapView>
            </View>
        );
    }
}

export default Maps;
