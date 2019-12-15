import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableNativeFeedback, Animated, Vibration } from 'react-native';
import { Switch, TouchableOpacity } from 'react-native-gesture-handler';
import Database from "./Database"

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: new Animated.Value(5), // początkowa wartość wysokości itema
            expanded: false, // zwinięty
            on:false,
            hour:"00",
            minutes:"00",
            day:{},
            
        };
        this.delete = this.delete.bind(this)
        this.expand = this.expand.bind(this)
        this.onSwitch = this.onSwitch.bind(this)
        this.day = this.day.bind(this)
    }

    onSwitch(){
        this.setState({on:!this.state.on})
    }

    delete() {
        //console.log(this.props.id)
        Database.remove(this.props.id)
        this.props.delete(this.props.id)
    }

    expand() {
        if (!this.state.expanded) this.toValue = 25
        else this.toValue = 5
        //console.log(this.toValue)
        Animated.spring(this.state.height, {
            toValue: this.toValue,
        }).start();
        this.setState({expanded: !this.state.expanded})
    }

    day(day){
        let d = this.state.day
        if(d[day]!=null){
            d[day]=null
            this.setState({day:d})
        }
        else{
            d[day]=true
            this.setState({day:d})
        }
            
    }

    _weekDay(day){
        return (
            <View style={{borderRadius:20, backgroundColor:this.state.day[day]? "#fff":null, width:25, height:25, justifyContent:"center", alignItems:"center"}}>
                    <TouchableOpacity onPress={()=>{this.day(day)}}>
                    <Text style={{color:this.state.day[day]?"#000":"#fff"}}>{day.toUpperCase()}</Text>
                    </TouchableOpacity>
            </View>
        )
    }

    _weekDays(){
        return (
            <View style={{flexDirection:"row", justifyContent:"space-between", flex:1}}>
                {this._weekDay("pn")}
                {this._weekDay("wt")}
                {this._weekDay("sr")}
                {this._weekDay("cz")}
                {this._weekDay("pt")}
                {this._weekDay("sb")}
                {this._weekDay("nd")}
            </View>
        )
    }

    _selectedDays(){
        let keys = Object.keys(this.state.day)
        let selected =false;
        let tru = [];
        keys.forEach(el => {
            if(this.state.day[el]==true){
                selected=true
                tru.push(<Text key={el} style={{color:"#fff", marginLeft:10, fontWeight:"600"}}>{el.toUpperCase()}., </Text>)
            }
        });
        if(selected)
            return (
                <View style={{flexDirection:"row", marginLeft:30, marginTop:-10}}>
                    {tru}
                </View>
            )
        else
            return null;
    }

    render() {
        return (
            <View style={{ margin: 20, borderBottomColor: '#fff', borderBottomWidth: 1, marginBottom:0 }}>
                <View style={[styles.conts]}>
                    <Text style={[styles.txt]}>{this.state.hour}</Text>
                    <Text style={[styles.txt]}> : </Text>
                    <Text style={[styles.txt]}>{this.state.minutes}</Text><Switch style={{ marginLeft: "auto" }} value={this.state.on} onChange={this.onSwitch} thumbColor={this.state.on? "#ff5555":"#fff"} trackColor={{false: "#360259", true: "#360259"}}/>
                </View>
                <View style={[styles.conts, {marginBottom:0}]}>
                    <View>
                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,1)', true)}
                            onPress={this.delete}
                            style={{
                                width: 35,
                                height: 35,
                            }}
                        >
                            <View style={{ width: 35, height: 35, background: "red", alignItems: "center", justifyContent: "center" }}>
                                <Image style={{ width: 25, height: 25,  }} source={require('../assets/images/trash.png')} />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{ marginLeft: "auto", marginRight: 10 }}>
                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,1)', true)}
                            onPress={this.expand}
                            style={{
                                width: 35,
                                height: 35,

                            }}
                        >
                            <View style={{ width: 35, height: 35, background: "red", alignItems: "center", justifyContent: "center" }}>
                                <Image style={{ width: 25, height: 25, transform: this.state.expanded ? [{ rotate: '180deg' }]:[{ rotate: '0deg' }] }} source={require('../assets/images/expand.png')} />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
                <View style={[styles.conts,{marginTop: this.state.expanded?15:0,marginBottom:15, paddingHorizontal:15}]}>
                    <Animated.View style={{

                        height: this.state.height, // animowany styl, tutaj wysokość View
                        flex:1

                    }} >
                        { this.state.expanded ? this._weekDays() : this._selectedDays()}
                    </Animated.View>
                </View>
            </View>
        );
    }

    componentDidMount(){
        this.setState({minutes: this.props.minutes < 10 ? "0"+this.props.minutes:this.props.minutes,hour:this.props.hour<10 ? "0"+this.props.hour:this.props.hour})
        // this.props.minutes = this.props.minutes < 10 ? "0"+this.props.minutes:this.props.minutes
        // this.props.hour = this.props.hour<10 ? "0"+this.props.hour:this.props.hour
    }
}

const styles = StyleSheet.create({
    txt: {
        color: "#fff",
        fontSize: 50,
    },
    conts: {
        flexDirection: "row",
        marginBottom: 15,
    }

});


export default ListItem;
