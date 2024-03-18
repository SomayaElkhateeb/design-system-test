import React from "react";
import { AddIcon, CheckIcon, LocationIcon } from "src/app/utils/icons";

const Chips = ({
  multiChoice = true,
  location = true,
  optNumber = 5,
  checked = false,
}) => {
  if (multiChoice) {
    return (
      <div
        className={`p-1 flex items-center border pr-3 w-fit rounded-full  ${
          checked
            ? "border-sec-pressed cursor-pointer bg-sec-light"
            : "border-borders-lines"
        } `}
      >
        {checked ? (
          <CheckIcon className="fill-sec-pressed" />
        ) : (
          <AddIcon className="fill-hint" />
        )}

        <p
          className={` paragraph ${
            checked ? "text-sec-pressed" : "text-subtitle"
          } `}
        >
          Option {optNumber}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`p-1 flex items-center border py-1 px-2 w-fit rounded-full cursor-pointer  ${
        checked ? " bg-secondary border-secondary" : "border-borders-lines"
      } `}
    >
      {location ? (
        <LocationIcon
          className={`fill-subtitle ${checked ? "fill-white" : ""} `}
        />
      ) : (
        ""
      )}

      <p className={` paragraph ${checked ? "text-white" : "text-subtitle"} `}>
        Option {optNumber}
      </p>
    </div>
  );
};

export default Chips;
