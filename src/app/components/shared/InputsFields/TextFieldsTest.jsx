import HeaderSearchBar from "./InputsCollection/HeaderSearchBar";
import InputWithIcon from "./InputsCollection/InputWithIcon";
import LanguageSelect from "./InputsCollection/LanguageSelect";
import PasswordInput from "./InputsCollection/PasswordInput";
import PhoneNumberInput from "./InputsCollection/PhoneNumberInput";
import SelectRow from "./InputsCollection/SelectRow";
import StrengthPassword from "./InputsCollection/StrengthPassword";
import ToggleSwitch from "./InputsCollection/ToggleSwitch";
import SelectWithImage from "./InputsCollection/SelectWithImage";
import CheckboxWithImage from "./InputsCollection/CheckboxWithImage";

const TextFieldsTest = () => {
  return (
    <div className="flex justify-center items-center mt-5 flex-col space-y-3">
      <SelectWithImage />
      <InputWithIcon />
      <SelectRow />
      <PhoneNumberInput />
      <PasswordInput />
      <StrengthPassword />
      <LanguageSelect />
      <ToggleSwitch />
      <HeaderSearchBar />
      <CheckboxWithImage />
    </div>
  );
};

export default TextFieldsTest;
