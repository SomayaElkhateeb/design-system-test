import { useState } from "react";

const VerticalTabsSimple = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleNext = () => {
    if (currentTab < tabs.length - 1) {
      setCurrentTab(currentTab + 1);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-4">
        {tabs.map((tab, index) => (
          <div key={index} className="relative">
            <div className="flex items-center">
              <div
                className={`z-20 w-8 h-8 rounded-full flex justify-center items-center ${
                  index <= currentTab
                    ? "bg-blue-600 text-white" // Done
                    : index - 1 === currentTab
                    ? "border-2 border-blue-500 bg-white" // Active
                    : "bg-white border" // Not Done
                }`}
              >
                {index === currentTab ? (
                  <span className="text-sm">&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>

              {/* Line between tabs */}
              {index < tabs.length - 1 && (
                <span
                  className={`h-full w-0.5 absolute left-[15px] top-4 ${
                    index === currentTab
                      ? "bg-blue-600" // Blue line for active tab
                      : "bg-gray-300" // Gray line for inactive tab
                  }`}
                ></span>
              )}

              <div className="flex-grow ml-2 text-sm">{tab.title}</div>
            </div>
            {index === currentTab && (
              <div className="ml-8">
                <div>{tab.content}</div>
                <button
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded disabled:opacity-50 w-24"
                  onClick={handleNext}
                  disabled={currentTab === tabs.length - 1}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTabsSimple;
