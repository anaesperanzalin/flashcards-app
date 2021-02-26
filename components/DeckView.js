import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { getData } from '../utils/api'

const decks = getData()

export default function DeckView({ route }) {

    const deck = route.params.deck;

    console.log('decks[deck]', decks[deck]);
    
    return (
        <View style={styles.container}>

            <Text> Name of the Deck: {route.params.deck}</Text>
            {decks && deck && decks[deck] && decks[deck].questions?
            <Text>{decks[deck].questions.length} Questions </Text> : undefined}
             {decks[deck].questions.map((question, index)=> (
                 <Text key={index}>
                     {question.question}
                     {/* {question.answer} */}
                     
                 </Text>


            )
                
            )} 
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

)




