import { VerticalTabs } from "src/app/components/optimized";
import { useFacebookSetup } from "./facebook/useFacebookSetup";
import { useGooglsSetup } from "./google/useGooglsSetup";

const PlatformSetup = ({ platform }) => {
  switch (platform) {
    case "facebook":
      const { facebook_title, facebook_tabs } = useFacebookSetup(platform);
      return (
        <section>
          <div className="bg-white text-black p-4">
            <h3 className="text-xl font-medium">{facebook_title}</h3>
          </div>
          <div className="bg-[#F9FAFC] p-4 flex flex-col ">
            <VerticalTabs tabs={facebook_tabs} />
          </div>
        </section>
      );
    case "google":
      const { google_title, google_tabs } = useGooglsSetup(platform);
      return (
        <section>
          <div className="bg-white text-black p-4">
            <h3 className="text-xl font-medium">{google_title}</h3>
          </div>
          <div className="bg-[#F9FAFC] p-4 flex flex-col ">
            <VerticalTabs tabs={google_tabs} />
          </div>
        </section>
      );
    default:
      break;
  }
  return <section>All</section>;
};

export default PlatformSetup;
