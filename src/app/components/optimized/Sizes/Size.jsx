const Size = ({ size = "xl", bgColor = "red-500" }) => {
  return (
    <div
      className={`rounded bg-${bgColor} flex items-center w-fit py-[3px] px-4`}
    >
      <span className="uppercase text-sm text-white">{size}</span>
    </div>
  );
};

export default Size;
