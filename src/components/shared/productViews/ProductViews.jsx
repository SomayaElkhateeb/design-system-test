import { getImageUrl } from "src/utils";
import {
  CameraIcon,
  CopyIcon,
  EditIcon,
  MoreIcon,
  NextIcon,
  StarIcon,
  ViewIcon,
} from "src/utils/icons";

const ProductViews = (props) => {
  // const { image, name, category, price, qty, prodId, checked } = props;
  return (
    <div>
      <div className="card w-full flex-row p-3 justify-between">
        <div className="flex gap-[5px]">
          <div className="flex flex-col items-center  justify-between">
            <input
              type="checkbox"
              id="1"
              name=""
              value=""
              className="h-5 w-5 border border-hint text-secondary form-checkbox focus:border-0 focus:ring-[1px] focus:ring-hint rounded mb-3"
            />
            <StarIcon className="fill-hint" />
          </div>
          <div className="w-[68px] h-[68px] rounded-lg border border-light-2 relative overflow-hidden">
            <img
              src={getImageUrl("images/Vector.svg")}
              alt="product"
              className="w-full object-cover"
            />

            <div className="border-light-2 absolute bottom-1 left-1  border rounded-full bg-white w-6 h-6 grid place-content-center">
              <CameraIcon className="w-[18px] h-[18px]" />
            </div>
          </div>
          <div className="flex flex-col justify-around ">
            <h2 className="title">DJI Mavic Pro 2</h2>
            <p className="subtitle">Blankets</p>
            <p className="paragraph">2 Options</p>
          </div>
        </div>

        <div className="flex flex-1 justify-around ">
          <p>SF1133569600-1</p>
          <p>5000 </p>
          <p>SAR 10000.00</p>
        </div>
        <div className="flex gap-3 w-[132px]">
          <ViewIcon className="fill-subtitle" />
          <EditIcon className="fill-subtitle" />
          <CopyIcon className="fill-subtitle" />
          <MoreIcon className="fill-subtitle" />
        </div>
        <div className="flex items-center md:ml-12 lg:ml-20">
          <NextIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductViews;
