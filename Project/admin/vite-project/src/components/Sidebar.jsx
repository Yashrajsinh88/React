import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for toggle button

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-5 left-5 z-50 bg-gray-800 text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 p-5 space-y-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 transition-transform duration-300`}
      >
        {/* Logo */}
        <h2 className="text-2xl font-bold">LOGO</h2>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <Link to="/dashboard" className="block hover:text-blue-400">📌 Bid</Link>
          <Link to="/pod" className="block hover:text-blue-400">📦 POD</Link>
          <Link to="/vendor" className="block hover:text-blue-400">🚛 Vendor</Link>
          <Link to="/user" className="block hover:text-blue-400">👤 User</Link>
        </nav>

        {/* Bottom Links */}
        <div className="mt-auto space-y-3">
          <Link to="/settings" className="block hover:text-blue-400">⚙️ Settings</Link>
          <Link to="/profile" className="block hover:text-blue-400">👤 Profile</Link>
          <Link to="/contact" className="block hover:text-blue-400">📞 Contact Us</Link>
          <button
            onClick={() => {
              localStorage.removeItem("loggedInUser");
              window.location.href = "/";
            }}
            className="block text-red-400 hover:text-red-600"
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
