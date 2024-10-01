import axios from 'axios'
import { useState } from 'react'


function App() {
  const [answer, setAnswer] = useState(null)
  const [requestCount, setRequestCount] = useState(0)

  function getData(){
    axios('https://api.scryfall.com/cards/random')
      .then (resp => setAnswer(resp.data))
      .then(() => setRequestCount(prevCount => prevCount + 1))
  }

  return (
    <div>
        <div className='button'>
          <button onClick={getData}>Press for a random card</button>
          <p>Cards requested: {requestCount}</p>
        </div>
    </div>
  )
}

export default App
