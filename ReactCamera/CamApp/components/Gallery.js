import React, { Component } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
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
            photos:[],
            clickedIds:[]
        };
        this.grid = this.grid.bind(this)
        this.openCam = this.openCam.bind(this)
        this.removeItems = this.removeItems.bind(this)
        this.clickPhoto = this.clickPhoto.bind(this)
        this.getPhotos = this.getPhotos.bind(this)
        this.holdPhoto = this.holdPhoto.bind(this)
    }

    static navigationOptions = {
        //header: null,
        title: "Zdjecia",
        headerStyle: {
            backgroundColor: "#bb002f",
        },
        headerTitleStyle: {
            color: "#ffffff"
        },
        
    }

    grid(){
        this.setState((state)=>{
            var num = state.numColumns == 1 ? 4:1
            return {numColumns: num}
        })
    }

    openCam(){
        this.props.navigation.navigate("CameraScreen",{refresh: this.getPhotos})
    }

    async removeItems(){
        await MediaLibrary.deleteAssetsAsync(this.state.clickedIds);
        await this.getPhotos() 
        var num = this.state.numColumns
        this.setState((state)=>{return {clickedIds:[], numColumns: 2}},()=>{
            this.setState({numColumns:num})
        })
    }

    clickPhoto(id){
        var clicked = this.state.clickedIds.includes(id)
        
        if(clicked){
            this.setState((state)=>{
                var arr = state.clickedIds.filter((el)=> el!=id)
                return {clickedIds: arr}
            },()=>{console.log(this.state.clickedIds)})
        }else{
            this.setState((state)=>{
                state.clickedIds.push(id)
                return {clickedIds: state.clickedIds}
            },()=>{console.log(this.state.clickedIds)})
        }
    }

    holdPhoto(uri,id){
        this.props.navigation.navigate("BigPhoto",{refresh: this.getPhotos, uri:uri,id:id})
    }

    render() {
        var photoWidth = (Dimensions.get("window").width - 20 * this.state.numColumns) / this.state.numColumns 
        var photoHeight = (Dimensions.get("window").height - 150) / 4
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", height: 75, marginBottom: 10 }}>
                    <Btn onPress={this.grid}><Text>GRID / LIST</Text></Btn><Btn onPress={this.openCam}><Text>OPEN CAMERA</Text></Btn><Btn onPress={this.removeItems}><Text>REMOVE SELECTED</Text></Btn>
                </View>
                <View style={{ flex: 1}}>
                    <FlatList
                        numColumns={this.state.numColumns}
                        key={this.state.numColumns}
                        data={this.state.photos}
                        renderItem={(item)=><FotoItem uri={item.item ? item.item.uri : ""} style={{width:photoWidth, height:photoHeight}} onPress={this.clickPhoto} onLongPress={this.holdPhoto} id={item.item ? item.item.id : null} clicked={this.state.clickedIds.includes(item.item ? item.item.id : null)}></FotoItem>}
                        keyExtractor={(item,index)=>index.toString()}
                    />
                </View>
            </View>
        );
    }

    async getPhotos(){
        let obj = await MediaLibrary.getAssetsAsync({
            first: 25,           // ilość pobranych assetów
            mediaType: 'photo',    // typ pobieranych danych, photo jest domyślne
            sortBy: [[MediaLibrary.SortBy.modificationTime, false]]
        })
        //alert(JSON.stringify(obj.assets, null, 4))
        this.setState({photos:obj.assets},()=>{
            //console.log(this.state.photos)
        })
    }

    async componentDidMount() {
        let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            alert('brak uprawnień do czytania image-ów z galerii')
        }

        this.getPhotos()
    }
}

export default Gallery;
