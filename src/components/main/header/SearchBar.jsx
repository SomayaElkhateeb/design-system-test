import React from "react";
import { BoxIcon, DownIcon, SearchIcon } from "src/utils/icons";

const SearchBar = () => {
  return (
    <form className=" overflow-hidden rounded flex items-center">
      <div className=" border-constrained border flex items-center">
        <SearchIcon className="fill-hint m-1 w-[30px] h-[30px] " />
        <input
          type="search"
          id="search"
          name="search"
          className="focus:outline-none px-1 py-2 lg:w-80  "
        />
        <button className="flex items-center self-stretch p-[3px] gap-[2px]  bg-constrained  max-lg:hidden ">
          <BoxIcon className="fill-primary" />
          <p className="text-primary">Products</p>
          <DownIcon className="fill-primary mt-1" />
        </button>
      </div>

      <button type="submit" className="bg-primary self-stretch">
        <SearchIcon className="fill-white mx-3 " />
      </button>
    </form>
  );
};

export default SearchBar;
