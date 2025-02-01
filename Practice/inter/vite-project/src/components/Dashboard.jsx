import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const storedBids = JSON.parse(localStorage.getItem("bids")) || [];
    setBids(storedBids);
  }, []);

  const addBid = (newBid) => {
    const updatedBids = [...bids, newBid];
    setBids(updatedBids);
    localStorage.setItem("bids", JSON.stringify(updatedBids));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Bid Dashboard</h1>
      <button
        onClick={() =>
          addBid({ id: Date.now(), name: "New Bid", status: "Live" })
        }
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Add Bid
      </button>
      <ul className="mt-4">
        {bids.map((bid) => (
          <li key={bid.id} className="p-2 border-b">
            {bid.name} - {bid.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
