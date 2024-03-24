const Avatars = ({ variant, src, fName, lName, count }) => {
  const shortName = `${fName?.charAt(0) || ""}${lName?.charAt(0) || ""}`;

  switch (variant) {
    case "smAvatar":
      return (
        <div className="w-8 h-8 rounded-full bg-pri-light overflow-hidden flex justify-center items-center">
          {src ? (
            <img src={src} alt="Avatar" className="w-full h-full" />
          ) : (
            <span className="text-sec-pressed font-semibold uppercase">
              {shortName}
            </span>
          )}
        </div>
      );
      break;

    case "countAvatar":
      return (
        <div className="w-10 h-10 rounded-full bg-light-2 overflow-hidden flex justify-center items-center">
          <span className="text-title text-[13px]">+{count}</span>
        </div>
      );
      break;

    default:
      return (
        <div className="w-10 h-10 rounded-full bg-pri-light overflow-hidden flex justify-center items-center">
          {src ? (
            <img src={src} alt="Avatar" className="w-full h-full" />
          ) : (
            <span className="text-sec-pressed font-semibold uppercase">
              {shortName}
            </span>
          )}
        </div>
      );
      break;
  }
};

export default Avatars;
