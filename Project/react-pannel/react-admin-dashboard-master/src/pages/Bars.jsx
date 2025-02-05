
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';



const Bars = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        
        if (!loggedInUser) {
          navigate("/"); // Redirect to home page if not logged in
        }
      }, [navigate]);
  
	const handleRespond = (bidId) => {
	  navigate(`/respond/${bidId}`);
	};
  
	const responseCount = (bidId) => {
	  const responses = JSON.parse(localStorage.getItem("responses")) || [];
	  return responses.filter((r) => r.bidId === bidId.toString()).length;
	};
  
	const handleLogout = () => {
	  localStorage.removeItem("loggedInUser");
	  navigate("/");
	};
  return (
    <div className='flex max-sm:hidden  bg-gray-900 text-gray-100 overflow-hidden'>
    <div className="w-64 h-screen   bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80 z-40 text-white p-6 ">
    <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
    <ul>
      <li className="mb-4">
        <button
          onClick={() => navigate("/overView")}
          className="text-white hover:bg-blue-700 px-4 py-2 rounded w-full text-left"
        >
         Live Bids
        </button>
      </li>
      <li className="mb-4">
        <button
          onClick={() => navigate("/products")}
          className="text-white hover:bg-blue-700 px-4 py-2 rounded w-full text-left"
        >
          Products
        </button>
      </li>
      <li className="mb-4">
        <button
          onClick={() => navigate("/orders")}
          className="text-white hover:bg-blue-700 px-4 py-2 rounded w-full text-left"
        >
          Order
        </button>
      </li>  <li className="mb-4">
        <button
          onClick={() => navigate("/sales")}
          className="text-white hover:bg-blue-700 px-4 py-2 rounded w-full text-left"
        >
          Sales
        </button>
      </li>   <li className="mb-4">
        <button
          onClick={() => navigate("/users")}
          className="text-white hover:bg-blue-700 px-4 py-2 rounded w-full text-left"
        >
         User 
        </button>
      </li> 
      <li className="mb-4">
        <button
          onClick={() => navigate("/analytics")}
          className="text-white hover:bg-blue-700 px-4 py-2 rounded w-full text-left"
        >
         analytix
        </button>
      </li> 
      <li className="mb-4">
        <button
          onClick={() => navigate("/settings")}
          className="text-white hover:bg-blue-700 px-4 py-2 rounded w-full text-left"
        >
         Setting
        </button>
      </li> 
      {/* Add more sidebar links here */}
    </ul>
  </div>
  </div>
  )
}

export default Bars