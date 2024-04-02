import { getImageUrl } from "src/app/utils";
import TikTokCard from "../TikTokCard";

const TikBusinessAccount = ({ data }) => {
  return (
    <div>
      <p className="border-b pb-5">{data.description}</p>
      <div>
        {data.partners.map((partner) => (
          <TikTokCard
            key={partner.id}
            partnerName={partner.name}
            partnerImage={getImageUrl("companies/t-terl.svg")}
            status={partner.is_connected}
            userId={partner.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TikBusinessAccount;
