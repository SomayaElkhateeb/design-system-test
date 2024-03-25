import { formatLikes, getImageUrl } from "src/app/utils";
import CompanyCard from "../../comp/CompanyCard";

const PlatformPage = ({ data }) => {
  return (
    <div>
      <p className="mb-3">{data.description}</p>
      {data.companies.map((company) => (
        <CompanyCard
          key={company.id}
          imageUrl={getImageUrl("companies/t-terl.svg")}
          subtitle={company.industry}
          name={company.name}
          id={formatLikes(company.likes)}
        />
      ))}
    </div>
  );
};

export default PlatformPage;
