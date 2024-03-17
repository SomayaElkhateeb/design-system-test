import React from "react";
import { getImageUrl } from "src/app/utils";
import { AddBgIcon, MoreIcon, UploadIcon } from "src/app/utils/icons";

const LogoUpload = ({ isUbloading, loaded = true }) => {
  return (
    <div
      className={`p-3 size-[100px] rounded border text-center grid place-items-center relative cursor-pointer ${
        isUbloading || loaded
          ? "border-solid	bg-light-1 border-borders-lines"
          : "border-dashed border-hint"
      }`}
    >
      {!isUbloading ||
        (!loaded && (
          <div>
            <UploadIcon className="fill-pri-dark" />
            <p className="paragraph text-title">Upload Image</p>
          </div>
        ))}

      {isUbloading && !loaded && <p className="text-primary">Loading...</p>}

      {!isUbloading && loaded && (
        <div>
          <img src={getImageUrl("brand/cloud.svg")} alt="logo" />
          <MoreIcon className="absolute top-1 left-1 fill-hint " />
          <AddBgIcon className="absolute rounded-full top-1 right-1 fill-primary rotate-45 border-2 border-white" />
          <span className="absolute bottom-1 left-1 paragraph px-[6px]  text-[13px] text-subtitle border rounded-full">
            Main
          </span>
          <span className="absolute bottom-1 right-1 size-6 rounded-full border-2 border-white bg-secondary text-white text-xs leading-5">
            8
          </span>
        </div>
      )}
    </div>
  );
};

export default LogoUpload;
