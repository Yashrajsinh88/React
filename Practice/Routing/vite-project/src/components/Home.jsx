import React from 'react'

const Home = ({userData , setUserData}) => {
  return (
    <div>Home

      {userData && userData.map((element , index)=> {
       return  <p key={index}>{element}</p>;
       
      })}
    </div>
  )
}

export default Home