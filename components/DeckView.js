import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class DeckView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    DeckView component woohoo!
                    狗 what does this mean?

                    Dog

            </Text>
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


export default DeckView

