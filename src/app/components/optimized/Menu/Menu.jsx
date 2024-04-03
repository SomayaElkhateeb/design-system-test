import { CheckIcon } from "src/app/utils/icons";

const Menu = ({ options, onSelect, selectedOption }) => {
  return (
    <ul className="absolute top-[100%] z-10 rounded bg-white shadow-md py-2 flex flex-col w-48 md:w-[341px]">
      {options.map((option, index) => (
        <MenuItem
          key={index}
          text={option}
          onClick={() => onSelect(option)}
          selected={selectedOption === option}
        />
      ))}
    </ul>
  );
};

export default Menu;
const MenuItem = ({ text, onClick, selected }) => {
  return (
    <li
      onClick={onClick}
      className={`flex text-title justify-between items-center hover:bg-sec-light px-4 py-3 transition-all ${
        selected ? "bg-sec-light" : ""
      }`}
    >
      <span className={`text-sm ${selected ? "text-sec-pressed" : ""}`}>
        {text}
      </span>
      {selected && <CheckIcon className="fill-sec-pressed" />}
    </li>
  );
};
