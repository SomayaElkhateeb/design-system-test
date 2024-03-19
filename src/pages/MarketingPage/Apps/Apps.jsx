import React from "react";
import { socialApps } from "src/app/utils/constants";

import MostPopularList from "./comp/MostPopularList";
import SocialAppsWrapper from "./comp/SocialAppsWrapper";

const Apps = () => {
  return (
    <div className="p-5 gap-8 flex flex-col">
      <MostPopularList />

      <SocialAppsWrapper
        socialApps={socialApps}
        title="Recommended"
        linkTo="/"
      />

      <SocialAppsWrapper
        socialApps={socialApps}
        title="Reach more customers"
        linkTo="/"
      />
    </div>
  );
};

export default Apps;
