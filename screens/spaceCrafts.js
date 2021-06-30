import axios from 'axios';
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
    FlatList,
    Image
}from 'react-native';

export default class SpaceCraftScreen extends Component {
    constructor(){
        super();
        this.state={
            airCrafts:{}
        }
    }
    keyExtractor=(item,index)=>{
        index.toString()
    }
    renderItem = ({item}) =>{
        var image = item.agency.image_url
        if(image = null){
            image = require('../assets/notFound.jpg')
        }else{
            image = {uri:item.agency.image_url}
        }
        return(
            <View style={{borderWidth:1,justifyContent:'center',alignItems:'center',marginBottom:10,elevation:10}}>
                <Image
                source={image}
                style={styles.mainImageStyle}
                ></Image>
                <Text style={{fontSize:20,fontWeight:'bold',}}>{item.name}</Text>
                <Text style={{color:'#696969'}}>{item.agency.name}</Text>
                <Text>Description</Text>
                <Text style={{color:'#a9a9a9',marginLeft:10,marginRight:10}}>{item.agency.description}</Text>

            </View>
        );
    }
    getDataFromApi=()=>{
            axios
            .get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/')
            .then(response=>{
                this.setState({
                    airCrafts:response.data.results
                })
                console.log(response)
            })
            .catch(err=>{console.log(err.message)})
    }
    componentDidMount=async()=>{
        this.getDataFromApi()
    }
    render() {
        console.log(Object.keys(this.state.airCrafts))
        if(Object.keys(this.state.airCrafts).length===0){

            return(
                <View>
                    <Text>
                        Loading...
                    </Text>
                </View>
            );

        }else{
            return (
        <View>

                <SafeAreaView style={styles.safeViewStyle}></SafeAreaView>

            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Text style={styles.headStyle}>Space Crafts</Text>
            </View>

            <View>
                <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.airCrafts}
                renderItem={this.renderItem}
                ></FlatList>
            </View>

        </View>
            )
        }
    }
}

const styles= StyleSheet.create({
    safeViewStyle:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },textStyle:{
        textAlign:'center'
    },headStyle:{
        fontSize:30,
        marginTop:15
    },mainImageStyle:{
        width:'100%',
        height:200,
        marginTop:15,
        marginBottom:15,
        marginRight:10,
    }
})