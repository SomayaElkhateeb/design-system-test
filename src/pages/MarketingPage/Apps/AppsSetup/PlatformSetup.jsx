import { VerticalTabs } from "src/app/components/optimized";
import { useFacebookSetup } from "./facebook/useFacebookSetup";
import { useGoogleSetup } from "./google/useGoogleSetup";
import TikTokSetup from "./tiktok/TikTokSetup";
import { useTikTokSetup } from "./tiktok/comp/useTikTokSetup";
import { useSearchParams } from "react-router-dom";

const PlatformSetup = ({ platform }) => {
  const [searchParams, _] = useSearchParams();
  const hasConfirmed = searchParams.get("add_channel") === "true";

  let title, tabs;

  switch (platform) {
    case "facebook":
      ({ facebook_title: title, facebook_tabs: tabs } =
        useFacebookSetup(platform));
      break;
    case "google":
      ({ google_title: title, google_tabs: tabs } = useGoogleSetup(platform));
      break;
    case "tikTok":
      ({ tikTok_title: title, tikTok_tabs: tabs } = useTikTokSetup(platform));
      break;
    default:
      return <section>All</section>;
  }

  return (
    <section>
      <div className="bg-white text-black p-4">
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <div className="bg-[#F9FAFC] p-4 flex flex-col">
        {platform === "tikTok" && !hasConfirmed ? (
          <TikTokSetup platform={platform} />
        ) : (
          <VerticalTabs tabs={tabs} />
        )}
      </div>
    </section>
  );
};

export default PlatformSetup;
