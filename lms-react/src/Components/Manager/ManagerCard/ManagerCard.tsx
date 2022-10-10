import React from "react";
import "../ManagerCard/ManagerCard.css";
import axios from "axios";
type IProps = {
  logo: string;
  name: string;
  gender: string;
  age: number;
  salary: string;
  minCreditScore: string;
  loanAmountToApply: string;
  interestRate: string;
  processingFee: string;
  termLength: string;
  appliedDate: string;
  approved?: boolean;
  rejected?: boolean;
  id: number;
};
type IData = {
  applications: () => void;
  id?: number;
  tabType?: string;
  application: IProps;
};

function ManagerCard(props: IData) {
  const handlApprove = () => {
    axios
      .patch(
        `http://localhost:4000/appliedNewLoans/${props.application.id}`,
        { approved: true },
        { headers: { "content-type": "application/json" } }
      )
      .then((response) => {
        // console.log(response.data);
        props.applications();
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const handlReject = () => {
    axios
      .patch(
        `http://localhost:4000/appliedNewLoans/${props.application.id}`,
        { rejected: true },
        { headers: { "content-type": "application/json" } }
      )
      .then((response) => {
        // console.log(response.data);
        props.applications();
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  const check = () => {
    if (props.tabType === "pending") {
      return (
        <div className="div-3">
          <button onClick={handlApprove} className="approveBtn">
            Approve
          </button>
          <button onClick={handlReject} className="rejectBtn">
            Reject
          </button>
        </div>
      );
    } else if (props.application.approved) {
      return (
        <button className="btn-approved div-3">Application Approved</button>
      );
    } else if (props.application.rejected) {
      return (
        <button className="btn-rejected div-3">Application Rejected</button>
      );
    } else {
      return <button className="btn-pending div-3">Application Pending</button>
    }
  };
  return (
    <div id="manager-card">
      <div className="card-container">
        <img src={props.application.logo} alt="logo" />
        <div className="div-1">
          <p>Applicant: {props.application.name}</p>
          <p>Gender: {props.application.gender}</p>
          <p>Age: {props.application.age}</p>
          <p>Salary: {props.application.salary}</p>
          <p>Credit Score: {props.application.minCreditScore}</p>
        </div>
        <div className="div-2">
          <p>Applied Amount: {props.application.loanAmountToApply}</p>
          <p>Interest Rate: {props.application.interestRate}</p>
          <p>Processing Fee: {props.application.processingFee}</p>
          <p>Term Length: {props.application.termLength}</p>
          <p>Applied Date: {props.application.appliedDate}</p>
        </div>
        <div>{check()}</div>
      </div>
    </div>
  );
}

export default ManagerCard;
