import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StarScreen from './screens/starMap'
import DailyPictureScreen from './screens/dailyPic'
import SpaceCraftScreen from './screens/spaceCrafts'
import HomeScreen from './screens/home'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>

      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="Star" component={StarScreen}></Stack.Screen>
      <Stack.Screen name="DailyPicture" component={DailyPictureScreen}></Stack.Screen>
      <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen}></Stack.Screen>
    
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
