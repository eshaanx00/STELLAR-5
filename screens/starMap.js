import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    Platform,
    StatusBar,
    TextInput,
    ImageBackground
}from 'react-native';
import {WebView} from 'react-native-webview';

export default class StarScreen extends Component {
    constructor(){
        super();
        this.state={
            latitude:28,
            longitude:77
        }
    }
    render() {
        var latitude = this.state.latitude;
        var longitude = this.state.longitude;
        const path = 'https://virtualsky.lco.global/embed/index.html?longitude='+longitude+'&latitude='+latitude+'&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'
        return (
        <ImageBackground source={{uri:'https://color-hex.org/colors/002633.png'}} style={styles.imageBackgroundStyle}>


                <SafeAreaView style={styles.safeViewStyle}></SafeAreaView>
            
            <Text style={styles.textStyle}>Star Map</Text>

            <TextInput placeholderTextColor="#C3BFC3" style={styles.textInputStyle} placeholder="Type latitude here" fontSize={16} textAlign={'center'} onChangeText={(text)=>{this.setState({latitude:text})}}></TextInput>
            <TextInput placeholderTextColor="#C3BFC3" style={styles.textInputStyle} placeholder="Type longitude here" fontSize={16} textAlign={'center'} onChangeText={(text)=>{this.setState({longitude:text})}}></TextInput>
            
            <WebView
            source={{uri:path}}
            scalesPageToFit={true}
            style={{marginTop:20,marginBottom:20,}}
            />

        </ImageBackground>
        )
    }
}

const styles= StyleSheet.create({
    safeViewStyle:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },textStyle:{
        textAlign:'center',
        fontSize:30,
        fontWeight:"bold",
        color:'white'
    },webView:{
        flex: 1,
    backgroundColor: 'yellow',
    width: 200,
    height: 200
    },textInputStyle:{
        alignSelf:'center',
        borderWidth:2,
        borderRadius:30,
        borderColor:'#3D3243',
        height:40,
        marginTop:20,
        width:200
    },imageBackgroundStyle:{
        flex: 1,
        resizeMode: 'cover',
    }
})