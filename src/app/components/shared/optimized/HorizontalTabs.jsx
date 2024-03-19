// Muhammed Abdelhakeem
import React from "react";

const HorizontalTabs = ({ tabs, activeTab, setActiveTab }) => {

  if (!tabs) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="bg-white border-b border-border-color ">
        <ul className="flex flex-wrap font-medium text-center  ml-[18px]">
          {Object.keys(tabs)?.map((tab) => (
            <li key={tab} className="mr-2">
              <button
                className={`inline-block p-2 rounded-t-lg  ${
                  activeTab === tab
                    ? "text-primary title border-b-2 border-primary"
                    : "text-hint paragraph hover:text-primary"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>{tabs[activeTab]}</div>
    </div>
  );

};

export default HorizontalTabs;
