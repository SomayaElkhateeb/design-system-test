// Muhammed Abdelhakeem
import React from "react";
import { Link, useParams } from "react-router-dom";

const HorizontalTabsLink = ({ tabs }) => {
  const { tabName } = useParams();
  if (!tabs) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="bg-white border-b border-border-color ">
        <ul className="flex flex-wrap font-medium text-center  ml-[18px]">
          {tabs.map((tab) => (
            <li key={tab} className="mr-2">
              <Link
                className={`inline-block p-2 rounded-t-lg  ${
                  tabName === tab
                    ? "text-primary title border-b-2 border-primary"
                    : "text-hint paragraph hover:text-primary"
                }`}
                to={`/marketing/${tab}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HorizontalTabsLink;
