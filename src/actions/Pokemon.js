export const addCard = (card) => {

    return {
        type: 'ADD_CARD',
        card
    }
}

export const removeCard = (id) => {

    return {
        type: 'REMOVE_CARD',
        id
    }
}

export const changeDeck = (deck) => {

    return {
        type: 'CHANGE_DECK',
        deck
    }
}

export const setDeck = (deckNum) => {

    return{
        type: 'SET_DECK',
        deckNum
    }
}