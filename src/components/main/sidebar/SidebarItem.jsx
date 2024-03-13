import { NavLink, useLocation } from "react-router-dom";
const SidebarItem = (props) => {
  const { Icon, name, path ,
    isOpen } = props;
  return (
    <NavLink
      to={path}
      className={`${({ isActive }) => (isActive ? "active" : undefined)}
      hover:bg-pri-light relative w-full px-1 py-[3px] flex items-center gap-2 duration-300 transition-all group rounded-lg max-lg:justify-center max-lg:hover:bg-transparent max-lg:bg-transparent ${!isOpen ? "justify-center bg-transparent hover:bg-transparent" : ""} `}
      end
    >
      <div className={`rounded-lg w-[30px] h-[30px] duration-300 grid place-content-center transition-all max-lg:bg-transparent group-[.active]:bg-white ${!isOpen ? "bg-transparent" : ""}`}>
        <Icon className="fill-hint duration-300 transition-all  group-[.active]:fill-primary  group-hover:fill-primary " />
      </div>
      <p className={`paragraph text-subtitle  group-hover:text-primary max-lg:hidden group-[.active]:font-semibold group-[.active]:text-primary group-[.active]:title ${!isOpen ? "hidden" : ""}`}>
        {name}
      </p>
      <span className={`absolute rounded-full right-0 h-0 w-[3px] bg-primary group-[.active]:h-[30px] duration-300 transition-all ${!isOpen ? "block" : "lg:hidden"}`}></span>
    </NavLink>
  );
};
export default SidebarItem;
// max-lg:block