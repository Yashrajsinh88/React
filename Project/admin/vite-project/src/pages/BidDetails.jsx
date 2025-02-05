import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const BidDetails = () => {
  const { bidId } = useParams();
  const navigate = useNavigate();

  // Static data for a bid
  const bid = {
    id: bidId,
    createdBy: "Sunder Yadav",
    startDate: "14/02/2024",
    timeRemaining: "7hr 20min",
    from: "Gurgaon",
    to: "Mumbai",
    vehicleType: "Truck, 20ft Close Body",
    weight: "4000 Kg",
    assignedStaff: "Mohit",
    phone: "+91 33242344242",
    targetPrice: "Rs 5000",
    biddersCount: 54,
    remarks: "Urgent Delivery",
  };

  // State for response form
  const [response, setResponse] = useState({
    bidAmount: "",
    remarks: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setResponse({ ...response, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store response in localStorage
    let storedResponses = JSON.parse(localStorage.getItem("bidResponses")) || [];
    storedResponses.push({ bidId, ...response });
    localStorage.setItem("bidResponses", JSON.stringify(storedResponses));

    alert("Response submitted successfully!");
    setResponse({ bidAmount: "", remarks: "" });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <button onClick={() => navigate("/dashboard")} className="mb-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
        Back to Dashboard
      </button>

      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Bid Details - {bid.id}</h1>
        <p><strong>Created By:</strong> {bid.createdBy}</p>
        <p><strong>Start Date:</strong> {bid.startDate}</p>
        <p><strong>Time Remaining:</strong> {bid.timeRemaining}</p>
        <p><strong>From:</strong> {bid.from}</p>
        <p><strong>To:</strong> {bid.to}</p>
        <p><strong>Vehicle Type:</strong> {bid.vehicleType}</p>
        <p><strong>Weight:</strong> {bid.weight}</p>
        <p><strong>Assigned Staff:</strong> {bid.assignedStaff}</p>
        <p><strong>Phone:</strong> {bid.phone}</p>
        <p><strong>Target Price:</strong> {bid.targetPrice}</p>
        <p><strong>Bidders Count:</strong> {bid.biddersCount}</p>
        <p><strong>Remarks:</strong> {bid.remarks}</p>
      </div>

      {/* Response Form */}
      <div className="bg-white p-6 rounded shadow mt-6">
        <h2 className="text-xl font-bold mb-4">Submit Your Response</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium">Your Bid Amount (Rs)</label>
            <input
              type="number"
              name="bidAmount"
              value={response.bidAmount}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Remarks</label>
            <textarea
              name="remarks"
              value={response.remarks}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit Response
          </button>
        </form>
      </div>
    </div>
  );
};

export default BidDetails;
