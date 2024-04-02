
import { Button, InputRow, SelectItems } from "src/app/components/optimized";
import { FaChevronRight } from "react-icons/fa";
import { AiOutlinePercentage } from "react-icons/ai";
import SingleChoiceChips from "src/app/components/optimized/ChoiceChips/SingleChoiceChips";
import useDiscountForm from "../../comp/useDiscountForm";
import {
  selectCategories,
  selectProducts,
  customerGetsOptions,
} from "../../comp/data";
import useLocalStorage from "../../comp/useLocalStorage";
import { useEffect, useState } from "react";
import { MoreIcon } from "src/app/utils/icons";

import { Button, InputRow, SelectItems } from 'src/app/components/optimized';
import { FaChevronRight } from 'react-icons/fa';
import { AiOutlinePercentage } from 'react-icons/ai';

import useDiscountForm from '../useDiscountForm';
import { selectCategories, selectProducts, customerGetsOptions } from './data';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';

const ApplyToOptions = ({ applyTo }) => {
	const { showSelectCategories, customerGets, percentGets, quantityGets } =
		useDiscountForm();
	console.log('showSelectCategories', showSelectCategories);
	console.log('customerGets', customerGets);
	console.log('percentGets', percentGets);
	console.log('quantityGets', quantityGets);

	return (
		<div>
			{applyTo === 'All products' && (
				<h1 className='mt-[18px]'>All products</h1>
			)}
			{applyTo === 'Specific category' && <SpecificCategory />}
			{applyTo === 'Specific products' && <SpecificProducts />}
			{applyTo === 'Buy x get y' && <BuyxGety />}
		</div>
	);
};

export default ApplyToOptions;

// applyTo components
const SpecificCategory = () => {

  const {
    showSelectCategories,
    setShowSelectCategories,
    handleCloseSelectCategories,
    // stateCategory,
    // setStateCategory,
    setSelectedItems,
    selectedItems,
  } = useDiscountForm();
  // Effect to retrieve selected items from local storage when the component mounts
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];
    setSelectedItems(storedItems);
  }, []);
  // console.log("stateCategory", stateCategory);
  return (
    <div className="mt-[18px] flex flex-col gap-[18px]">
      <div>
        <Button
          variant="sec"
          text="select categories"
          RightIcon={FaChevronRight}
          onClick={setShowSelectCategories}
        />
      </div>
      {showSelectCategories && (
        <SelectItems
          onClose={handleCloseSelectCategories}
          select={selectCategories}
          title="Select categories"
        />
      )}

      {/* Render selected items */}
      {selectedItems.length > 0 && (
        <div>
          <ul className="w-full flex flex-col gap-[18px]">
            {selectedItems.map((item) => {
              const { img, title, subTitle } = item; // Move the destructuring assignment here
              return (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-[18px] h-[56px]"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[46px] h-[46px] rounded overflow-hidden">
                      <img src={img} alt="" className="w-full h-full" />
                    </div>

                    <div>
                      <h4 className="capitalize text-sm font-semibold text-title">
                        {title}
                      </h4>
                      <p className="text-subtitle text-sm">{subTitle}</p>
                    </div>
                  </div>
                  <MoreIcon className="cursor-pointer" />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

const SpecificProducts = () => {
  const {
    showSelectCategories,
    setShowSelectCategories,
    handleCloseSelectCategories,
    // stateProducts,
    // setStateProducts,
    setSelectedItems,
    selectedItems,
  } = useDiscountForm();

  // Effect to retrieve selected items from local storage when the component mounts
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];
    setSelectedItems(storedItems);
  }, []);
  // console.log("stateProducts", stateProducts);
  return (
    <div className="mt-[18px] flex flex-col gap-[18px]">
      <div>
        <Button
          variant="sec"
          text="select products"
          RightIcon={FaChevronRight}
          onClick={setShowSelectCategories}
        />
      </div>
      {showSelectCategories && (
        <SelectItems
          onClose={handleCloseSelectCategories}
          select={selectProducts}
          title="Select products"
        />
      )}

      {/* Render selected items */}
      {selectedItems.length > 0 && (
        <div>
          <ul className="w-full flex flex-col gap-[18px]">
            {selectedItems.map((item) => {
              const { img, title, subTitle } = item; // Move the destructuring assignment here
              return (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-[18px] h-[56px]"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[46px] h-[46px] rounded overflow-hidden">
                      <img src={img} alt="" className="w-full h-full" />
                    </div>

                    <div>
                      <h4 className="capitalize text-sm font-semibold text-title">
                        {title}
                      </h4>
                      <p className="text-subtitle text-sm">{subTitle}</p>
                    </div>
                  </div>
                  <MoreIcon className="cursor-pointer" />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

const BuyxGety = () => {
  const { setCustomerGets, customerGets, setPercentGets, setQuantityGets } =
    useDiscountForm();
  console.log("customerGets", customerGets);
  // Retrieve stored values from local storage
  const [storedQuantityGets] = useLocalStorage("quantityGets", "");
  const [storedPercentGets] = useLocalStorage("percentGets", "");

  //Separate state variables for local storage values and user input values
  const [quantityGets, setInputQuantityGets] = useState(storedQuantityGets);
  const [percentGets, setInputPercentGets] = useState(storedPercentGets);

  useEffect(() => {
    // Set the retrieved values to state variables when the component mounts
    setInputQuantityGets(storedQuantityGets);
    setInputPercentGets(storedPercentGets);
  }, [storedQuantityGets, storedPercentGets]);

  return (
    <div className="mt-[18px] flex flex-col gap-[18px]">
      <div>
        <Button
          variant="sec"
          text="select products X"
          RightIcon={FaChevronRight}
        />
      </div>
      <p>
        Customer Gets ({quantityGets} products Y with {percentGets}% offer)
      </p>

      <SingleChoiceChips
        options={customerGetsOptions}
        setOption={setCustomerGets}
      />
      {customerGets === "Specify percentage" && (
        <>
          <div className="w-[390px]">
            <InputRow
              value={percentGets}
              onChange={(value) => {
                setInputPercentGets(value);
                setPercentGets(value); // Update state used by useDiscountForm
              }}
              label="Percentage"
              leftIcon={<AiOutlinePercentage />}
            />
          </div>
          <div className="w-[390px]">
            <InputRow
              value={quantityGets}
              onChange={(value) => {
                setInputQuantityGets(value);
                setQuantityGets(value); // Update state used by useDiscountForm
              }}
              label="Quantity"
            />
          </div>
          <div>
            <Button
              variant="sec"
              text="select products y"
              RightIcon={FaChevronRight}
            />
          </div>
        </>
      )}
    </div>
  );

	const {
		showSelectCategories,
		setShowSelectCategories,
		handleCloseSelectCategories
	} = useDiscountForm();
	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				<Button
					variant='sec'
					text='select categories'
					RightIcon={FaChevronRight}
					onClick={setShowSelectCategories}
				/>
			</div>
			{showSelectCategories && (
				<SelectItems
					onClose={handleCloseSelectCategories}
					select={selectCategories}
					title='Select categories'
				/>
			)}

			{/* get data from local storage */}
		</div>
	);
};

const SpecificProducts = () => {
	const {
		showSelectCategories,
		setShowSelectCategories,
		handleCloseSelectCategories
	} = useDiscountForm();
	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				<Button
					variant='sec'
					text='select products'
					RightIcon={FaChevronRight}
					onClick={setShowSelectCategories}
				/>
			</div>
			{showSelectCategories && (
				<SelectItems
					onClose={handleCloseSelectCategories}
					select={selectProducts}
					title='Select products'
				/>
			)}
		</div>
	);
};

const BuyxGety = () => {
	const {
		setCustomerGets,
		customerGets,
		percentGets,
		setPercentGets,
		quantityGets,
		setQuantityGets
	} = useDiscountForm();
	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				<Button
					variant='sec'
					text='select products X'
					RightIcon={FaChevronRight}
				/>
			</div>
			<p>Customer Gets (5 products Y with 20% offer)</p>

			<SingleChoiceChips
				options={customerGetsOptions}
				setSelected={setCustomerGets}
				selected={customerGets}
			/>
			{customerGets === 'Specific customers' && (
				<>
					<div className='w-[390px]'>
						<InputRow
							value={percentGets}
							handleOnChange={setPercentGets}
							label='Percentage'
							leftIcon={<AiOutlinePercentage />}
						/>
					</div>
					<div className='w-[390px]'>
						<InputRow
							value={quantityGets}
							handleOnChange={setQuantityGets}
							label='Quantity'
						/>
					</div>
					<div>
						<Button
							variant='sec'
							text='select products y'
							RightIcon={FaChevronRight}
						/>
					</div>
				</>
			)}
		</div>
	);

};
