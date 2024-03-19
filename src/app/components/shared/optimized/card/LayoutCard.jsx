const LayoutCard = ({ children }) => {
  return (
    <div className="w-full shadow-md rounded-lg overflow-hidden bg-white p-5">
      <div className="px-4 py-2">{children}</div>
    </div>
  );
};

export default LayoutCard;
