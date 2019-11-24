import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { HeaderBackButton } from "react-navigation-stack";
import { Camera } from 'expo-camera';
import * as Permissions from "expo-permissions";
import CircleBtn from "./CircleBtn"
import * as MediaLibrary from 'expo-media-library'
import { BackHandler } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler';

var refresh = require("../assets/icons/refresh.png")
var cam = require("../assets/icons/camera.png")
var settings = require("../assets/icons/settings.png")

class CameraScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,         // przydzielone uprawnienia do kamery
            type: Camera.Constants.Type.back,  // typ kamery
        };
        this.camera=null
        this.settings = this.settings.bind(this)
        this.switchCams = this.switchCams.bind(this)
        this.takePhoto = this.takePhoto.bind(this)
        this.handleBackPress = this.handleBackPress.bind(this)
    }

    static navigationOptions = ({navigation}) => { return {
            //header: null,
            title: "Kamera",
            headerStyle: {
                backgroundColor: "#bb002f",
            },
            headerTitleStyle: {
                color: "#ffffff"
            },
            headerLeft:(<HeaderBackButton onPress={()=>{navigation.state.params.refresh(); navigation.goBack()}}/>),
        }
    }

    switchCams(){
        this.setState({
            type: this.state.type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back,
        });
    }

    async takePhoto(){
        if (this.camera) {
            let foto = await this.camera.takePictureAsync();
            let asset = await MediaLibrary.createAssetAsync(foto.uri); // domyslnie zapisuje w DCIM
            alert(JSON.stringify(asset, null, 4))
        }
    }

    settings(){

    }

    render() {
        const { hasCameraPermission } = this.state; // podstawienie zmiennej ze state
        if (hasCameraPermission == null) {
            return <View />;
        } else if (hasCameraPermission == false) {
            return <Text>brak dostępu do kamery</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera
                        ref={ref => {
                            this.camera = ref; // Uwaga: referencja do kamery używana później
                        }}
                        style={{ flex: 1 }}
                        type={this.state.type}>
                        <View style={{ flex: 1, alignItems:"flex-end",justifyContent:"space-around",flexDirection:"row", padding:20 }}>
                            {/* tutaj wstaw buttony do obsługi kamery */}
                            <CircleBtn onPress={this.switchCams}><Image source={refresh} style={{width:50,height:50}}></Image></CircleBtn>
                            <CircleBtn onPress={this.takePhoto} style={{width:100,height:100}}><Image source={cam} style={{width:75,height:75}}></Image></CircleBtn>
                            <CircleBtn onPress={this.settings}><Image source={settings} style={{width:50,height:50}}></Image></CircleBtn>
                        </View>
                    </Camera>
                </View>
            );
        }
    }

  async componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    let { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status == 'granted' });
  }

  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress(){
    this.props.navigation.state.params.refresh()
    this.props.navigation.goBack()
    return true;
  }
}

export default CameraScreen;
