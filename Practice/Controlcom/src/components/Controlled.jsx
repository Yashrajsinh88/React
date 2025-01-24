import React, { useState } from 'react'

const controlled = () => {

    const [text, settext] = useState("")

    function handleSubmit(e) {
      e.preventDefault();
      console.log(text);
      settext("")
    }
    
  return (
  <>
    <form onSubmit={handleSubmit} action="">
      Email:<input type='email' value={text} onChange={(e)=> settext(e.target.value)}/>
      <button type='submit'>submit</button>
    </form>
  </>
  )
}

export default controlled