import { VerticalTabs } from "src/app/components/optimized";
import { useFacebookSetup } from "./facebook/useFacebookSetup";

const PlatformSetup = ({ platform }) => {
  const { platformTitle, tabs } = useFacebookSetup(platform);
  switch (platform) {
    case "facebook":
      return (
        <section>
          <div className="bg-white text-black p-4">
            <h3 className="text-xl font-medium">{platformTitle}</h3>
          </div>
          <div className="bg-[#F9FAFC] p-4 flex flex-col ">
            <VerticalTabs tabs={tabs} />
          </div>
        </section>
      );
    default:
      break;
  }
  return <section>All</section>;
};

export default PlatformSetup;
