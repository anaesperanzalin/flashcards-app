import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { getData } from '../utils/api'

class DeckList extends React.Component {
    render(){
        const decks = getData()
        return(
            <View>
                {Object.keys(decks).map((deck)=> {
                    const { title, questions} = decks[deck]
                    return (
                        <View key={deck}>
                            <Text> {title} </Text>
                            <Text> {questions.length} questions </Text>
                            <Button title= "View Deck" />
                            </View>

                    )
                })}
            </View>
        )
    }
}

const styles= StyleSheet.create( {
    container: {
        flex : 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})



export default DeckList