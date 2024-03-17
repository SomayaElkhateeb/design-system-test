import { IoSearch } from "react-icons/io5";

const SelectRow = ({
  label,
  options,
  value,
  onChange,
  icon = <IoSearch size={20} />,
}) => {
  return (
    <div className="relative w-72">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="absolute right-5 top-5 text-gray-400">{icon}</span>
    </div>
  );
};

SelectRow.defaultProps = {
  options: [
    { value: "all", label: "All Products" },
    { value: "electronics", label: "Electronics" },
    { value: "clothing", label: "Clothing" },
    { value: "home", label: "Home & Garden" },
  ],
};

export default SelectRow;
