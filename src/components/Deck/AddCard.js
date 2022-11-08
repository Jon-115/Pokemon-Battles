import React,{useState} from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import SearchResults from './SearchResults';

import '../css/AddCards.css'


function AddCard() {

  const [pokeName, setPokeName] = useState('')
  const [type, setType] = useState('None')
  const [searchResults, setSearch] = useState([])

  


  function getResults(searchList) {
    
    let newList = []

    searchList.forEach(pObj => {

      let pokemon = {
        id: pObj.id,
        name: pObj.name,
        level: pObj.level,
        hp: pObj.hp,
        type: pObj.types,
        attacks: pObj.attacks,
        weakness: pObj.weakness,
        resistance: pObj.resistance,
        retreatCost: pObj.retreatCost,
        image: pObj.images.small
      }
      newList.push(pokemon)
    })

    setSearch(newList)

  }


  async function handleSubmit1(e) {
    e.preventDefault()

    if(type === 'None' && pokeName.length > 0){

      let response = await fetch('https://api.pokemontcg.io/v2/cards?q=name:' + pokeName)
      let info = await response.json(); 
      getResults(info.data)
      if (info.data.length === 0){
        alert('Pokemon does not exist')
      }
      
    }
    else{

      let response = await fetch('https://api.pokemontcg.io/v2/cards?q=name:'+ pokeName +' types:' + type)
      let info = await response.json(); 
      getResults(info.data)

    }

    setPokeName('')
  }

  

  return (
    <div>
      <Form onSubmit={e => handleSubmit1(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Add Pokemon</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" value={pokeName} onChange={e => setPokeName(e.target.value)} />
          <Form.Text className="text-muted">
            Add a new Pokemon to your team
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Select Type</Form.Label>
          <Form.Select onChange={e => setType(e.target.value)} >
            <option>None</option>
            <option>Fire</option>
            <option>Water</option>
            <option>Grass</option>
            <option>Dragon</option>
            <option>Fairy</option>
            <option>Darkness</option>
            <option>Colorless</option>
            <option>Fighting</option>
            <option>Lightning</option>
            <option>Metal</option>
            <option>Physic</option>
          </Form.Select>
        </Form.Group>
    

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br /> 

      <div id='searchResults'>
        {searchResults.map(pokemon => {
          return <SearchResults pokemonObj={pokemon} />
        })}
      </div>

    </div>
  )
}

export default AddCard