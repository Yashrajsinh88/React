import React, { useState } from 'react'

const Form = () => {

  const [userName , setuserName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
    <div className="form-container">
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" placeholder="Enter your username"/>
      <p></p>
      
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Enter your email"/>
      <p></p>
      
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" placeholder="Enter your password"/>
      <p></p>
      
      <button type="submit">Submit</button>
    </form>
  </div>
    </>
  )
}

export default Form