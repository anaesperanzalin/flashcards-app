import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { getData } from '../utils/api'
import MyStack from './StackNavigator'

function DeckList({ navigation }) {


    const decks = getData()

    console.log('navigation', navigation);
    return (
        <View style={styles.container}>
            {Object.keys(decks).map((deck) => {
                const { title, questions } = decks[deck]
                return (
                    <View key={deck}>
                        <Text> {title} </Text>
                        <Text> {questions.length} questions </Text>
                        <Button
                            onPress={() => navigation.navigate('AddDeck')}
                            title="View Deck" />
                    </View>

                )
            })}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})



export default DeckList