import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movies from './components/Movies'


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="banner-container">
        <img className='Poster' src='src/imgs/banner.jpg' alt="Banner"/>
        <img className='Film' src='src/imgs/film.png' alt="Film"/>
      </div>
      <div className='desc-container'>
        <h2 className="banner-title">Movies in Bryant Park</h2>
        <p>Bring a blanket and a friend, grab your spot on the lawn, 
          and watch a feature film on the big screen under the city 
          skies. The lawn opens at 5pm and films begin at 8pm. Enjoy the show!</p>
      </div>
      <Movies />
    </div>
  )
}

export default App
