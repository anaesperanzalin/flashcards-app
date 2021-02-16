import React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { addDeck } from '../actions'

class AddDeck extends React. Component {

    state = {
        text: ''

    }

    submitName = () => {
        const { text } = this.state
        saveDeckTitle(text)
        this.props.dispatch(addDeck(text))
        // this.props.navigation.navigate('DeckView', { })
    }


    render(){
        return (
            <View>
                <Text> What's the Title of this New Deck? </Text>
                <TextInput 
                    onChangeText = {(text)=> this.setState({text: text})}
                    value= {this.state.text}>

                    </TextInput>
                {/* <Button 
                 Title = 'Submit'/> */}
            </View>
            
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
}

)

export default AddDeck
