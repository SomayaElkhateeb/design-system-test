import { MdChevronLeft } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoEyeOutline } from "react-icons/io5";
import { RxCopy } from "react-icons/rx";

const FormStates = () => {
  return (
    <div className="bg-blue-50 flex justify-between items-center p-4">
      <div className="flex items-center">
        <MdChevronLeft size={24} />
        <h1 className="text-md font-semibold text-black">Add Product</h1>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-3">
          <IoEyeOutline size={24} />
          <RxCopy size={24} />
          <HiOutlineDotsHorizontal size={24} />
        </div>
        <button className="px-4 py-2 border border-black bg-gray-50 text-black rounded-md ">
          Discard
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default FormStates;
