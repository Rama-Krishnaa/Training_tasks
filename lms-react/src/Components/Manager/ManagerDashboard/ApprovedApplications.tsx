import axios from "axios";
import React, { useEffect, useState } from "react";
import ManagerCard from "../ManagerCard/ManagerCard";

type IApplication = {
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

function ApprovedApplications() {
  const [approvedApplication, setApprovedApplication] = useState<
    IApplication[]
  >([]);

  const applications = () => {
    axios
      .get(`http://localhost:4000/appliedNewLoans`)
      .then((response) => {
        setApprovedApplication(
          response.data.filter(
            (application: IApplication) => application.approved
          )
        );
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    applications();
  }, []);
  return (
    <div>
      <h1>Approved Applications</h1>
      {approvedApplication.map((application: IApplication, index: number) => (
        <ManagerCard
          key={index}
          application={application}
          applications={applications}
        />
      ))}
    </div>
  );
}

export default ApprovedApplications;
