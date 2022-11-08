import React, { useState } from 'react'
import './css/Donate.css'
import StripeContainer from './Donate/StripeContainer'
import image from './SupportImg.jpeg'

function Donate() {
    const [showItem, setShowItem] = useState(false)
  return (
    <div id='donateMain'>
        <div id='donateCol'>
            <h1>Support</h1>
            <img src={image} alt='' width='750px' height='400px' />
            <br /> <br />
            {showItem ? <StripeContainer/> : <> <h3> If you enjoyed the app and would like to see more, feel free to donate $5 to show your support!</h3> 
            <button onClick={() => setShowItem(true)}>Support</button> </>}

        </div>
    </div>
  )
}

export default Donate