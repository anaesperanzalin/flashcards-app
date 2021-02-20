import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import DeckList from './DeckList'
import DeckView from './DeckView'
import AddDeck from './AddDeck'

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="DeckList" component={DeckList} />
            <Stack.Screen name="DeckView" component={DeckView} />
            <Stack.Screen name="AddDeck" component={AddDeck} />
        </Stack.Navigator>
    )
}


const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }


    }


)


export default MyStack; 