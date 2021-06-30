import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    Platform,
    StatusBar,
    Alert,
    TouchableOpacity,
    Linking,
    ImageBackground,
    Dimensions,
    Image
}from 'react-native';
import * as axios from 'axios';

export default class DailyPictureScreen extends Component {
    constructor(){
        super();
        this.state={
            apod:{}
        }
    }
    getApi=async()=>{
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=BeYwhddJou6MdQWyz0ANKjUXL9BbGz1DUKToWHWM')
        .then(response=>{
            this.setState({
                apod:response.data
            })
        })
        .catch(err => {
            Alert.alert(err.message)
        })
    }
    componentDidMount=async()=>{
        this.getApi();
    }
    render() {
        if(Object.keys(this.state.apod).length===0){
            return(
                <View style={styles.container}>
                    <Text>Loading...</Text>
                </View>
            );
        }
        return (
            <View>
                <SafeAreaView style={styles.safeViewStyle}></SafeAreaView>
                <ImageBackground style={styles.imageBackgroundStyle} source={require('../assets/stars.gif')}>
            <Text style={styles.headStyle}>Astronomy picture of the day</Text>
            <Text style={styles.titleStyle}>{this.state.apod.title}</Text>
            
            <TouchableOpacity
            style={styles.listContainer}
            onPress={()=>Linking.openURL(this.state.apod.url).catch(err=>console.log(err))}
            >
                <Text style={styles.touchTextStyle}>Click to view</Text>
                <Image style={{width:170,height:170,alignSelf:'center',marginTop:20}} source={{uri:this.state.apod.url}}></Image>
                
                </TouchableOpacity>

            <Text style={styles.explanationStyle}>{this.state.apod.explanation}</Text>

            </ImageBackground>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    safeViewStyle:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },headStyle:{
        textAlign:'center',
        fontSize:25,
        color:'white',
    },container:{
        justifyContent:'center',
        alignItems:'center'
    },listContainer:{
        width:250,
        backgroundColor:'#310069',
        height:250,
        alignSelf:'center',
        alignContent:'center',
        borderRadius:10,
        marginTop:20,
    },imageBackgroundStyle:{
        resizeMode:'cover',
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height
    },titleStyle:{
        fontSize:20,
        color:'white',
        alignSelf:'center',
        marginTop:6
    },explanationStyle:{
    color:'white',
    fontSize:15
    },touchTextStyle:{
        fontSize:20,
        textAlign:'center',
        color:'white',
        marginTop:10
    }
})