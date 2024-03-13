import { NavIcon } from "src/utils/icons";
import SearchBar from "./SearchBar";
import ProfileInfo from "./ProfileInfo";

// onclick icon Bar show and hide sidebar, mini sidebar.
// Header fexid.

const Header = () => {
  return (
    <div className="h-[80px]  flex justify-between items-center p-5">
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            console.log(132546);
          }}
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
