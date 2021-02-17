import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import DeckList from './components/DeckList'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons' 
import { blue, white } from './utils/colors'
import AddDeck from './components/AddDeck'
import TabNavigator from './components/TabNavigator'
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
    <NavigationContainer>
    <View style={{flex : 1}}>
      
      <TabNavigator/>
      
    </View>
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