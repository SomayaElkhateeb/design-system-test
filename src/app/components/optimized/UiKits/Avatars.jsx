const Avatars = ({ variant, src, fName, lName, count, small }) => {
  const shortName = `${fName?.charAt(0) || ""}${lName?.charAt(0) || ""}`;

  return variant === "countAvatar" ? (
    <div className="w-10 h-10 rounded-full bg-light-2 overflow-hidden flex justify-center items-center">
      <span className="text-title text-[13px]">
        {count > 50 ? "+" : ""}
        {count}
      </span>
    </div>
  ) : (
    <div
      className={`rounded-full bg-pri-light overflow-hidden flex justify-center items-center ${
        small ? "w-8 h-8" : "w-10 h-10"
      }`}
    >
      {src ? (
        <img src={src} alt="Avatar" className="w-full h-full" />
      ) : (
        <span className="text-sec-pressed font-semibold uppercase">
          {shortName}
        </span>
      )}
    </div>
  );
};

export default Avatars;
