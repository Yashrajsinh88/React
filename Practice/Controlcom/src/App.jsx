import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, settext] = useState("")

  function handleChange(e) {
    console.log(text);
    settext(e.target.value)
  }

  return (
    <>
      <form action="">
        Email:<input type='email' value={text} onChange={handleChange}/>
      </form>
    </>
  )
}

export default App
