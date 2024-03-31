import { ArrangeIcon, FilterIcon } from "src/app/utils/icons";
import { IoIosAddCircle } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Button } from "src/app/components/optimized";
const Discounts = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-[70px] flex items-center border-b-2 border-light-2 mx-3">
        <div className="flex justify-between  w-full">
          <Button
            LeftIcon={IoIosAddCircle}
            text="add new discount"
            onClick={() => navigate("addDiscount")}
          />

          <div className="flex gap-8">
            {/* SecondaryBtn */}
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
    </div>
  );
};

export default Discounts;
