import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AllApplications from "./AllApplications";
import ApprovedApplications from "./ApprovedApplications";
import PendingApplications from "./PendingApplications";
import RejectedApplications from "./RejectedApplications";
import Logout from "../../Logout/Logout";

function ManagerDashboard() {
  const navigate = useNavigate();
  return (
    <div id="manager-dash">
      <header>
        <h1>Welcome {localStorage.getItem("name")}!</h1>
        <Logout />
      </header>
      <div className="links">
        <button onClick={()=> navigate('/manager-dash/all-applications')}>All Applications</button>
        <button onClick={()=> navigate('/manager-dash/pending-applications')}>Pending Applications</button>
        <button onClick={()=> navigate('/manager-dash/approved-applications')}>Approved Applications</button>
        <button onClick={()=> navigate('/manager-dash/rejected-applications')}>Rejected Applications</button>

      </div>
      <Routes>
        <Route path="/" element={<AllApplications />}></Route>
        <Route path="all-applications" element={<AllApplications />}></Route>
        <Route
          path="pending-applications"
          element={<PendingApplications />}
        ></Route>
        <Route
          path="approved-applications"
          element={<ApprovedApplications />}
        ></Route>
        <Route
          path="rejected-applications"
          element={<RejectedApplications />}
        ></Route>
      </Routes>
    </div>
  );
}

export default ManagerDashboard;
