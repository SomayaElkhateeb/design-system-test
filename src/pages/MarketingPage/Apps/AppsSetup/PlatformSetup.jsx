import { useState } from "react";
import { VerticalTabs } from "src/app/components/optimized";
import TikTokSetup from "./tiktok/TikTokSetup";
import { useFacebookSetup } from "./facebook/useFacebookSetup";
import { useTikTokSetup } from "./tiktok/useTikTokSetup";
import { useGoogleSetup } from "./google/useGoogleSetup";

const PlatformSetup = ({ platform }) => {
  const [tikTokConfirm, confirmTikTok] = useState(false);
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
        {platform === "tikTok" && !tikTokConfirm ? (
          <TikTokSetup platform={platform} confirmTikTok={confirmTikTok} />
        ) : (
          <VerticalTabs tabs={tabs} />
        )}
      </div>
    </section>
  );
};

export default PlatformSetup;
