import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Effect from './Commponent/Effect'
import Post from './Commponent/Post'
import { Route, Routes } from 'react-router-dom'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
         <Post/>
     <Effect/>
        

    </div>
  )
}

export default App
