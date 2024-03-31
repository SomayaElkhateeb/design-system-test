import { LinkIcon } from "src/app/utils/icons";

const Button = ({ variant, text, LeftIcon, RightIcon, loading, onClick }) => {
  switch (variant) {
    case "lin":
      return (
        <button
          onClick={onClick}
          className=" text-primary flex flex-row justify-center items-center capitalize"
        >
          {text}
          <LinkIcon className="fill-primary p-0.5 mb-1 ml-1" />
        </button>
      );

    case "sec":
      return (
        <button
          onClick={onClick}
          className="btn-sec flex items-center gap-1 p-2"
        >
          {LeftIcon && <LeftIcon className="fill-pri-dark w-[18px] h-[18px]" />}
          {text}
          {RightIcon && <RightIcon className="fill-pri-dark h-3 w-3 ml-1" />}
        </button>
      );

    case "ter":
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
          className="relative btn-pri flex px-1 items-center ml-1"
        >
          {loading ? (
            <div className="py-1 px-6 flex justify-center items-center">
              <div className="w-[18px] h-[18px] border-2 border-t-transparent rounded-full animate-spin border-white" />
            </div>
          ) : (
            <>
              {LeftIcon && (
                <LeftIcon className="fill-white w-[18px] h-[18px]" />
              )}
              <span className="mx-1 text-sm">{text}</span>
              {RightIcon && (
                <>
                  <span className="absolute bg-white w-[1px] h-full right-[24px]" />
                  <RightIcon className="fill-white h-3 w-3 mt-0.5 mr-1 ml-2" />
                </>
              )}
            </>
          )}
        </button>
      );
  }
};

export default Button;
