import { Avatars, Button, ClientBox } from "src/app/components/optimized";
import { FaAngleRight } from "react-icons/fa6";

const SelectCustomers = () => {
  return (
    <div className="flex flex-col gap-[18px] pt-[18px]">
      <div>
        <Button
          text="select customers"
          RightIcon={FaAngleRight}
          variant="secondaryBtn"
        />
      </div>
      <ClientBox
        avatar={<Avatars fName="walied" lName="sayed" />}
        title="Walied sayed"
        details="nathan.roberts@example.com"
      />
      <ClientBox
        avatar={<Avatars fName="ahmed" />}
        title="ahmed"
        details="nathan.roberts@example.com"
      />
    </div>
  );
};

export default SelectCustomers;
