import { useAppDispatch, useAppSelector } from "src/app/store";
import { getAttributes } from "src/app/store/slices/Attributes/Attribute/attributeAsyncThunks";
import { useEffect, useState } from "react";
import { CheckBox } from "src/app/components/optimized";

// interface Attribute {
//   code: string;
// }

const CustomAttributes = () => {
  const dispatch = useAppDispatch();
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const handleCheckBoxChange = (attributeCode: string, isChecked: boolean) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [attributeCode]: isChecked,
    }));
  };

  const { attributesList } = useAppSelector((state) => state.attributesProducts) ;

  useEffect(() => {
    dispatch(getAttributes());
  }, [dispatch]);

  return (
    <div>
      {/* Search input can be added here */}

      {/* Attributes List */}
      <div>
        {attributesList.map((item) => (
          <div key={item.code} className="flex items-center gap-4 mb-4">
            <CheckBox
              checked={checkedItems[item.code] || false}
              handleOnChange={(isChecked) => handleCheckBoxChange(item.code, isChecked)}
            />
            <p className='text-title text-sm'>{item.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomAttributes;
