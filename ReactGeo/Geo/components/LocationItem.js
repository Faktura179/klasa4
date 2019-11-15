import React, { Component } from 'react';
import { View, Text, Switch, Image } from 'react-native';

var img = require("../assets/imgs/loc.png")

class LocationItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.toggleSwitch = this.toggleSwitch.bind(this)
    }

    toggleSwitch(){
        this.props.onValueChange(this.props.index)
    }

    render() {
        return (
            <View style={{ flex: 1,flexDirection:"row",marginTop:25 }}>
                <Image style={{width:65, height:65}} source={img}/>
                <View style={{ flex: 1, paddingHorizontal:20,paddingTop:5 }}>{this.props.children}</View>
                <Switch value={this.props.value} onValueChange={this.toggleSwitch} />
            </View>
        );
    }
}

export default LocationItem;
