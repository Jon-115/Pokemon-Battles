import React,{useState} from 'react'
import DisplayPlayer from './Battle/DisplayPlayer'
import './css/Battle.css'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {changeDeck} from '../actions/Pokemon'


function Battle() {

  // const GlobalDeck = useSelector(state => state.selectedDeck)
  const Deck1 = useSelector(state => state.firstDeck)
  const Deck2 = useSelector(state => state.secondDeck)
  const Deck3 = useSelector(state => state.thirdDeck)

  const dispatch = useDispatch()

  const [startGame, setStartGame] = useState(false)
  const [deck, setDeck] = useState('Deck 1')


  function handleSubmit(e) {
    e.preventDefault()
    let haveCard = false
    
    switch(deck){
      case 'Deck 1':  
        dispatch(changeDeck(Deck1))
        if(Deck1.length > 0) {haveCard = true}
        break
      case 'Deck 2': 
        dispatch(changeDeck(Deck2))  
        if(Deck2.length > 0) {haveCard = true} 
        break 
      case 'Deck 3': 
        dispatch(changeDeck(Deck3))  
        if(Deck3.length > 0) {haveCard = true}  
        break
      default: console.log('Change Deck Failed')
    }  
    
    if(haveCard === true) {
      setStartGame(true)
    }
    else{
      alert('Deck is empty')
    }

  } 

  return (
    <div id='battleMain'>
      <>
        {startGame ?  
        <DisplayPlayer endGame={() => setStartGame()} />
         : 
        <div>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3">
              <Form.Label>Select Type</Form.Label>
              <Form.Select onChange={(e) => setDeck(e.target.value)} >
                <option>Deck 1</option>
                <option>Deck 2</option>
                <option>Deck 3</option>
              </Form.Select>
            </Form.Group>
        
            <Button variant="primary" type="submit">
              Start Game
            </Button>
          </Form>
        </div>
        }
      </>
    
    </div>
  )
}

export default Battle