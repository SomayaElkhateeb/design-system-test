import { select } from "src/pages/MarketingPage/Discounts/comp/data";
import { Button, CheckBox, InputRow, SelectItem } from "..";
import { LiaSearchSolid } from "react-icons/lia";
import { useState } from "react";
import { capitalizeFirstLetter } from "src/app/utils";

const SelectItems = ({ title = "Select categories", onClose }) => {
  const [state, setState] = useState({
    searchQuery: "",
    selectedCount: 0,
    totalItems: select.length,
    isChecked: true,
  });

  const { searchQuery, selectedCount, totalItems, isChecked } = state;
  const handleChange = (newValue) => {
    setState(newValue);
  };

  // Filter items based on the search query
  const filteredItems = select.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="w-[637px] rounded bg-white py-[18px]">
        {/* header */}
        <div>
          <h3 className="text-title font-semibold mb-3 ml-[18px]">
            {capitalizeFirstLetter(title)}
          </h3>

          <div className="flex items-center justify-between px-[18px]">
            {/* input search */}
            <div className="w-[380px]">
              <InputRow
                leftIcon={<LiaSearchSolid />}
                placeholder="Search"
                value={searchQuery}
                onChange={(query) =>
                  setState({
                    ...state,
                    searchQuery: query,
                  })
                }
              />
            </div>

            <p>
              {selectedCount} categories out of {totalItems}
            </p>

            {selectedCount === 0 && <CheckBox variant="minus" />}
            {selectedCount > 0 && selectedCount < totalItems && (
              <CheckBox
                variant="minus"
                checked={isChecked}
                onChange={handleChange}
              />
            )}
            {selectedCount === totalItems && (
              <CheckBox checked={isChecked} onChange={handleChange} />
            )}
          </div>
        </div>

        {/* contain */}
        <div className="flex flex-col gap-2 my-2 h-[400px] overflow-auto">
          {filteredItems.map((item) => {
            return (
              <SelectItem
                key={item.id}
                {...item}
                onCheckBoxChange={(isChecked) =>
                  setState({
                    ...state,
                    selectedCount: isChecked
                      ? selectedCount + 1
                      : selectedCount - 1,
                  })
                }
              />
            );
          })}
        </div>

        <div className="flex mt-4 justify-end mr-[18px] gap-[18px]">
          <Button
            // onClick={() => onClose()}
            text="cancel"
            variant="tertiaryBtn"
          />
          <Button text={`add (${selectedCount})`} />
        </div>
      </div>
    </div>
  );
};

export default SelectItems;
