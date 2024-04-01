import { MoreIcon } from "src/app/utils/icons";

/**
 * @param {object} props - Props for the CategoryViews component
 * @param {string} props.imageUrl - The URL of the image for the category
 * @param {string} props.title - The title of the category
 * @param {string} props.description - The description of the category
 * @param {boolean} props.hasAction - Determines whether the category has an action button
 */

const CategoryViews = ({ imageUrl, title, description, hasAction }) => {
  // Determine the size class for the image based on whether description is present
  const imageSizeClass = description ? "size-[60px]" : "size-[43px]";

  return (
    <div className="bg-white flex justify-between items-center p-4">
      <div className="flex">
        {/* Category Image */}
        <div className={`rounded-lg border ${imageSizeClass}`}>
          <img src={imageUrl} alt={title} className="size-full object-cover" />
        </div>
        {/* Category Title and Description */}
        <div className="ml-1 gap-4 flex flex-col justify-center">
          <h2 className="title">{title}</h2>
          {description && (
            <p className="paragraph text-subtitle">{description}</p>
          )}
        </div>
      </div>
      {/* Action Button */}
      {hasAction && (
        <button className="self-start">
          <MoreIcon className="fill-subtitle" />
        </button>
      )}
    </div>
  );
};

export default CategoryViews;

// Default props
CategoryViews.defaultProps = {
  imageUrl: "", // Provide the URL of the image
  title: "Category Title", // Default category title
  description: "", // Default category description
  hasAction: false, // Default to no action button
};

// Usage Example:
// import React from "react";
// import { CategoryViews } from "./CategoryViews";
//
// const MyComponent = () => {
//   return (
//     <CategoryViews
//       imageUrl="/path/to/image.jpg"
//       title="Category Title"
//       description="Category Description"
//       hasAction={true}
//     />
//   );
// };
//
// export default MyComponent;
