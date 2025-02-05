import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bidData } from "../data/bids";
import Sidebar from "../components/Sidebar";

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
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Live Bids</h2>
      <table className="w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-3 border">Bid No</th>
            <th className="p-3 border">Created By</th>
            <th className="p-3 border">Start Date</th>
            <th className="p-3 border">From</th>
            <th className="p-3 border">To</th>
            <th className="p-3 border">Vehicle Type</th>
            <th className="p-3 border">Weight</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {bidData.map((bid) => (
            <tr key={bid.id} className="text-center border">
              <td className="p-3">{bid.id}</td>
              <td className="p-3">{bid.createdBy}</td>
              <td className="p-3">{bid.startDate}</td>
              <td className="p-3">{bid.from}</td>
              <td className="p-3">{bid.to}</td>
              <td className="p-3">{bid.vehicleType}</td>
              <td className="p-3">{bid.weight} Kg</td>
              <td className="p-3">
              <td className="p-3">{responseCount(bid.id)}</td>
                <button
                  onClick={() => handleRespond(bid.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                  Respond
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
<button
  onClick={handleLogout}
  className="absolute top-5 right-5 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
>
  Logout
</button>

<div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-5">
        <h1 className="text-2xl font-semibold">Live Bids</h1>

        {/* Content goes here */}
        <div className="bg-white p-5 rounded-lg shadow mt-5">
          <p>Bid Data Coming Soon...</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
