import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router';

const Home = () => {

  const [productData , setProductData] = useState([]);

  async function handleDelete(id) {
    try {
      // Delete request
      await axios.delete(`http://localhost:5000/products/${id}`);
      
      // Successfully deleted, now remove from state
      setProductData(prevData => prevData.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }
  
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
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
          {productData && productData.map((element) => {
            return(
            
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.productName}</td>
                <td>{element.category}</td>
                <td>{element.price}</td>
                <td><button onClick={()=>{handleDelete(element.id)}}>Delete</button>{" "}
                    <button>Read</button>{" "}
                    <button>Edit</button>
                </td>
              </tr>
            )
          })}
          </tbody>
      </table>
    
    </>
  )
}

export default Home