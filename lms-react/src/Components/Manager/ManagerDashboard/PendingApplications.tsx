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

function PendingApplications() {
  const [pendingApplication, setPendingApplication] = useState<IApplication[]>(
    []
  );
  const applications = () => {
    axios
      .get(`http://localhost:4000/appliedNewLoans`)
      .then((response) => {
        // console.log(response.data);
        setPendingApplication(
          response.data.filter(
            (application: IApplication) =>
              !application.approved && !application.rejected
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
      <h1>Pending Applications</h1>
      {pendingApplication.map((application: IApplication, index: number) => (
        <ManagerCard
          key={index}
          application={application}
          tabType="pending"
          id={application.id}
          applications={applications}
        />
      ))}
    </div>
  );
}

export default PendingApplications;
