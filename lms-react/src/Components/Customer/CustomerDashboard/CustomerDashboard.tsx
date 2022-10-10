import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Logout from "../../Logout/Logout";
import AllLoans from "./AllLoans/AllLoans";
import AppliedLoans from "./AppliedLoans/AppliedLoans";
import "../CustomerDashboard/CustomerDashboard.css";
import '../../Manager/ManagerDashboard/ManagerDashboard.css'

function CustomerDashboard() {
  const navigate = useNavigate();
  return (
    <div id="customer-dash">
      <header>
        <h1>Welcome {localStorage.getItem('name')}!</h1>
        <Logout />
      </header>
      <div className="links">
        <button onClick={()=>navigate('/customer-dash/all-loans')}>All Loans</button>
        <button onClick={()=>navigate('/customer-dash/applied-loans')}>Applied Loans</button>
      </div>
      <Routes>
        <Route path="/" element={<AllLoans/>}></Route>
        <Route path="all-loans" element={<AllLoans />}></Route>
        <Route path="applied-loans" element={<AppliedLoans />}></Route>
      </Routes>
    </div>
  );
}

export default CustomerDashboard;
