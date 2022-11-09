import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import '../css/DisplayDeck.css'
import {removeCard} from '../../actions/Pokemon'
import Button from 'react-bootstrap/Button';

function DisplayDeck() {

    const GlobalDeck = useSelector(state => state.selectedDeck)
    const dispatch = useDispatch()


    function handleClick(id) {
        dispatch(removeCard(id))
    }

  return (
    <div id='theDeck'>
        {GlobalDeck.map(pokemonObj => {
            return  <div key={pokemonObj.id} id='card'>
                    <img src={pokemonObj.image} alt='' width='150' height='225'></img>
                    <Button variant="outline-danger" onClick={() => handleClick(pokemonObj.id)}>X</Button>{' '}
                </div>
        })}
    </div>
  )
}

export default DisplayDeck