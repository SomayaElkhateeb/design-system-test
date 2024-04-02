// import { ArrangeIcon, FilterIcon } from "src/app/utils/icons";
// import { IoIosAddCircle } from "react-icons/io";
// import { FaAngleDown } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import { Button, GroupIcons, ToggleSwitch } from "src/app/components/optimized";
// import useDiscountForm from "./NewDiscount/comp/useDiscountForm";

// const Discounts = () => {
//   const navigate = useNavigate();
//   const { discountName, fixedAmount, quantityGets } = useDiscountForm();

//   return (
//     <>
//       <div className="h-[70px] flex items-center border-b-2 border-light-2 mx-3">
//         <div className="flex justify-between  w-full">
//           <Button
//             LeftIcon={IoIosAddCircle}
//             text="add new discount"
//             onClick={() => navigate("addDiscount")}
//           />

//           <div className="flex gap-8">
//             <Button
//               variant="sec"
//               LeftIcon={ArrangeIcon}
//               RightIcon={FaAngleDown}
//               text="arrange"
//             />
//             <Button variant="sec" LeftIcon={FilterIcon} text="filter" />
//           </div>
//         </div>
//       </div>

//       {/* Title Table */}
//       <div className="uppercase grid grid-cols-7 py-3 pl-5 m-3 rounded-md text-subtitle text-sm bg-white h-[43px]">
//         <h4 className="col-span-2">discount name</h4>
//         <h4>discount</h4>
//         <h4>ends at</h4>
//         <h4>active?</h4>
//         <h4>sales</h4>
//         <h4 className="flex items-center justify-center pl-5">actions</h4>
//       </div>

//       {/* Body Table */}
// <div
//   className="grid grid-cols-7 pl-5 m-3 rounded-md text-title text-sm bg-white h-[52px]"
//   style={{ lineHeight: "52px" }}
// >
//   <h3 className="font-semibold col-span-2">{discountName}</h3>{" "}
//   {/* Display discount name */}
//   <p className="">-SAR {fixedAmount}.00</p> {/* Display fixed amount */}
//   <p className="">4/5/2020</p>
//   <div className="mt-4">
//     <ToggleSwitch />
//   </div>
//   <p>SAR {quantityGets}.00</p> {/* Display quantity gets */}
//   <div className="flex items-center justify-end pr-3">
//     <GroupIcons variant="edit" />
//   </div>
// </div>
//     </>
//   );
// };

// export default Discounts;
////////////////////////////////////////////////
// useEffect(() => {
// // Retrieve existing discounts from localStorage
// const existingDiscounts =
//   JSON.parse(localStorage.getItem("discounts")) || [];
// // // Push new discount into the array
// const newDiscount = { discountName, fixedAmount, quantityGets };
// existingDiscounts.push(newDiscount);
// // // Store updated discounts array back into localStorage
// localStorage.setItem("discounts", JSON.stringify(existingDiscounts));
// }, [discountName, fixedAmount, quantityGets]);
////////////////////////////////////////////////////////////

import { useEffect, useState } from "react";
import { ArrangeIcon, FilterIcon } from "src/app/utils/icons";
import { IoIosAddCircle } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Button, GroupIcons, ToggleSwitch } from "src/app/components/optimized";
import useDiscountForm from "./NewDiscount/comp/useDiscountForm";

const Discounts = () => {
  const navigate = useNavigate();
  const { discountName, fixedAmount, quantityGets } = useDiscountForm();

  // State to store the array of discounts
  const [discounts, setDiscounts] = useState([]);

  // Effect to retrieve discounts from local storage when the component mounts
  useEffect(() => {
    const storedDiscounts = JSON.parse(localStorage.getItem("discounts")) || [];
    setDiscounts(storedDiscounts);
  }, []);

  // Function to add a new discount to the array and local storage
  const addDiscount = () => {
    const newDiscount = { discountName, fixedAmount, quantityGets };
    const updatedDiscounts = [...discounts, newDiscount];
    setDiscounts(updatedDiscounts);
    localStorage.setItem("discounts", JSON.stringify(updatedDiscounts));
  };

  return (
    <>
      <div className="h-[70px] flex items-center border-b-2 border-light-2 mx-3">
        <div className="flex justify-between  w-full">
          <Button
            LeftIcon={IoIosAddCircle}
            text="add new discount"
            onClick={() => {
              addDiscount(); // Call addDiscount when the button is clicked
              navigate("addDiscount");
            }}
          />

          <div className="flex gap-8">
            <Button
              variant="sec"
              LeftIcon={ArrangeIcon}
              RightIcon={FaAngleDown}
              text="arrange"
            />
            <Button variant="sec" LeftIcon={FilterIcon} text="filter" />
          </div>
        </div>
      </div>

      {/* Title Table */}
      <div className="uppercase grid grid-cols-7 py-3 pl-5 m-3 rounded-md text-subtitle text-sm bg-white h-[43px]">
        <h4 className="col-span-2">discount name</h4>
        <h4>discount</h4>
        <h4>ends at</h4>
        <h4>active?</h4>
        <h4>sales</h4>
        <h4 className="flex items-center justify-center pl-5">actions</h4>
      </div>

      {/* Body Table */}
      <div>
        {/* Display existing discounts */}
        {discounts.map((discount, index) => (
          <div
            key={index}
            className="grid grid-cols-7 pl-5 m-3 rounded-md text-title text-sm bg-white h-[52px]"
            style={{ lineHeight: "52px" }}
          >
            <h3 className="font-semibold col-span-2">
              {discount.discountName}
            </h3>
            <p className="">-SAR {discount.fixedAmount}.00</p>
            <p className="">4/5/2020</p>
            <div className="mt-4">
              <ToggleSwitch />
            </div>
            <p>SAR {discount.quantityGets}.00</p>
            <div className="flex items-center justify-end pr-3">
              <GroupIcons variant="edit" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Discounts;
