import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { use } from 'react'

function App() {

  const [data , setData] = useState(["item1 , item2, item3, item3, item4, item4, item5, item6"]);
  const [dataAbout , setDataAbout] = useState(["hello , world , yashrajsinh"]);

  return (
    <>

     <nav>
      <ul>
        <Link to={"/"}><li>Home</li></Link>
        <Link to={"/about"}><li>About</li></Link>
        <Link to={"/contact"}><li>Contact</li></Link>        
      </ul>
     </nav>

  <Routes>
    <Route path='/' element={<Home userData={data} setUserData={setData}/>}/>
    <Route path='/about' element={<About userAbout={dataAbout} setU serAbout={setDataAbout}/>}/>
    <Route path='/contact' element ={<Contact/>}/>
  </Routes>
    </>
  )
}

export default App
