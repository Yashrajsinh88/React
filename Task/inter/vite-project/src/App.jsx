import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import UserManagement from "./UserManagement";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    localStorage.setItem("loggedInUser", username);
    onLogin(username);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Enter Username"
        className="border p-2 mb-4"
      />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

const SignupPage = ({ onSignup }) => {
  const [username, setUsername] = useState("");

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = { id: users.length + 1, name: username };
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    onSignup(username);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Signup</h1>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Enter Username"
        className="border p-2 mb-4"
      />
      <Button onClick={handleSignup}>Signup</Button>
    </div>
  );
};

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem("loggedInUser"));
  const [view, setView] = useState("dashboard");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const addUser = () => {
    const newUser = { id: users.length + 1, name: `User ${users.length + 1}` };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  if (!loggedInUser) {
    return <LoginPage onLogin={setLoggedInUser} />;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Admin Panel</h1>
      <div className="mb-4">
        <Button onClick={() => setView("dashboard")} className="mr-2">Dashboard</Button>
        <Button onClick={() => setView("userManagement")} className="mr-2">User Management</Button>
        <Button onClick={() => setView("settings")} className="mr-2">Settings</Button>
        <Button onClick={() => setLoggedInUser(null)} className="mr-2">Logout</Button>
      </div>
      <Card>
        <CardContent>
          {view === "dashboard" && <Dashboard users={users} />}
          {view === "userManagement" && <UserManagement users={users} addUser={addUser} />}
          {view === "settings" && <Settings />}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPanel;
