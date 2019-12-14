import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableNativeFeedback } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.delete = this.delete.bind(this)
        this.expand = this.expand.bind(this)
    }

    delete(){

    }

    expand(){

    }

    render() {
        return (
            <View style={{margin:20, borderBottomColor: '#fff',borderBottomWidth: 1, paddingBottom:5}}>
                <View style={[styles.conts]}>
                    <Text style={[styles.txt]}>00</Text>
                    <Text style={[styles.txt]}> : </Text>
                    <Text style={[styles.txt]}>00</Text><Switch style={{marginLeft:"auto"}} />
                </View>
                <View style={[styles.conts]}>
                    <View>
                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,1)', true)}
                            onPress={this.delete}
                            style={{
                                width: 35,
                                height: 35,
                            }}
                        >
                            <View style={{ width: 35, height: 35, background: "red", alignItems:"center",justifyContent:"center" }}>
                                <Image style={{width: 25, height: 25}} source={require('../assets/images/trash.png')}/>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{marginLeft:"auto", marginRight:10}}>
                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,1)', true)}
                            onPress={this.expand}
                            style={{
                                width: 35,
                                height: 35,
                                
                            }}
                        >
                            <View style={{ width: 35, height: 35, background: "red", alignItems:"center",justifyContent:"center" }}>
                                <Image style={{width: 25, height: 25}} source={require('../assets/images/expand.png')}/>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
                <View style={[styles.conts]}>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    txt: {
        color: "#fff",
        fontSize:50,
    },
    conts:{
        flexDirection:"row",
        marginBottom:25,
    }

});


export default ListItem;
