import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === formData.email && user.password === formData.password);

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input type="email" name="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" onChange={handleChange} required />
        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Login</button>
        <p className="mt-4 text-center">Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a></p>
      </form>
    </div>
  );
};

export default Login;
