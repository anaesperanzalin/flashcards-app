import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList'
import { TabNavigator} from '@react-navigation/native'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons' 
import { blue, white } from './utils/colors'
import AddDeck from './components/AddDeck'


const Tab = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List',
      tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name= 'cards' size= {30} color = {tintColor}/>


    }
  }, 

  AddDeck : {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({tintColor}) =><FontAwesome name='plus-square' size={30} color={tintColor}/>
    }

  }


}

)



export default function App() {
  return (
    <View style={{flex :1 }}>

    <Tab/>
     
      
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
