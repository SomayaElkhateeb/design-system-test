import React from "react";
import { ChatIcon, FaqIcon, NotifiIcon, ViewIcon } from "src/utils/icons";
import { getImageUrl } from "src/utils";

const ProfileInfo = () => {
  return (
    <div className="flex items-center gap-[14px]">
      <button className="rounded-lg border border-light-2 w-[42px] h-[42px] grid place-content-center">
        <FaqIcon />
      </button>
      <button className="rounded-lg border border-light-2 w-[42px] h-[42px] grid place-content-center">
        <ViewIcon />
      </button>
      <button className="rounded-lg border border-light-2 w-[42px] h-[42px] grid place-content-center relative">
        <span className="absolute p-1 rounded-full bg-error top-1 right-1"></span>
        <ChatIcon />
      </button>
      <button className="rounded-lg border border-light-2 w-[42px] h-[42px] grid place-content-center relative">
        <span className="absolute p-1 rounded-full bg-error top-1 right-1"></span>
        <NotifiIcon />
      </button>
      <div className="rounded-lg border border-light-2 w-[42px] h-[42px] grid place-content-center overflow-hidden">
        <img
          src={getImageUrl("images/profile.png")}
          alt="logo"
          className=" object-cover h-full "
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
