import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { PiSignOutBold } from "react-icons/pi";
import { IoAddCircle } from "react-icons/io5";
import { GoCopy } from "react-icons/go";

const ManageAccountCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden w-80">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Manage Account</h2>
      </div>
      <div className="p-4">
        <div className="flex space-x-2 justify-between">
          <h3 className="text-md font-normal">Stores</h3>
          <IoAddCircle size={24} />
        </div>
      </div>

      <div className="p-4">
        <CopyableSection content="content------------" />
      </div>

      <CollapsibleSection>
        {/* title */}
        <div>
          <h3 className="text-lg font-semibold ">Rasma</h3>
          <h3 className="text-sm font-normal mb-2">Rasma.dookan.net</h3>
        </div>
      </CollapsibleSection>

      <CollapsibleSection>
        <div className="flex space-x-2 items-center">
          <GrLanguage size={24} />
          <h3 className="text-md font-normal">العربية</h3>
        </div>
      </CollapsibleSection>
      <div className="p-4">
        <div className="flex space-x-2 items-center">
          <PiSignOutBold size={24} />
          <h3 className="text-md font-normal">ٍSign Out</h3>
        </div>
      </div>
    </div>
  );
};

export default ManageAccountCard;

// CollapsibleSection
const CollapsibleSection = ({ children }) => {
  const [isCollapsibleOpen, setCollapsibleOpen] = useState(false);

  const handleToggleCollapsible = () => {
    setCollapsibleOpen(!isCollapsibleOpen);
  };

  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex justify-between">
        {children}
        <button
          className="text-blue-500 hover:underline focus:outline-none"
          onClick={handleToggleCollapsible}
        >
          {isCollapsibleOpen ? <FaChevronDown /> : <FaChevronRight />}
        </button>
      </div>
      {isCollapsibleOpen && <div className="mt-3">Open</div>}
    </div>
  );
};

// CopyableSection
const CopyableSection = ({ content }) => {
  const [isCopied, setCopied] = useState(false);
  const [copiedContent, setCopiedContent] = useState("");

  useEffect(() => {}, [copiedContent]);

  const handleCopy = () => {
    setCopied(true);
    setCopiedContent(content);
    // You can add additional logic here when the content is copied.
  };

  return (
    <div className="border-b border-gray-200">
      <div className="flex space-x-2 justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold ">Rasma</h3>
          <h3 className="text-sm font-normal mb-2">Rasma.dookan.net</h3>
        </div>
        {isCopied ? (
          <div className="text-blue-500 mt-2">Copied!</div>
        ) : (
          <button onClick={() => handleCopy(content)}>
            <GoCopy size={24} />
          </button>
        )}
      </div>
    </div>
  );
};
