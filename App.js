import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import DeckList from './components/DeckList'
import DeckView from './components/DeckView'
import AddDeck from './components/AddDeck'

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { blue, white } from './utils/colors'

import TabNavigator from './components/TabNavigator'
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux'
import reducer from './reducers'
import {createStore} from 'redux'


const MyStacks = createStackNavigator()


export default function App() {
  return (

    <Provider store = {createStore(reducer)}>
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <MyStacks.Navigator>

        <MyStacks.Screen
        name = "Home"
        component ={TabNavigator}
      
        
        />


        <MyStacks.Screen
        name = "AddDeck"
        component ={AddDeck}
        
        />



        <MyStacks.Screen
        name= "DeckView"
        component= {DeckView}
        
        
        />
        </MyStacks.Navigator>
      </View>
    </NavigationContainer>

    </Provider>    
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