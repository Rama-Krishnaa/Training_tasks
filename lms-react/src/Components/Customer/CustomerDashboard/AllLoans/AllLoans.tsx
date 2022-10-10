import React, { useEffect, useState } from "react";
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
  tabType: string;
};

function AllLoans() {
  const [loanData, setLoanData] = useState<ILoan[]>([]);
  const [tabType, setTabType] = useState<string>("all");
  useEffect(() => {
    axios
      .get(`http://localhost:4000/loans`)
      .then((response) => {
        setLoanData(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="all-loans">
      <h1>All Loans</h1>
      {loanData.map((loan: ILoan, index: number) => (
        <CustomerCard key={index} loan={loan} tabType={tabType} />
      ))}
      ;
    </div>
  );
}

export default AllLoans;
