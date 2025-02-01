import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  // Static bid data
  const bids = [
    {
      id: "BID001",
      createdBy: "Sunder Yadav",
      startDate: "14/02/2024",
      timeRemaining: "7hr 20min",
      from: "Gurgaon",
      to: "Mumbai",
      vehicleType: "Truck, 20ft Close Body",
      weight: "4000 Kg",
      assignedStaff: "Mohit",
    },
    {
      id: "BID002",
      createdBy: "Rajesh Kumar",
      startDate: "15/02/2024",
      timeRemaining: "6hr 30min",
      from: "Delhi",
      to: "Pune",
      vehicleType: "Truck, 22ft Open Body",
      weight: "5000 Kg",
      assignedStaff: "Rahul",
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Live Bids</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Logout
        </button>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border">Bid No</th>
              <th className="p-3 border">Created By</th>
              <th className="p-3 border">Start Date</th>
              <th className="p-3 border">Time Remaining</th>
              <th className="p-3 border">From</th>
              <th className="p-3 border">To</th>
              <th className="p-3 border">Vehicle Type</th>
              <th className="p-3 border">Weight</th>
              <th className="p-3 border">Assigned Staff</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid) => (
              <tr key={bid.id} className="text-center">
                <td className="p-3 border">{bid.id}</td>
                <td className="p-3 border">{bid.createdBy}</td>
                <td className="p-3 border">{bid.startDate}</td>
                <td className="p-3 border">{bid.timeRemaining}</td>
                <td className="p-3 border">{bid.from}</td>
                <td className="p-3 border">{bid.to}</td>
                <td className="p-3 border">{bid.vehicleType}</td>
                <td className="p-3 border">{bid.weight}</td>
                <td className="p-3 border">{bid.assignedStaff}</td>
                <td className="p-3 border">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => navigate(`/bid/${bid.id}`)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
