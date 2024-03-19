import React from "react";
import { Link } from "react-router-dom";
import AppsCard from "src/app/components/shared/MuHakeem/Comp/Card/AppsCard";
import { NextIcon } from "src/app/utils/icons";

const SocialAppsWrapper = ({ socialApps, title, linkTo }) => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <h2 className="font-semibold text-lg text-title">{title}</h2>
        <Link to={linkTo} className="flex items-center">
          <p className="font-semibold text-sm text-title">View All</p>
          <NextIcon className="fill-pri-dark" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {socialApps.slice(0, 4).map((app) => (
          <div key={app.id} className="col-span-1">
            <AppsCard {...app} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialAppsWrapper;
