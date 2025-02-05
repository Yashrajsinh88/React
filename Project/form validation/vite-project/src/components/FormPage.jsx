import React, { useState } from 'react'

const FormPage = () => {
   
  const [userName , setUserName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [error , setError] = useState("")
  const [dataShow , setdataShow] = useState("");

  function handleSubmit(e) {
  e.preventDefault();
  if (validation()) {
    let obj = {};
    obj.userName = userName;
    obj.email = email;
    obj.password = password;
    setdataShow(obj);
    setEmail("");
    setUserName("");
    setPassword("");
  }
  }


  function validation() {
    let obj = {};
  
    let valid = true;
    if (!userName.trim()) {
      obj.userName = "please enter your user Name";
      valid = false;
    }
    if (!email.trim()) {
      obj.email = "please enter your email";
      valid = false;
    }
    if (!password.trim()) {
      obj.password = "please enter your password";
      valid = false;
    }
    setError(obj);
    return valid;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">

    <div className="bg-white p-16 rounded shadow-2xl w-2/3 ">
    
      <form className="space-y-5" onSubmit={handleSubmit}>
  
        <div>
          <label className="block mb-1 font-bold text-gray-500">Name</label>
          <input id="userName" value={userName} type="text" onChange={(e) => setUserName(e.target.value) } className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
          <p style={{ color: "red" }}>{error && error.userName}</p>
        </div>
  
        <div>
          <label className="block mb-1 font-bold text-gray-500">Email</label>
          <input id="email" value={email} type="email" onChange={(e) => setEmail(e.target.value) }  className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
          <p style={{ color: "red" }}>{error && error.email}</p>
        </div>
  
        <div>
          <label className="block mb-1 font-bold text-gray-500">Password</label>      
          <input id="password" value={password} type="password" onChange={(e) => setPassword(e.target.value) }  className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
          <p style={{ color: "red" }}>{error && error.password}</p>
        </div>

        <button className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">submit</button>
      </form>  


        {dataShow && <p> {dataShow.userName}</p>}
        {dataShow && <p> {dataShow.email}</p>}
        {dataShow && <p> {dataShow.password}</p>}
    </div>
  
  </div>
  )
}

export default FormPage