import { useState } from "react";
import { Button, CheckBox, InputRow } from "src/app/components/optimized";

const TikDataSharing = ({ data }) => {
  const [state, setState] = useState({
    isChecked: false,
    inputState: {
      selectedValue: "Select an option",
      value: "",
    },
  });

  const handleCheckBoxChange = (value) => {
    setState({
      ...state,
      isChecked: value,
    });
  };

  const handleInputChange = (value) => {
    setState({
      ...state,
      inputState: {
        ...state.inputState,
        value,
      },
    });
  };

  const handleClick = () => {
    console.log("Button clicked!");
  };

  const { isChecked, inputState } = state;

  return (
    <div>
      <p>
        {data.description} <span className="text-blue-500">Learn more</span>
      </p>
      <div className="my-6">
        <CheckBox
          label="Activate data sharing"
          initialChecked={isChecked}
          onChange={handleCheckBoxChange}
        />
      </div>

      <div className="flex justify-between items-center">
        {isChecked && (
          <div className="w-1/3 flex flex-col space-y-3 ">
            <InputRow
              label="Pixel ID"
              value={inputState.value}
              onChange={handleInputChange}
            />
          </div>
        )}

        {isChecked && (
          <Button variant="primary" onClick={handleClick}>
            Connect
          </Button>
        )}
      </div>
    </div>
  );
};

export default TikDataSharing;
