import React, { useState } from 'react'

const Form = () => {

  const [userName , setuserName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    if (userName == "" || email == "" || password == "" ) {
      alert("please filled your form")
      return;
    }
    // alert("succsesfully login")
  }

  return (
    <>
    <div className="form-container">
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={userName} placeholder="Enter your username" onChange={() => setuserName(e.target.value)}/>
      <p></p>
      
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} placeholder="Enter your email" onChange={() => setEmail(e.target.value)}/>
      <p></p>
      
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} placeholder="Enter your password" onChange={() => setPassword(e.target.value)}/>
      <p></p>
      
      <button type="submit">Submit</button>
    </form>
  </div>
    </>
  )
}

export default Form