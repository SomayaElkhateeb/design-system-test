import React from "react";

function CategoryView({ imageUrl, title, description }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-lg font-medium text-gray-800 mr-2">{title}</div>
          ...
        </div>
        {description && (
          <div className="text-gray-500 text-right">{description}</div>
        )}
      </div>
    </div>
  );
}

export default CategoryView;
