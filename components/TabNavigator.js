import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import AddDeck from "./AddDeck";
import DeckList from "./DeckList"


const Tab = createBottomTabNavigator();

export default function TabNavigator({route}){
    return (
        <Tab.Navigator
            screenOptions = { 
            ({route}) => ({
                tabBarIcon: ( {focused, color, size })=> {
                    let iconName;

                    switch(route.name){

                        case "Deck List":
                            iconName = <MaterialCommunityIcons name="cards" size={30} color="black" />
                        
                        case "Add Deck":
                            iconName = focused ? "plus-square": "plus-square"
                        
                    }
                    return <FontAwesome name ={iconName} size={size} color= {color}/>
                },

            })            }>

          <Tab.Screen name="Deck List" component={DeckList} route={route} />
           <Tab.Screen name="Add Deck" component={AddDeck} route={route} />




       </Tab.Navigator>


    )

}


