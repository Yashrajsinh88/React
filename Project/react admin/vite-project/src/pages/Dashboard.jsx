import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bidData } from "../data/bids";

const Dashboard = () => {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
    navigate("/");
    return null;
  }

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
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-blue-600 text-white p-6">
        {/* <h2 className="text-2xl font-semibold mb-6">Dashboard</h2> */}
        <img src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-house-logo-designs-inspiration-isolated-on-white-background-png-image_5045077.jpg" className="text-xl mix-blend-color-burn size-40" alt="" />
        <ul>
          <li className="mb-4">
            <button
              onClick={() => navigate("/")}
              className="text-white hover:bg-blue-700 px-4 py-2 rounded w-full text-left"
            >
              Home
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => navigate("/bids")}
              className="text-white hover:bg-blue-700 px-4 py-2 rounded w-full text-left"
            >
              Live Bids
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => navigate("/settings")}
              className="text-white hover:bg-blue-700 px-4 py-2 rounded w-full text-left"
            >
              Settings
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => navigate("/profile")}
              className="text-white hover:bg-blue-700 px-4 py-2 rounded w-full text-left"
            >
              Profile
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => navigate("/contact")}
              className="text-white hover:bg-blue-700 px-4 py-2 rounded w-full text-left"
            >
              Contact Us
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={handleLogout}
              className="text-white hover:bg-red-700 px-4 py-2 rounded w-full text-left"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Live Bids</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg text-sm md:text-base">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-2 md:p-3 border">Bid No</th>
                <th className="p-2 md:p-3 border">Created By</th>
                <th className="p-2 md:p-3 border">Start Date</th>
                <th className="p-2 md:p-3 border">From</th>
                <th className="p-2 md:p-3 border">To</th>
                <th className="p-2 md:p-3 border">Vehicle Type</th>
                <th className="p-2 md:p-3 border">Weight</th>
                <th className="p-2 md:p-3 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {bidData.map((bid) => (
                <tr key={bid.id} className="text-center border">
                  <td className="p-2 md:p-3">{bid.id}</td>
                  <td className="p-2 md:p-3">{bid.createdBy}</td>
                  <td className="p-2 md:p-3">{bid.startDate}</td>
                  <td className="p-2 md:p-3">{bid.from}</td>
                  <td className="p-2 md:p-3">{bid.to}</td>
                  <td className="p-2 md:p-3">{bid.vehicleType}</td>
                  <td className="p-2 md:p-3">{bid.weight} Kg</td>
                  <td className="p-2 md:p-3">
                    <span>{responseCount(bid.id)}</span>
                    <button
                      onClick={() => handleRespond(bid.id)}
                      className="bg-green-500 text-white px-3 py-1 md:px-4 md:py-2 rounded hover:bg-green-600 transition ml-2"
                    >
                      Respond
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
