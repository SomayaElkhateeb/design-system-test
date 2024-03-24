// import dispatch
import { useDispatch, useSelector } from "react-redux";

import { getDiscounts } from "src/app/store/slices/marketing/marketingSlice";
import { useNavigate } from "react-router-dom";
// import components
import { Button } from "src/app/components/optimized";
import TableDiscount from "./comp/TableDiscount";
import { IoIosAddCircle } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import {
  AddFillIconWhite,
  ArrangeIcon,
  FilterIcon,
  DownIconSm,
} from "src/app/utils/icons";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Discounts = () => {
  const navigate = useNavigate();

  const { isLoading, discounts, error } = useSelector(
    (state) => state.discounts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiscounts());
  }, [dispatch]);

  return (
    <>
      {error && <p>{error}</p>} {/* TODO: toast error */}
      {/* header discount */}
      <div className="h-[70px] flex items-center border-b-2 border-light-2 mx-3">
        <div className="flex justify-between  w-full">
          <Button
            LeftIcon={IoIosAddCircle}
            text="add new discount"
            onClick={() => navigate("addDiscount")}
          />

          {/* navigate(""); */}
          <div className="flex gap-8">
            {/* SecondaryBtn */}
            <Button
              variant="secondaryBtn"
              LeftIcon={ArrangeIcon}
              RightIcon={FaAngleDown}
              text="arrange"
            />

            <Button
              variant="secondaryBtn"
              LeftIcon={FilterIcon}
              text="filter"
            />
          </div>
        </div>
      </div>
      {/* Table discount */}
      <TableDiscount isLoading={isLoading} discounts={discounts} />
    </>
  );
};

export default Discounts;
