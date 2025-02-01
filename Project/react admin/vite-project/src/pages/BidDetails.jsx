import { useParams, useNavigate } from "react-router-dom";

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
    </div>
  );
};

export default BidDetails;
