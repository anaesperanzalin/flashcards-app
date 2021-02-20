import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import DeckList from './components/DeckList'
import DeckView from './components/DeckView'
import AddDeck from './components/AddDeck'

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { blue, white } from './utils/colors'

import Navigation from './components/Navigation'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './components/StackNavigator';



export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Navigation />
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