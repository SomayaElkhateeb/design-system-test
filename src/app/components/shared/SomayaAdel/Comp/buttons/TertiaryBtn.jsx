import { ArrangeIcon, DownIcon } from "src/app/utils/icons";

const TertiaryBtn = ({ text = 'Show result', iconRight, iconLeft }) => {
  return (
    <button className='text-pri-dark font-semibold flex flex-row gap-x-1 pl-2 pr-2 items-center justify-center'>
      {iconLeft && <ArrangeIcon className="fill-pri-dark mt-1" />}
      {text}
      {iconRight && <DownIcon className="fill-hint mt-1" />}
      
    </button>
  );
}

export default TertiaryBtn;
