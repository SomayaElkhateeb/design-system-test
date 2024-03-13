import { AddFillIcon, DownIcon } from "src/utils/icons"


const TertiaryBtn = ({ text = 'Show result', iconRight, iconLeft }) => {
  return (
    <button className='text-pri-dark font-semibold flex flex-row gap-x-1 pl-2 pr-2 items-center justify-center' >
    <AddFillIcon className="fill-pri-dark mt-1"/>
    {iconLeft}
    {text}
    {iconRight}
    {/* put this style when you write icon */}
    {/* <DownIcon className="fill-hint mt-1"/> */}
</button>
  )
}

export default TertiaryBtn