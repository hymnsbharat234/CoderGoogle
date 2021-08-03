import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';

import HomePage from "./Components/HomePage"
import AuthPage from "./Components/Auth/index"

import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App() {

  return (
    <View style={styles.container}>
      <NavigationContainer>
 
      
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={AuthPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
       
        </NavigationContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
