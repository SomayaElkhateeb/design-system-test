import { getImageUrl } from "src/app/utils";
import PartnerCard from "../../comp/PartnerCard";

const FBBusinessManager = ({ data }) => {
  return (
    <div>
      <p className="mb-3">{data.description}</p>
      {data.companies.map((company) => (
        <PartnerCard
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

export default FBBusinessManager;
