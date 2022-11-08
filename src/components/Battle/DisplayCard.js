import React from 'react'


function DisplayCard({deck,energy,hp}) {

  
  

  return (
    <div>
        <img alt='' src={deck.image} width='150' height='225'></img>
        <h3>Hp: {hp}</h3>
        <h3>Energy: {energy}</h3>
        
    </div>
  )
}

export default DisplayCard