import { useState } from "react";
import { DownIcon, UpIcon } from "src/app/utils/icons";

const Accordion = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={` w-[365px] rounded p-4 border border-constrained hover:border-secondary transition-all ease-linear ${
        open ? " bg-sec-light" : "bg-white"
      }`}
    >
      <div className="flex justify-between">
        <h3 className="text-title font-semibold">Do we ship goods?</h3>
        <button
          className="duration-300 transition-all ease-linear"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <UpIcon className="fill-hint" />
          ) : (
            <DownIcon className="fill-hint" />
          )}
        </button>
      </div>

      {open ? (
        <p className="text-subtitle duration-500 transition-all ease-linear pt-4  ">
          Yes we do that exactly
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Accordion;
