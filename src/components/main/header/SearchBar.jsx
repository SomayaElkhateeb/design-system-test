import React from "react";
import { BoxIcon, DownIcon, SearchIcon } from "src/utils/icons";

const SearchBar = () => {
  return (
    <form className=" overflow-hidden rounded flex items-center max-lg:hidden">
      <div className=" border-constrained border flex items-center ">
        <SearchIcon className="fill-hint mx-2 " />
        <input
          type="search"
          id="search"
          name="search"
          className="focus:outline-none px-1 py-2 lg:w-56 xl:w-[315px]  "
        />
        <button className="flex items-center self-stretch p-1 px-3 gap-[3px]  bg-constrained  max-xl:hidden ">
          <BoxIcon className="fill-primary" />
          <p className="text-primary subtitle">Products</p>
          <DownIcon className="fill-primary" />
        </button>
      </div>

      <button type="submit" className="bg-primary self-stretch ">
        <SearchIcon className="fill-white mx-3.5 " />
      </button>
    </form>
  );
};

export default SearchBar;
