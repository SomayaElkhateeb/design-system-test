import { formatLikes, getImageUrl } from "src/app/utils";
import PartnerCard from "../../comp/PartnerCard";

const FacebookPage = ({ data }) => {
  return (
    <div>
      <p className="mb-3">{data.description}</p>
      {data.companies.map((company) => (
        <PartnerCard
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

export default FacebookPage;
