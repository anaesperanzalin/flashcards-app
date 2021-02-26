import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { getData } from '../utils/api'
import { connect } from 'react-redux'

import { getDecks} from '../utils/api'
import {receiveDecks} from '../actions'
import reducer from '../reducers'


function DeckList({ navigation}) {
        getDecks()
        //.then( decks => receiveAllDecks(decks))
        
        //console.log('decks', decks)
        console.log('receiveActions', receiveDecks())
        console.log('reducer', reducer)



        const decks = getData()

        return (
        <View style={styles.container}>
            {Object.keys(decks).map((deck) => {
                const { title, questions } = decks[deck]
                return (
                    <View key={deck}>
                        <Text> {title} </Text>
                        <Text> {questions.length} questions </Text>
                        <Button
                            onPress={() => navigation.navigate('DeckView', {deck})}
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


function mapDispatchToProps(dispatch) {
    return {
        receiveAllDecks: (decks) => dispatch (receiveDecks(decks))
    }
}


function mapStateToProps (decks){
    
    return decks
    
};

export default connect (mapStateToProps, mapDispatchToProps) (DeckList)