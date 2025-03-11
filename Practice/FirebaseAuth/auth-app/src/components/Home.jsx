import React, { useState } from 'react'

const Home = () => {
    const [suerData , setUserData] = useState(JSON.parse(localStorage.getItem("user")) || null ); 

    function handleLogout() {
        
    }
  return (
    <>
      <div>
        <p>Name:{userData.displayName}</p>
        <button onClick={handleLogout}></button>
        </div>     
    </>
  )
}

export default Home