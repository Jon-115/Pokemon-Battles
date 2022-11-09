import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addCard } from '../../actions/Pokemon';
import Button from 'react-bootstrap/Button';
import '../css/SearchResults.css'

function SearchResults({pokemonObj}) {

    const GlobalDeck = useSelector(state => state.selectedDeck)
     const dispatch = useDispatch()

    function getCard(card) {

        if(GlobalDeck.length === 6) {
          alert('Deck is full')
        }
        else{
          dispatch(addCard(card))
        }
    }

  return (
    <div id='card'>
        <img src={pokemonObj.image} alt='' width='150' height='225'></img>
        <Button variant="outline-success" onClick={() => getCard(pokemonObj)}>+</Button>{' '}
    </div>
  )
}

export default SearchResults