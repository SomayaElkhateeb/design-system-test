import React from "react";
import { getImageUrl } from "src/app/utils";
import CompanyCard from "../CompanyCard";

const BusinessManager = ({ data }) => {
  return (
    <div>
      <p className="mb-3">{data.description}</p>
      {data.companies.map((company) => (
        <CompanyCard
          key={company.id}
          imageUrl={getImageUrl("companies/t-terl.svg")}
          date={company.date}
          name={company.name}
          id={company.id}
        />
      ))}
    </div>
  );
};

export default BusinessManager;
