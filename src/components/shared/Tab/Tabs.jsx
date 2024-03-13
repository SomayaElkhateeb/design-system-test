// Muhammed Abdelhakeem

import React, { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState("allProducts"); // Set the default active tab

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const content = {
    allProducts: (
      <div>
        {/* Content for all products */}
        <p>List of all products.</p>
      </div>
    ),
    categories: (
      <div>
        {/* Content for categories */}
        <p>List of categories.</p>
      </div>
    ),
    brands: (
      <div>
        {/* Content for brands */}
        <p>List of brands.</p>
      </div>
    ),
    other1: (
      <div>
        {/* Content for other tab 1 */}
        <p>Content of other tab 1.</p>
      </div>
    ),
    other2: (
      <div>
        {/* Content for other tab 2 */}
        <p>Content of other tab 2.</p>
      </div>
    ),
    other3: (
      <div>
        {/* Content for other tab 3 */}
        <p>Content of other tab 3.</p>
      </div>
    ),
  };

  return (
    <div className="">
      <ul className="flex flex-wrap -mb-px font-medium text-center border-b ">
        {Object.keys(content).map((tab) => (
          <li key={tab} className="mr-2">
            <button
              className={`inline-block p-4 rounded-t-lg  ${
                activeTab === tab
                  ? "text-blue-600  border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => handleClick(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          </li>
        ))}
      </ul>
      <div className="p-4">{content[activeTab]}</div>
    </div>
  );
}

export default Tabs;
