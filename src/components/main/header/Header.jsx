import { NavIcon } from "src/utils/icons";
import SearchBar from "./SearchBar";
import ProfileInfo from "./ProfileInfo";

// onclick icon Bar show and hide sidebar, mini sidebar.
// Header fexid.

const Header = ({setIsOpen}) => {
  return (
    <div className="h-[70px] flex justify-between items-center p-4 bg-white">
      <div className="flex items-center gap-3">
        <button className="max-lg:hidden"
          onClick={setIsOpen}
        >
            <NavIcon className="fill-pri-dark" />
        </button>
        <h2 className="title text-lg font-semibold">Home</h2>
      </div>
      <SearchBar />
      <ProfileInfo />
    </div>
  );
};

export default Header;
