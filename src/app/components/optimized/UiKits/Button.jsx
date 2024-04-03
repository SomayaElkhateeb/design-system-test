import { LinkIcon } from "src/app/utils/icons";

/**
 *
 * @param {{
 *  variant?: string;
 *  text: string;
 *  LeftIcon?: (props: { className?: string }) => import('react').ReactNode;
 *  RightIcon?: (props: { className?: string }) => import('react').ReactNode;
 *  loading?: boolean;
 *  onClick: () => void;
 *  className?: string;
 * }} props
 * @returns
 */
export default function Button(props) {
  switch (props.variant) {
    case "lin":
      return (
        <button
          onClick={props.onClick}
          className={`text-primary flex flex-row justify-center items-center capitalize ${
            props.className ?? ""
          }`}
        >
          {props.text}
          <LinkIcon className="fill-primary p-0.5 mb-1 ml-1" />
        </button>
      );
    case "sec":
      return (
        <button
          onClick={props.onClick}
          className={`btn-sec flex items-center gap-1 p-2 ${
            props.className ?? ""
          }`}
        >
          {props.LeftIcon && (
            <props.LeftIcon className="fill-pri-dark w-[18px] h-[18px]" />
          )}
          {props.text}
          {props.RightIcon && (
            <props.RightIcon className="w-3 h-3 ml-1 fill-pri-dark" />
          )}
        </button>
      );
    case "ter":
      return (
        <button
          onClick={props.onClick}
          className={`text-title text-sm capitalize font-semibold flex items-center gap-1.5 px-[15px] py-2 rounded hover:bg-light-3 ${
            props.className ?? ""
          }`}
        >
          {props.LeftIcon && (
            <props.LeftIcon className="fill-pri-dark w-[18px] h-[18px] mb-0.5" />
          )}
          {props.text}
          {props.RightIcon && (
            <props.RightIcon className="w-3 h-3 ml-1 fill-pri-dark" />
          )}
        </button>
      );
    default:
      return (
        <button
          onClick={props.onClick}
          className={`relative btn-pri flex px-1 items-center ml-1 ${
            props.className ?? ""
          }`}
        >
          {props.loading ? (
            <div className="flex items-center justify-center px-6 py-1">
              <div className="w-[18px] h-[18px] border-2 border-t-transparent rounded-full animate-spin border-white" />
            </div>
          ) : (
            <>
              {props.LeftIcon && (
                <props.LeftIcon className="fill-white w-[18px] h-[18px]" />
              )}
              <span className="mx-1 text-sm">{props.text}</span>
              {props.RightIcon && (
                <>
                  <span className="absolute bg-white w-[1px] h-full right-[24px]" />
                  <props.RightIcon className="fill-white h-3 w-3 mt-0.5 mr-1 ml-2" />
                </>
              )}
            </>
          )}
        </button>
      );
  }
}
