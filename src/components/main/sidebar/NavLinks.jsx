
import { sidebarLinks } from "src/utils/constants";
import SidebarItem from "./SidebarItem";

const NavLinks = () => {
  return (
    <nav className="flex flex-col p-3 max-lg:p-1">
      <ul className="space-y-1">
        {sidebarLinks.map((link) => ( // no use index id 
          <li key={link.id}>
            <SidebarItem {...link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
