import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CustomerCard.css";
import { useNavigate } from "react-router-dom";

type IProps = {
  logo: string;
  title: string;
  loanAmount: string;
  interestRate: string;
  minCreditScore: string;
  termLength: string;
  processingFee: string;
  approved?: string;
  rejected?: string;
};
type IData = {
  loan: IProps;
  tabType: string;
};

type ILoan = {
  logo: string;
  title: string;
  loanAmount: string;
  interestRate: string;
  minCreditScore: string;
  termLength: string;
  processingFee: string;
  approved: string;
  rejected: string;
  tabType: string;
  email?: string;
};

function CustomerCard(props: IData) {
  const navigate = useNavigate();
  const [newLoanData, setNewLoanData] = useState<ILoan[]>([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/appliedNewLoans`)
      .then((response) => {
        setNewLoanData(
          response.data.filter(
            (response: ILoan) =>
              response.email === localStorage.getItem("email") &&
              response.title === props.loan.title
          )
        );
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
// console.log(newLoanData)
  const handleApply = () => {
      // console.log(newLoanData, 'len');
      console.log(props.loan);
      newLoanData.length === 1
        ? alert("You have already applied for this loan")
        : navigate("/customer-dash/all-loans/apply", {
          state: {
            loan: props.loan,
          }
        });
  };
  const check = () => {
    if (props.tabType === "all") {
      return <button className="apply-btn" onClick={handleApply}>Apply</button>;
    } else if (props.loan.approved) {
      return <button className="btn-approved">Loan Approved</button>;
    } else if (props.loan.rejected) {
      return <button className="btn-rejected">Loan Rejected</button>;
    } else {
      return <button className="btn-pending">Loan Pending</button>;
    }
  };
  return (
    <div id="customer-card">
      <div className="card-container">
        <div className="header">
          <h1>{props.loan.title}</h1>
          <img src={props.loan.logo} alt="logo" />
        </div>
        <div className="details">
          <p>Loan Amount: {props.loan.loanAmount}</p>
          <p>Interest Rate: {props.loan.interestRate}</p>
          <p>Min Credit Score: {props.loan.minCreditScore}</p>
          <p>Term Length: {props.loan.termLength}</p>
          <p>Processing Fee: {props.loan.processingFee}</p>
        </div>
        <div>{check()}</div>
      </div>
    </div>
  );
}

export default CustomerCard;
