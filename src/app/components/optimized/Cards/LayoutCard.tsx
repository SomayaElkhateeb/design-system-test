import React, { ReactNode } from "react";

interface LayoutCardProps {
  children: ReactNode; // Children components to be rendered inside the card
}

/**
 * LayoutCard Component
 * @param children The content to be displayed inside the card
 */
const LayoutCard: React.FC<LayoutCardProps> = ({ children }) => {
  return (
    <div className="w-full shadow-md rounded-lg overflow-hidden bg-white p-5">
      <div className="px-4 py-2">{children}</div>
    </div>
  );
};

export default LayoutCard;

/*
  Usage Example:

  import React from "react";
  import LayoutCard from "./LayoutCard";

  const MyComponent = () => {
    return (
      <LayoutCard>
        <div>
          <h1>This is a Layout Card</h1>
          <p>It can contain any content you want!</p>
        </div>
      </LayoutCard>
    );
  };

  export default MyComponent;
*/
