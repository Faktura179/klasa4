import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ListItem from './ListItem';
import Database from "./Database"

class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alarms:[],
    };
    this.removeAlarm = this.removeAlarm.bind(this)
  }
  async componentDidMount(){
    let records = JSON.parse(await Database.getAll())
    //console.log(records.rows)
    this.setState({alarms: records.rows._array})
  }

  removeAlarm(id){
    let alarm = this.state.alarms
    alarm = alarm.filter((el)=> el.id!=id)
    this.setState({alarms:alarm})
  }

  render(){
    let list=[]
    this.state.alarms.forEach(element => {
      list.push(<ListItem hour={element.hour} minutes={element.minute} id={element.id} key={element.id} delete={this.removeAlarm}/>)
    });
    return (
        <View>

            {
              list
            }

        </View >
    )
    }   
}

export default ListItems;
