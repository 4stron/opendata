import axios from 'axios'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  function getData(){
    axios('https://api.scryfall.com/cards/random')
    .then (resp => setAnswer(resp.data))
  }

  return (
    <div>
        <div className='button'>
          <button onClick={getData}>Press for a random card</button>
        </div>
    </div>
  )
}

export default App
