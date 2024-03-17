import { IoSearch } from "react-icons/io5";

const InputWithIcon = ({
  icon = <IoSearch size={20} />,
  placeholder = "Search...",
}) => {
  return (
    <div className="relative w-72">
      <span className="absolute w-10 inset-y-0 left-0 flex items-center justify-center">
        {icon}
      </span>
      <input
        className="pl-12 pr-4 py-2 border rounded-md w-full overflow-hidden  "
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputWithIcon;
