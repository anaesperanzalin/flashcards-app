import { AsyncStorage } from "react-native"

const initialData = {
    Pronouns : {
        title: 'Pronouns',
        questions: [
            {
            question: '我：Does this character mean “I or me”？',
            answer: 'Yes. 我 means "I or me',
            correctAnswer: 'True'
            },

            {
                question: '你：Does this character mean “You”？',
                answer: 'Yes. 你 means you',
                correctAnswer: 'True'
                }
        

        ]
    },

    Verbs : {
        title: 'Verbs',
        questions: [
            {
            question: "是：What does it mean?",
            answer: "it means TO BE",
            correctAnswer: 'True',

            },
            {
            question: 'what does 有 mean?',
            answer: 'it means TO HAVE',
            correctAnswer: 'True',

            }


        ]
    },

    Nouns : {
        title: 'Nouns',
        questions: [
            {
            question: "饭：What does it mean?",
            answer: "it means rice 🍚",
            correctAnswer: 'True',

            },
            {
            question: 'what does 花 mean?',
            answer: 'it means flower 🌹 ',
            correctAnswer: 'True'

            }


        ]
    }


}


export const getData =() => {
    return initialData

}




export function saveDeckTitle () {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
        [title]:{
            title: title, 
            questions: []
        }
    }

    ))
}