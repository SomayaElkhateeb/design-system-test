import { SecondaryBtn , AvatarCounter , ClientBox } from "src/app/components/shared";
import { NextIcon } from "src/app/utils/icons";

const SelectGroup = () => {
  return (
    <div className="flex flex-col gap-[18px] pt-[18px]">
      <button><SecondaryBtn text="select group" IconRight={NextIcon}/></button>
      <ClientBox avatar={<AvatarCounter count="54"/>} />
      <ClientBox avatar={<AvatarCounter count="54"/>} title="Loyal clients"/>
    </div>
  )
}

export default SelectGroup;