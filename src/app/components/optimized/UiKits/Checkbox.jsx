function Checkbox({ label, checked, onChange }) {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-indigo-600"
        checked={checked}
        onChange={onChange}
      />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
}

export default Checkbox;

// const [isChecked, setIsChecked] = useState(false);

// const handleCheckboxChange = (event) => {
//   setIsChecked(event.target.checked);
// };

// <Checkbox
// label=""
// checked={isChecked}
// onChange={handleCheckboxChange}
// />