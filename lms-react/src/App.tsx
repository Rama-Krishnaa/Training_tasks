import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import CustomerDashboard from "./Components/Customer/CustomerDashboard/CustomerDashboard";
import ManagerDashboard from "./Components/Manager/ManagerDashboard/ManagerDashboard";
import ApplyForm from "./Components/Customer/CustomerDashboard/AllLoans/ApplyForm/ApplyForm";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/customer-dash/*"
            element={<CustomerDashboard />}
          ></Route>
          <Route path="/manager-dash/*" element={<ManagerDashboard />}></Route>
          <Route path="customer-dash/all-loans/apply" element={<ApplyForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
