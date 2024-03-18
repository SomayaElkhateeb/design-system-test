import Avatar from "src/app/components/shared/avatars/Avatar";
import SecondaryBtn from "src/app/components/shared/buttons/SecondaryBtn";
import ClientBox from "src/app/components/shared/detailsUser/ClientBox";
import { NextIcon } from "src/app/utils/icons";


const SelectCustomers = () => {
  return (
    <div className="flex flex-col gap-[18px] py-[18px]">
      <button><SecondaryBtn text="select customers" IconRight={NextIcon}/></button>
      <ClientBox avatar={<Avatar firstName="walied" lastName="sayed"/>}/>
      <ClientBox avatar={<Avatar firstName="ahmed" />} title="Loyal clients"/>
    </div>
  )
}

export default SelectCustomers;