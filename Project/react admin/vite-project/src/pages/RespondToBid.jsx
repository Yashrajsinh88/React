import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const RespondToBid = () => {
  const { bidId } = useParams();
  const navigate = useNavigate();
  const [price, setPrice] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const responses = JSON.parse(localStorage.getItem("responses")) || [];
    responses.push({
      bidId,
      price,
      comments,
      user: JSON.parse(localStorage.getItem("loggedInUser"))?.email || "Unknown",
    });

    localStorage.setItem("responses", JSON.stringify(responses));
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Respond to Bid #{bidId}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Price"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <textarea
            placeholder="Comments (Optional)"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
            Submit Response
          </button>
        </form>
      </div>
    </div>
  );
};

export default RespondToBid;
