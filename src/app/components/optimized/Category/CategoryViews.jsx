import React from "react";
import { MoreIcon } from "src/app/utils/icons";

const CategoryViews = ({ imageUrl, title, description, hasAction }) => {
  const imageSizeClass = description ? "size-[60px]" : "size-[43px]";

  return (
    <div className="bg-white flex justify-between items-center p-4">
      <div className="flex">
        <div className={`rounded-lg border ${imageSizeClass}`}>
          <img src={imageUrl} alt={title} className="size-full object-cover" />
        </div>
        <div className="ml-1 gap-4 flex flex-col justify-center">
          <h2 className="title">{title}</h2>
          {description && (
            <p className="paragraph text-subtitle">{description}</p>
          )}
        </div>
      </div>
      {hasAction && (
        <button className="self-start">
          <MoreIcon className="fill-subtitle" />
        </button>
      )}
    </div>
  );
};
export default CategoryViews;
