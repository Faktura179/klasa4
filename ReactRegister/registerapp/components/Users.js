import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MyButton from "./MyButton"
import ListItem from "./ListItem"
import settings from "./ip.json"

var ip = settings.ip

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[]
        };
        this.getusers()
        this.getusers = this.getusers.bind(this)
        this.back = this.back.bind(this)
        this.delete = this.delete.bind(this)
        this.edit = this.edit.bind(this)
    }

    static navigationOptions = {
        //header: null,
        title: "Users",
        headerStyle: {
            backgroundColor: "#FFA000",
        },
        headerTitleStyle: {
            color: "#ffffff"
        }
    }

    back() {
        this.props.navigation.navigate("Main")
    }
    async getusers() {
        await fetch("http://" + ip + ":3000/getusers", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    users:responseJson
                })
            })
            .catch((error) => {
                console.log(error);
            });

        
    }

    delete(user, pass, id){
        console.log("delete",user)
        fetch("http://" + ip + ":3000/delete", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  user:user,
                  pass:pass
                })
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    if(responseJson){
                        this.setState((state)=>{
                            var users = state.users
                            users.splice(id,1)
                            return {users:users}
                        })
                        console.log("deleted")
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
      }


      edit(user, pass, id){
        this.props.navigation.navigate("EditUser",{user:user, pass:pass, id:id})
      }

    render() {
        return (
            <View style={styles.container}>
                
                <FlatList
                    data={
                        this.state.users
                    }
                    style={styles.list}
                    renderItem={({ item,index }) => <ListItem klucz={index} user={item.user} pass={item.pass} delete={this.delete} edit={this.edit}><Text style={{fontSize:20,padding:3}}>{index} : {item.user}, {item.pass}</Text></ListItem>}
                    keyExtractor={({item,index})=>index}
                />
                <MyButton text="Back to Login page" onPress={this.back} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 15, backgroundColor:"#FFECB3" },
    list:{marginTop:10,marginBottom:10},
})

export default Users;
