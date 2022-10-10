import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomerCard from "../../CustomerCard/CustomerCard";

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
function AppliedLoans() {
  const [loanData, setLoanData] = useState<ILoan[]>([]);
  const [tabType, setTabType] = useState<string>("applied");
  useEffect(() => {
    axios
      .get(`http://localhost:4000/appliedNewLoans`)
      .then((response) => {
        setLoanData(response.data.filter((response: ILoan) => response.email === localStorage.getItem('email')));
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Applied Loans</h1>
      {loanData.map((loan: ILoan, index: number) => (
        <CustomerCard key={index} loan={loan} tabType={tabType}/>
      ))}
      ;
    </div>
  );
}

export default AppliedLoans;
