import { getImageUrl } from "src/utils"; // ?
import NavLinks from "./NavLinks";
import { GmailIcon, GoogleIcon } from "src/utils/icons";

const Sidebar = () => {
  return (
    <aside className="min-h-screen duration-500 transition-all w-60  max-lg:w-16 ">
      <div className="sticky top-0 overflow-hidden">
        <header className="grid  h-[70px] w-full place-content-center">
          <img
            src={getImageUrl("full-logo.svg")}
            alt="logo"
            className="w-32 max-lg:hidden"
          />
          <img
            src={getImageUrl("mini-logo.svg")}
            alt="logo"
            className="w-9 lg:hidden"
          />
        </header>

        <NavLinks />

        <div className="p-3 max-lg:p-1">
          <p className="paragraph mb-3 ml-3  max-lg:hidden ">Sales channel</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-2">
            {/* 

           1. this bad code => you should made array data then map ,  look constants.js line 36
           2. sidebar --> fexid
           3. size icon wrong
           4. logo ?
           */}
            {/* <FacebookIcon className="border rounded-lg p-[5px] w-[40px] h-[40px]  max-lg:border-0" /> */}
            <GoogleIcon className="border rounded-lg p-[5px] w-[40px] h-[40px]  max-lg:border-0" />
            <GmailIcon className="border rounded-lg p-[5px] w-[40px] h-[40px]  max-lg:border-0" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
