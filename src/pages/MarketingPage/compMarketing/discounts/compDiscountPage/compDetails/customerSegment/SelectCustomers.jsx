import { Avatar, ClientBox, SecondaryBtn } from "src/app/components/shared";
import { NextIcon } from "src/app/utils/icons";


const SelectCustomers = () => {
  return (
    <div className="flex flex-col gap-[18px] pt-[18px]">
      <button><SecondaryBtn text="select customers" IconRight={NextIcon}/></button>
      <ClientBox avatar={<Avatar firstName="walied" lastName="sayed"/>} title="Walied sayed" details="nathan.roberts@example.com"/>
      <ClientBox avatar={<Avatar firstName="ahmed" />} title="ahmed" details="nathan.roberts@example.com"/>
    </div>
  )
}

export default SelectCustomers;