import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
}from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}></SafeAreaView>
        <ImageBackground source={require('../assets/space.gif')} style={styles.backgroundImage}>

            <Image source={require("../assets/main-icon.png")} style={styles.iconImage}></Image>
            <Text style={styles.textStyle}> Stellar</Text>
            <Text style={styles.text2Style}>App</Text>

            <TouchableOpacity style={styles.touchStyle}
            onPress={()=>this.props.navigation.navigate("SpaceCraft")}
            >
            <Text style={styles.touchTextStyle}>Space Craft</Text>
            <Image source={require('../assets/space_crafts.png')} style={styles.touchIconImage}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchStyle}
            onPress={()=>this.props.navigation.navigate("Star")}
            >
            <Text style={styles.touchTextStyle}>Star Map</Text>
            <Image source={require('../assets/star_map.png')} style={styles.touchIconImage}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchStyle}
            onPress={()=>this.props.navigation.navigate("DailyPicture")}
            >
            <Text style={styles.touchTextStyle}>Daily Picture</Text>
            <Image source={require('../assets/daily_pictures.png')} style={styles.pictureIconImage}></Image>
            </TouchableOpacity>

        </ImageBackground>
        </View>
            
        )
    }
}
const styles=StyleSheet.create({
    container:{
    flex:1,
    },iconImage:{
        width:150,
        height:150,
        alignSelf:'center'
    },safeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },backgroundImage:{
        flex: 1,
        resizeMode: 'cover',
    },textStyle:{
        textAlign:'center',
        color:'white',
        fontSize:30,
        fontWeight:'bold',
    },touchStyle:{
        flex: 0.25,
        borderRadius: 30,
        backgroundColor: 'white',
        width:300,
        alignSelf:'center',
        marginBottom:85
    },touchTextStyle:{
        color:'#e75480',
        fontSize:35,
        textAlign:'center',
        marginTop:8,
        fontWeight:'bold',
    },touchIconImage:{
        position: "absolute",
        height: 80,
        width: 80,
        resizeMode: "contain",
        marginLeft:230,
        marginTop:-20
    },text2Style:{ 
    textAlign:'center',
    color:'white',
    fontSize:30,
    fontWeight:'bold',
    marginBottom:30
},pictureIconImage:{
    position: "absolute",
    height: 75,
    width: 75,
    resizeMode: "contain",
    marginLeft:245,
    marginTop:-35,
}
})
