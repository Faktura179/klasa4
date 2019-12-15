import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("fatula_rafal_4id1.db"); // proszę o taki schemat nazywania swojej bazy danych

class Database extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static createTable() {
        db.transaction(tx => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS alarms (id integer primary key not null, hour integer, minute integer);"
            );
        });
    }

    static add(hour,minute) {
        return new Promise((resolve, reject) => db.transaction(
            tx => {
                tx.executeSql(`INSERT INTO alarms (hour, minute) values (${hour}, ${minute})`, [], (tx,results)=>{
                    resolve(true)
                },function (tx, error) {
    
                    reject(error);
        
                } );
            } ) 
        )
    }

    static getAll() {
        var query = "SELECT * FROM alarms";
        //
        return new Promise((resolve, reject) => db.transaction((tx) => {
            tx.executeSql(query, [], (tx, results) => {
    
                //console.log(JSON.stringify(results))
    
                resolve(JSON.stringify(results));
    
            }, function (tx, error) {
    
                reject(error);
    
            });
        }))
    }

    static drop(){
        db.transaction(tx => {
            tx.executeSql(
                `DROP TABLE IF EXISTS alarms`
            );
        }); 
    }

    static remove(id) {
        db.transaction(tx => {
            tx.executeSql(
                `DELETE FROM alarms WHERE (id = ${id});`
            );
        });
    
    }

}

export default Database;
