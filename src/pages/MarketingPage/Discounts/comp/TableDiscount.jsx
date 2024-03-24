import { GroupIcons, ToggleSwitch } from "src/app/components/optimized";

const TableDiscount = ({ isLoading, discounts }) => {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const discountList = discounts ? (
    discounts.map((item) => (
      <div
        key={item.id}
        className="grid grid-cols-7 pl-5 m-3 rounded-md text-title text-sm bg-white h-[52px]"
        style={{ lineHeight: "52px" }}
      >
        <h3 className="font-semibold col-span-2">
          {capitalizeFirstLetter(item.name)}
        </h3>
        <p className="">-SAR {item.disc}.00</p>
        <p className="">{item.ends}</p>
        <div className="mt-4">
          <ToggleSwitch />
        </div>
        <p>SAR {item.sales}.00</p>
        <div className="flex items-center justify-end pr-3">
          <GroupIcons variant="edit" />
        </div>
      </div>
    ))
  ) : (
    <h4>There is no discounts yet</h4>
  );
  return (
    <>
      {isLoading ? (
        "loading..."
      ) : (
        <>
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
          {discountList}
        </>
      )}
    </>
  );
};

export default TableDiscount;
