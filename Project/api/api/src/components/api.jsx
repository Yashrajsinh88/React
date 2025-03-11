import { useEffect, useState } from "react";
 
const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function get() {
    setLoading(true);
    let response = await fetch("https://dummyjson.com/products");  
    let result = await response.json();
    setData(result.products);
    
    console.log(result.products);
    
    setLoading(false);
  }

  useEffect(() => {
    get();
    return () => {
      console.log("Clean up");
    };
  }, []);
  
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <h1>Product Store</h1>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Product List */}
      <div className="products">
        {loading && <h1 className="loading">Loading...</h1>}
        {data &&
          data.map((element) => (
            <div className="product-card" key={element.id}>
              <img src={element.thumbnail} alt={element.title} /> x
              <h1>{element.title}</h1>
              <p>Price: ${element.price}</p>
            </div>
          ))}
      </div>

      {/* Footer */}
      <div className="footer">
        <p>&copy; 2025 Product Store. All rights reserved.</p>
      </div>
    </>
  );
};

export default Product;
