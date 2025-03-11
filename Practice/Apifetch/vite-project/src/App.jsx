import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [data , setData] = useState([]);

 async function get(){

    const responce =await axios.get("https://fakestoreapi.com/products");

    setData(responce.data);
    console.log(responce.data);

  }

  useEffect(()=> {
    get()
  }, [])
  return (
    <>
     {data && data.map((item)=> {
     return <div key={item.id}>
        <img src={item.image} alt="" />
      </div>
     })}
    </>
  )
}

export default App