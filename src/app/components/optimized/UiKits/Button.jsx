import { LinkIcon } from "src/app/utils/icons";

const Button = ({
  variant,
  text,
  LeftIcon,
  RightIcon,
  background,
  isLoading,
  onClick,
  ...rest
}) => {
  // if (isLoading) {
  //   return (
  //     <>
  //       {!background ? (
  //         <div className="btn-pri w-[121px] h-[35px] flex justify-center">
  //           <div className="spinner-btn" />
  //         </div>
  //       ) : (
  //         <div className="w-[121px] h-[35px] flex justify-center">
  //           <div className="spinner-btn border-primary border-t-transparent" />
  //         </div>
  //       )}
  //     </>
  //   );
  // }

  switch (variant) {
    case "linkBtn":
      return (
        <button
          onClick={onClick}
          className=" text-primary flex flex-row justify-center items-center capitalize"
        >
          {text}

          {RightIcon && <LinkIcon className="fill-primary p-1 mb-1" />}
        </button>
      );

    case "secondaryBtn":
      return (
        <button
          onClick={onClick}
          className="btn-sec flex items-center gap-1 p-2"
        >
          {LeftIcon && <LeftIcon className="fill-pri-dark w-[18px] h-[18px]" />}
          {text}
          {RightIcon && (
            <RightIcon className="fill-pri-dark h-3 w-3 ml-1 mt-1" />
          )}
        </button>
      );

    case "loading":
      return (
        <>
          {!background ? (
            <div className="btn-pri w-[121px] h-[35px] flex justify-center">
              <div className="spinner-btn" />
            </div>
          ) : (
            <div className="w-[121px] h-[35px] flex justify-center">
              <div className="spinner-btn border-primary border-t-transparent" />
            </div>
          )}
        </>
      );
    case "tertiaryBtn":
      return (
        <button
          onClick={onClick}
          className="text-title text-sm capitalize font-semibold flex items-center gap-1.5 px-[15px] py-2 rounded hover:bg-light-3"
        >
          {LeftIcon && (
            <LeftIcon className="fill-pri-dark w-[18px] h-[18px] mb-0.5" />
          )}
          {text}
          {RightIcon && <RightIcon className="fill-pri-dark ml-1 h-3 w-3" />}
        </button>
      );

    default:
      return (
        <button
          onClick={onClick}
          className="relative btn-pri flex px-1 items-center"
          {...rest}
        >
          {LeftIcon && <LeftIcon className="fill-white w-[18px] h-[18px]" />}
          <span className="mx-1 text-sm">{text}</span>
          {RightIcon && (
            <>
              <span className="absolute bg-white w-[1px] h-full right-[24px]" />
              <RightIcon className="fill-white h-3 w-3 mt-0.5 mr-1 ml-2" />
            </>
          )}
        </button>
      );
  }
};

export default Button;
