import { DownIcon } from "src/app/utils/icons";
const PaymentMethodAccordion = ({ title, isOpen, onToggle, children }) => {
  return (
    <div
      className={`border border-border-color rounded mb-4  ${
        isOpen ? "bg-light-1" : "bg-white"
      }`}
    >
      <button
        type="button"
        className="w-full p-4 flex justify-between items-center text-left focus:outline-none"
        onClick={onToggle}
        // aria-expanded={isOpen}
      >
        <h2 className="title">{title}</h2>
        <DownIcon
          className={`transition-all fill-hint ${
            isOpen ? "rotate-180" : "bg-white"
          }`}
        />
      </button>

      <div
        className={`p-4 ${!isOpen && "hidden"}`}
        // aria-hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
};

export default PaymentMethodAccordion;
// overflow-hidden
// className={`transition-all duration-700 ${!isOpen ? "h-0 p-0" : "p-4"}`}
