import React, { useState } from "react";

import {
  BoxIcon,
  ChatIcon,
  DownIcon,
  FaqIcon,
  NavIcon,
  NotifiIcon,
  SearchIcon,
  ViewIcon,
} from "src/app/utils/icons";

// HeaderSearchBar Icon
import { GoSearch } from "react-icons/go";
import { IoLogoElectron } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { RxHome } from "react-icons/rx";
import { MdAllInclusive } from "react-icons/md";
import { getImageUrl } from "src/app/utils";

const Header = ({ setIsOpen }) => {
  return (
    <div className="h-[70px] flex justify-between items-center p-4 bg-white">
      <div className="flex items-center gap-3">
        <button className="max-lg:hidden" onClick={setIsOpen}>
          <NavIcon className="fill-pri-dark" />
        </button>
        <h2 className="title text-lg font-semibold">Home</h2>
      </div>
      <HeaderSearchBar />
      <ProfileInfo />
    </div>
  );
};

export default Header;

// HeaderSearchBar
function HeaderSearchBar({ options }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchTerm, "in category:", selectedCategory);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative flex items-center w-[600px] h-10 rounded-md border py-6">
      <input
        className="w-full pl-12 pr-3 py-2 text-sm bg-transparent border border-transparent focus:outline-none "
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />

      <span className="absolute left-3 top-3 ">
        <GoSearch
          size={24}
          color="gray"
          style={{ transform: "rotate(90deg)" }}
        />
      </span>

      <select
        className="w-xl px-3 py-3 text-sm  border-gray-300 bg-slate-100 focus:outline-none "
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <>
          {/* {options.map((option) => option.icon)} */}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </>
      </select>
      <button
        type="button"
        className="px-4 py-3 rounded-r-md bg-blue-500 text-white  focus:outline-none "
        onClick={handleSearch}
      >
        <span className=" ">
          <GoSearch size={24} style={{ transform: "rotate(90deg)" }} />
        </span>
      </button>
    </div>
  );
}

HeaderSearchBar.defaultProps = {
  options: [
    { icon: <MdAllInclusive />, value: "all", label: "All Products" },
    { icon: <IoLogoElectron />, value: "electronics", label: "Electronics" },
    { icon: <GiClothes />, value: "clothing", label: "Clothing" },
    { icon: <RxHome />, value: "home", label: "Home & Garden" },
  ],
};

// ProfileInfo
const ProfileInfo = () => {
  return (
    <div className="flex items-center gap-[14px]">
      <button className="rounded-lg border border-light-2 size-[42px] grid place-content-center">
        <FaqIcon />
      </button>
      <button className="rounded-lg border border-light-2 size-[42px] grid place-content-center">
        <ViewIcon />
      </button>
      <button className="rounded-lg border border-light-2 size-[42px] grid place-content-center relative">
        <span className="absolute p-1 rounded-full bg-error top-1 right-1"></span>
        <ChatIcon />
      </button>
      <button className="rounded-lg border border-light-2 size-[42px] grid place-content-center relative">
        <span className="absolute p-1 rounded-full bg-error top-1 right-1"></span>
        <NotifiIcon />
      </button>
      <div className="rounded-lg border border-light-2 size-[42px] grid place-content-center overflow-hidden">
        <img
          src={getImageUrl("images/profile.png")}
          alt="logo"
          className=" object-cover h-full "
        />
      </div>
    </div>
  );
};

// ====  Old SearchBar ============================
// const SearchBar = () => {
//   return (
//     <form className=" overflow-hidden rounded flex items-center max-lg:hidden">
//       <div className=" border-constrained border flex items-center ">
//         <SearchIcon className="fill-hint mx-2 " />
//         <input
//           type="search"
//           id="search"
//           name="search"
//           className="focus:outline-none px-1 py-2 lg:w-56 xl:w-[315px]  "
//         />
//         <button className="flex items-center self-stretch p-1 px-3 gap-[3px]  bg-constrained  max-xl:hidden ">
//           <BoxIcon className="fill-primary" />
//           <p className="text-primary subtitle">Products</p>
//           <DownIcon className="fill-primary" />
//         </button>
//       </div>

//       <button type="submit" className="bg-primary self-stretch ">
//         <SearchIcon className="fill-white mx-3.5 " />
//       </button>
//     </form>
//   );
// };
