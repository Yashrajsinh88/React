import React from 'react'

const Create = () => {
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="">ProductName</label>
        <input type="text" /><br /><br />

        <label htmlFor="">Catagory</label>
        <input type="text" /><br /><br />

        <label htmlFor="">Price</label>
        <input type="number" /><br /><br />

        <button>submit</button>
    </form>
    </>
  )
}

export default Create