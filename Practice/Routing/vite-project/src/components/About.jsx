import React from 'react'

const About = (userAbout , setUserAbout) => {
  return (
    <div>About

      {userAbout && userAbout.map((element , index)=> {
        return <p key={index}>{element}</p>
      })}
    </div>
  )
}

export default About