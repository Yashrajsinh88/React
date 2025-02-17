import React from 'react'

const Create = () => {
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">Brand Name</label>
      <input type="text"  placeholder="Enter brand name"/>
      <label htmlFor="">Category</label>
      <input type="email" placeholder="Enter category"/>
      <label htmlFor="">Price</label>
      <input type="number" placeholder="Enter price"/>

      <button>Submit</button>
    </form>
    </>
  )
}

export default Create