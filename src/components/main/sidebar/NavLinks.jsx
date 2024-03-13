
import { sidebarLinks } from "src/utils/constants";
import SidebarItem from "./SidebarItem";

const NavLinks = ({isOpen}) => {
  return (
    <nav className="my-4 w-full">
      <ul className="flex gap-2 flex-col">
        {sidebarLinks.map((link) => ( // no use index id 
          <li key={link.id}>
            <SidebarItem {...link}  isOpen={isOpen} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
