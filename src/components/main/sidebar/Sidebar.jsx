import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import { getImageUrl } from "src/utils";
import { socialLinks } from "src/utils/constants";

const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`min-h-lvh h-full duration-500 transition-all max-lg:min-w-16 max-lg:w-16 px-2 py-3 bg-white ${
        isOpen ? "w-[180px]" : "w-16 min-w-16"
      }`}
    >
      <div className="sticky top-3 overflow-hidden ">
        <header className=" h-[42px]">
          <div className={`w-[162px] rounded-lg h-full shadow-[0px_5px_15px_0px_#7C82B90D] max-lg:hidden place-content-center grid ${!isOpen ? "hidden" : ""}`}>
            <img
              src={getImageUrl("brand/en-light.svg")}
              alt="logo"
              className={`w-32 max-lg:hidden `}
            />
          </div>

          <div className={`max-lg:grid place-content-center grid h-full ${isOpen ? "hidden" : "grid"} `}>
            <img
              src={getImageUrl("brand/cloud.svg")}
              alt="logo"
              className={`w-9  `}
            />
          </div>
        </header>
        <NavLinks isOpen={isOpen}/>

        <div className="px-2 max-lg:p-1">
          <p className={`paragraph text-subtitle mb-2 max-lg:hidden ${!isOpen ? "hidden" : ""}`}>
            Sales channel
          </p>
          <div className={`grid max-lg:grid-cols-1 gap-2 ${!isOpen ? "grid-cols-1" : "grid-cols-3"}`}>
            {socialLinks.map((link) => (
              <Link
                key={link.id}
                className={`w-10 h-10 hover:border-primary focus:border-primary focus:bg-pri-light/50 max-lg:border-0 border border-borders-lines rounded-xl grid place-content-center ${!isOpen ? "border-0" : ""} `}
              >
                <img src={link.img} alt="social" className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
