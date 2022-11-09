import Cdeck from './computerDeck'

const reducer = (state, action) => {

    if(state === undefined){
        state = {
            selectedDeck: [],
            firstDeck: [],
            secondDeck: [],
            thirdDeck: [],
            player: {id:1, name:'Trainer', deck:[]},
            computerDeck: Cdeck
        }
    }

    switch(action.type){

        case "CHANGE_DECK":

            return{
                ...state,
                selectedDeck: action.deck
               
            }
        case "ADD_CARD":
            return{
                ...state,
                selectedDeck: state.selectedDeck.concat(action.card)
                
            }
        case "REMOVE_CARD":

            return{
                ...state,
                selectedDeck: state.selectedDeck.filter(pokemonObj => {
                    return pokemonObj.id !== action.id
                })
                
            }
        case "SET_DECK":
            let list = [...state.selectedDeck]
            switch(action.deckNum){
                case '1':
                    return{
                        ...state,
                        firstDeck: list
                    }
                case '2':
                    return{
                        ...state,
                        secondDeck: list
                    }
                case '3':
                    return{
                        ...state,
                        thirdDeck: list
                    }
                default:
                    return state
            
            } 
        default:
            return state

    }
}

export default reducer