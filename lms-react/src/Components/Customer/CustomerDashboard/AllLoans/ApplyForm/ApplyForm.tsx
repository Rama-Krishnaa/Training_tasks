import React, { useState } from "react";
import "../ApplyForm/ApplyForm.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
type IFormData = {
  currentEmployer: string;
  designation: string;
  salary: string;
  loanAmount: string;
};

function ApplyForm() {
  const [formData, setFormData] = useState<IFormData>({
    currentEmployer: "",
    designation: "",
    salary: "",
    loanAmount: "",
  });
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isActive1, setIsActive1] = useState<boolean>(false);
  const [isActive2, setIsActive2] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const res = useLocation();
  const data = res.state.loan;
  //   console.log(res.state.loan);

  const onApplySuccess = () => {
    navigate("/customer-dash/applied-loans");
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted");
    axios
      .post(` http://localhost:4000/appliedNewLoans`, {
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        title: data.title,
        logo: data.logo,
        interestRate: data.interestRate,
        minCreditScore: data.minCreditScore,
        termLenth: data.termLength,
        processingFee: data.processingFee,
        salary: formData.salary,
        currentEmployer: formData.currentEmployer,
        designation: formData.designation,
        loanAmount: formData.loanAmount,
        rejected: false,
        approved: false,
      })
      .then((response) => {
        console.log(response.data);
        // console.log(formData);
        onApplySuccess();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div id="apply-form">
      <h1>Application Form</h1>
      <div className="form">
        <div className="step-1">
          <div className="mini-sec">
            <p>(1) First, let's make sure your profile is up to date</p>
            <button
              className="caret-down"
              onClick={() => setIsActive(!isActive)}
            >
              {isActive ? "˄" : "˅"}
            </button>
          </div>
          {isActive ? (
            <div className="sec-1">
              Current Employer
              <input
                type="text"
                onChange={(e) => handleChange(e)}
                name="currentEmployer"
                required
              />
              Designation
              <input
                type="text"
                onChange={(e) => handleChange(e)}
                name="designation"
                required
              />
              Salary
              <input
                type="text"
                onChange={(e) => handleChange(e)}
                name="salary"
                required
              />
            </div>
          ) : null}
        </div>
        <div className="step-2">
          <div className="mini-sec">
            <p>(2) Get your rate</p>
            <button
              className="caret-down"
              onClick={() => setIsActive1(!isActive1)}
            >
              {isActive1 ? "˄" : "˅"}
            </button>
          </div>
          {isActive1 ? (
            <div className="sec-2">
              <p>
                <span>Loan Provider: {data.title}</span>
                <span>Term Length: {data.termLength}</span>
                <span>Min Credit Score: {data.minCreditScore}</span>
              </p>
              Enter the loan amount you want to apply:
              <input type="text" onChange={(e) => handleChange(e)} required />
              <button>Interest Rate: 13.8%</button>
            </div>
          ) : null}
        </div>
        <div className="step-3">
          <div className="mini-sec">
            <p>(3) Submit</p>
            <button
              className="caret-down"
              onClick={() => setIsActive2(!isActive2)}
            >
              {isActive2 ? "˄" : "˅"}
            </button>
          </div>
          {isActive2 ? (
            <div className="sec-3">
              <button onClick={handleSubmit}>Submit</button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ApplyForm;
