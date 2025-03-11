import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from './config/firebase';

const SignUp = () => {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((res)=> {
            console.log(res);
            alert("SignUp Successfully")
            navigate("/")
        }).catch((error)=> {
            alert("signup fail");
            console.error("Erroe Creationg user:" ,error);
        });
    }

  return (
    <>
    <h1>SignUp</h1>
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit'>Login</button>
    </form>
    </>
  )
}

export default SignUp