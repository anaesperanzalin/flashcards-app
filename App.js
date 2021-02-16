import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList'
import { TabNavigator, NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons' 
import { blue, white } from './utils/colors'
import AddDeck from './components/AddDeck'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={{flex : 1}}>
      

    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name= "DeckList" component= {DeckList}/>
          <Tab.Screen name= "AddDeck" component = {AddDeck}/>
        </Tab.Navigator>

        </NavigationContainer>
    
      
    </View>
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
