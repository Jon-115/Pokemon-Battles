import React, { useState} from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton'
import {useSelector, useDispatch} from 'react-redux'
import { changeDeck, setDeck } from '../../actions/Pokemon';


function SelectDeck() {

    // const GlobalDeck = useSelector(state => state.selectedDeck)
    const GlobalfirstDeck = useSelector(state => state.firstDeck)
    const GlobalsecondDeck = useSelector(state => state.secondDeck)
    const GlobalthirdDeck = useSelector(state => state.thirdDeck)

    const dispatch = useDispatch()

    const [radioValue, setRadioValue] = useState('1');

    let radios = [
        { name: 'Deck 1', value: '1', deck: [...GlobalfirstDeck]},
        { name: 'Deck 2', value: '2', deck: [...GlobalsecondDeck] },
        { name: 'Deck 3', value: '3', deck: [...GlobalthirdDeck] },
    ];

    // useEffect(() => {
    
    //     dispatch(changeDeck(GlobalfirstDeck))

    // },[])


    function handleChange(e) {
        dispatch(setDeck(radioValue))
        setRadioValue(e.currentTarget.value)
        dispatch(changeDeck(radios[e.currentTarget.value - 1].deck))
        
    }

    


  return (
    <div>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant='outline-dark'
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => handleChange(e)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      
    </div>
  )
}

export default SelectDeck