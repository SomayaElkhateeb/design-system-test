import { MoreIcon } from "src/utils/icons";
import { getImageUrl } from "src/utils";

const MopileProductViews = (props) => {
  return (
    <div className="w-[343px] flex justify-between">
      <div className="flex gap-[5px] items-center">
        <div className="w-[60px] h-[60px] rounded-lg border border-light-2 overflow-hidden">
          <img src={getImageUrl("images/Vector.svg")} alt="product" />
        </div>
        <div className="flex flex-col justify-around ">
          <h2 className="title">DJI Mavic Pro 2</h2>
          <p className="subtitle">Blankets</p>
          <p className="paragraph">Qty: 50</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <MoreIcon className="fill-subtitle" />
        <p className="paragraph">SAR 10000.00</p>
      </div>
    </div>
  );
};

export default MopileProductViews;
