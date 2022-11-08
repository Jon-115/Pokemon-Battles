import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import DisplayCard from './DisplayCard'
import '../css/DisplayPlayer.css'
// import { setTimeout } from "timers/promises";

function DisplayPlayer({endGame}) {


    const GlobalDeck = useSelector(state => state.selectedDeck)
    const GlobalDeckC = useSelector(state => state.computerDeck)

    const player1 = {name:'Trainer', deck: GlobalDeck}
    const player2 = {name:'Computer', deck: GlobalDeckC}

    const time = 1000
    const leftT = player1.deck.length
    const leftC = player2.deck.length

    const [cardNumT, setCardNumT] = useState(0)
    const [cardNumC, setCardNumC] = useState(0)
    const [energyT, setEnergyT] = useState(1)
    const [energyC, setEnergyC] = useState(1)
    const [hpT, setHpT] = useState( Number(player1.deck[cardNumT].hp) )
    const [hpC, setHpC] = useState( Number(player2.deck[cardNumC].hp) )
    const [cPokemon, setCPokemon] = useState(player2.deck.length)
    const [tPokemon, setTPokemon] = useState(player1.deck.length)

    function handleClick(move, costlist) {
  

      if (move === 'Pass'){
        setEnergyC(energyC+1)
        setEnergyT(energyT+1)
        setTimeout(computerTurn ,time);
      }
      else{ 
        let cost = costlist.length

        if (move.includes('+')){
          let damage = Number(move.replace('+',''))
          if(energyT >= cost){

            setEnergyT(energyT - cost)
            setHpC( hpC - damage)
            if (hpC - damage <= 0){
              nextPokemon()
            }
            setTimeout(computerTurn ,time);
          }
        }
        else if (move.includes('×')){
          let damage = Number(move.replace('×',''))
          if(energyT >= cost){

            setEnergyT(energyT - cost)
            setHpC( hpC - damage)
            if (hpC - damage <= 0){
              nextPokemon()
            }
            setTimeout(computerTurn ,time);
          }
        }
        else{
          let damage = Number(move)
          if(energyT >= cost){

            setEnergyT(energyT - cost)
            setHpC( hpC - damage)
            if (hpC - damage <= 0){
              nextPokemon()
            }
            setTimeout(computerTurn ,time);
          }
        }

      }
    }

    function nextPokemon() {
      if(cardNumC + 1 === leftC){
        alert('You Won')
        endGame(false)
      }
      else{
        setCardNumC(cardNumC+1)
        setHpC( Number(player2.deck[cardNumC + 1].hp))
        setCPokemon(cPokemon - 1)
      }
    }

    function nextPokemonT() {
      if(cardNumT + 1 === leftT){
        alert('You Lost')
        endGame(false)
      }
      else{
        setCardNumT(cardNumT+1)
        setHpT( Number(player1.deck[cardNumT + 1].hp))
        setTPokemon(tPokemon - 1)
      }
    }

    function computerTurn() {
      let damage = 60
      setHpT(hpT - damage)
      if (hpT - damage <= 0){
        nextPokemonT()
      }
      setEnergyC(energyC+1)
      setEnergyT(energyT+2)
    }


  return (
    <div>
      <div id='stage'>

          <div id='player1'>

              <h2>{player1.name}</h2>
              <DisplayCard deck={player1.deck[cardNumT]} energy={energyT} hp={hpT}/>
              <h4>Pokemon left: {tPokemon}</h4>

          </div>
          
          <div id='player2'>
        
              <h2>{player2.name}</h2>
              <DisplayCard deck={player2.deck[cardNumC]} energy={energyC} hp={hpC}/>
              <h4>Pokemon left: {cPokemon}</h4>
          
          </div>

      </div>
      
      <div>
        {player1.deck[cardNumT].attacks.map(attack => {
            return <button onClick={() => handleClick(attack.damage,attack.cost)}>{attack.name}</button>
          })}
          <button onClick={() => handleClick('Pass',[])}>Pass</button>
      </div>

    </div>
  )
}

export default DisplayPlayer