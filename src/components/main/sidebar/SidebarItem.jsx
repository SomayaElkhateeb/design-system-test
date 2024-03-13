import { NavLink, useLocation } from "react-router-dom";
const SidebarItem = (props) => {
  const { Icon, name, path } = props;
  return (
    <NavLink
      to={path}
      className={`${({ isActive }) => (isActive ? "active" : undefined)}
      hover:bg-pri-light relative w-full p-1 flex items-center gap-2 duration-300 transition-all  group rounded-xl max-lg:justify-center max-lg:hover:bg-transparent max-lg:bg-transparent`}
      end
    >
      <Icon className="fill-hint duration-300 transition-all rounded-xl w-[36px] h-[36px] p-1 group-focus:bg-white group-[.active]:fill-primary group-hover:bg-white group-hover:fill-primary max-lg:bg-transparent group-[.active]:bg-white" />
      <h2 className="subtitle group-hover:font-semibold  group-hover:text-primary max-lg:hidden group-[.active]:font-semibold group-[.active]:text-primary">
        {name}
      </h2>
      <span className="lg:hidden absolute rounded-full right-0 h-0 w-[3px] bg-primary group-[.active]:h-[30px] duration-300 transition-all"></span>
    </NavLink>
  );
};
export default SidebarItem;
