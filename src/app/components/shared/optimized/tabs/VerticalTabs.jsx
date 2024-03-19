import { useState } from "react";
import LayoutCard from "../card/LayoutCard";

const VerticalTabs = ({ tabs }) => {
  const { currentTab, handleTabClick, handleNext, handlePrev } =
    useVerticalTabs(0, tabs);

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-4">
        {tabs?.map((tab, index) => (
          <VTab
            key={index}
            index={index}
            currentTab={currentTab}
            title={tab.title}
            content={tab.content}
            onClick={handleTabClick}
            onNext={handleNext}
            onPrev={handlePrev}
            tabs={tabs}
          />
        ))}
      </div>
    </div>
  );
};

export default VerticalTabs;

// ======================== useVerticalTabs
const useVerticalTabs = (initialTab = 0, tabs) => {
  const [currentTab, setCurrentTab] = useState(initialTab);

  const handleTabClick = (index) => {
    setCurrentTab(index);
  };

  const handleNext = () => {
    if (currentTab < tabs.length - 1) {
      setCurrentTab((prevTab) => prevTab + 1);
    }
  };

  const handlePrev = () => {
    if (currentTab > 0) {
      setCurrentTab((prevTab) => prevTab - 1);
    }
  };

  return {
    currentTab,
    handleTabClick,
    handleNext,
    handlePrev,
  };
};

// ======================== VTab
const VTab = ({
  index,
  currentTab,
  title,
  content,
  onClick,
  onNext,
  onPrev,
  tabs,
}) => {
  return (
    <div className="relative">
      <div className="flex items-center">
        <div
          className={`z-20 w-8 h-8 rounded-full flex justify-center items-center ${
            index <= currentTab
              ? "bg-blue-500 text-white" // Active
              : currentTab >= index - 1
              ? "border-2 border-blue-500 bg-white" // Done
              : "border-2 border-gray-500 bg-white" // Not Done
          }`}
          onClick={() => onClick(index)}
        >
          {index < currentTab ? (
            <span className="text-sm">&#10003;</span>
          ) : (
            index + 1
          )}
        </div>

        {/* Line between tabs */}
        {index < tabs.length - 1 && (
          <span
            className={`h-full w-0.5 absolute left-[15px] top-4 ${
              index === currentTab || index <= currentTab
                ? "bg-blue-600" // Blue line for active tab
                : "bg-gray-300" // Gray line for inactive tab
            }`}
          ></span>
        )}

        {/* title */}
        <div
          className={`flex-grow ml-2  text-md capitalize ${
            index === currentTab ? "font-semibold" : ""
          }`}
        >
          {title}
        </div>
      </div>
      {index === currentTab && (
        <div className="ml-8">
          {/* content */}
          <LayoutCard >
            {content}
            {/* Next & Prev */}
            <div className="flex justify-end mt-4">
              {index !== 0 && (
                <button
                  onClick={onPrev}
                  disabled={currentTab === 0}
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
                >
                  Prev
                </button>
              )}

              <button
                onClick={
                  index === tabs.length - 1 ? () => alert("Finish") : onNext
                }
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                {index === tabs.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </LayoutCard>
        </div>
      )}
    </div>
  );
};
