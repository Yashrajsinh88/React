import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './components/Home'

const App = () => {
  return (
    <>
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>SignIn</Link>
          </li>
          <li>
            <Link to={"/signup"}>SignUp</Link>
          </li>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Routes>
       <Route path='/' element={<SignIn/>}/>
       <Route path='/signup' element={<SignUp/>}/>
       <Route path='/home' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App