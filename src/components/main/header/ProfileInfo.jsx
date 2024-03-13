import React from "react";
import { ChatIcon, FaqIcon, NotifiIcon, ViewIcon } from "src/utils/icons";
import { getImageUrl } from "src/utils";

const ProfileInfo = () => {
  return (
    <div className="flex items-center gap-4">
      <button className="rounded-lg border border-light-2 p-[10px]">
        <FaqIcon className="" />
      </button>
      <button className="rounded-lg border border-light-2  p-[10px]">
        <ViewIcon />
      </button>
      <button className="rounded-lg border border-light-2  p-[10px] relative">
        <span className="absolute p-1 rounded-full bg-error top-1 right-1"></span>
        <ChatIcon />
      </button>
      <button className="rounded-lg border border-light-2  p-[10px] relative">
        <span className="absolute p-1 rounded-full bg-error top-1 right-1"></span>
        <NotifiIcon />
      </button>
      <div className="w-11 h-11 border border-light-2 rounded-lg overflow-hidden">
        <img
          src={getImageUrl("profile.jpg")}
          alt="logo"
          className=" object-cover h-full "
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
