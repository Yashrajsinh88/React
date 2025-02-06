import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router';

const Home = () => {

  const [productData , setProductData] = useState([]);

useEffect(()=>{
  getProductData();
},[])

async  function getProductData() {
    let getData =await axios.get("http://localhost:5000/products");
    console.log(getData);
    setProductData(getData.data)
    
  }

  return (
    <>
    <Link to={"/addData"}><button>Create product</button></Link>
      <h1>Product list</h1>
      <table border={""}>
        <thead>
        <tr>
          <th>id</th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Price</th>
          {/* <th>Action</th> */}
        </tr>
        </thead>

          {productData && productData.map((element) => {
            return(
            <tbody>
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.productName}</td>
                <td>{element.category}</td>
                <td>{element.price}</td>
              </tr>
            </tbody>
            )
          })}
  
      </table>
    
    </>
  )
}

export default Home