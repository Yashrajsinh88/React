import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Check if user already exists
    if (users.some(user => user.email === formData.email)) {
      alert("User already exists! Please login.");
      return;
    }

    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! Please log in.");
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleSignup}>
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <input type="text" name="username" placeholder="Username" className="w-full p-2 mb-4 border rounded" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" onChange={handleChange} required />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Sign Up</button>
        <p className="mt-4 text-center">Already have an account? <a href="/" className="text-blue-500">Login</a></p>
      </form>
    </div>
  );
};

export default Signup;
