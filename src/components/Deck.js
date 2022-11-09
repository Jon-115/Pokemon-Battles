import React from 'react'
import AddCard from './Deck/AddCard'
import DisplayDeck from './Deck/DisplayDeck'
import SelectDeck from './Deck/SelectDeck'
import './css/Deck.css'

function Deck() {
  return (
    <div id='deckMain'>

      <h1>Deck</h1>
      <br />
      
      <DisplayDeck />
      <br />

      <div id='deckFrom'>
        <SelectDeck />
        <br />
        <AddCard />
      </div>
      <br />
      
      
      

    </div>
  )
}

export default Deck