import AvatarCounter from "src/app/components/shared/avatars/AvatarCounter";
import SecondaryBtn from "src/app/components/shared/buttons/SecondaryBtn";
import ClientBox from "src/app/components/shared/detailsUser/ClientBox";
import { NextIcon } from "src/app/utils/icons";


const SelectGroup = () => {
  return (
    <div className="flex flex-col gap-[18px] py-[18px]">
      <button><SecondaryBtn text="select group" IconRight={NextIcon}/></button>
      <ClientBox avatar={<AvatarCounter count="54"/>}/>
      <ClientBox avatar={<AvatarCounter count="54"/>} title="Loyal clients"/>
    </div>
  )
}

export default SelectGroup;