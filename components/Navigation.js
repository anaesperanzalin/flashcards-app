import React from "react";
import { FontAwesome } from '@expo/vector-icons'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {createStackNavigator} from '@react-navigation/stack'

import AddDeck from "./AddDeck";
import DeckList from "./DeckList"
import DeckView from "./DeckView"

const BottomTab = createBottomTabNavigator();

const MyStack = createStackNavigator();


export default function Navigation ({route}){
    return (
        
        <BottomTab.Navigator
            screenOptions = { 
            ({route}) => ({
                tabBarIcon: ( {focused, color, size })=> {
                    let iconName;

                    switch(route.name){

                        case "Deck List":
                            iconName = 'book'
                            break 
                        case "Add Deck":
                            iconName = 'plus-square'
                            break
                        
                    }
                    return <FontAwesome name ={iconName} size={size} color= {color}/>
                },

            })            }>

          <BottomTab.Screen name="Deck List" component={DeckList} route={route} />
           <BottomTab.Screen name="Add Deck" component={AddDeck} route={route} />
            
       </BottomTab.Navigator>

       






    )

}



