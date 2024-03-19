import React from "react";
import { getImageUrl } from "src/app/utils";
import { MoreIcon } from "src/app/utils/icons";

const CategoryViews = ({ small }) => {
  return (
    <div className="w-[343px] flex justify-between">
      <div className="flex">
        <div
          className={`rounded-lg border ${
            small ? "size-[43px]" : "size-[60px]"
          }`}
        >
          <img
            src={getImageUrl("images/Vector.svg")}
            alt="product"
            className="size-full object-cover"
          />
        </div>

        <div className="ml-1 flex flex-col justify-center">
          <p className="title">Title</p>
          {!small && (
            <p className="paragraph text-subtitle ">
              Lorem Ipsum is simply dummy text of
            </p>
          )}
        </div>
      </div>

      <button className="self-start">
        <MoreIcon className="fill-subtitle" />
      </button>
    </div>
  );
};

export default CategoryViews;
