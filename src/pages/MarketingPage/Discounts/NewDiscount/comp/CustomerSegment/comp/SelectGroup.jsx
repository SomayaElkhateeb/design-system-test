import { Avatars, Button, ClientBox } from "src/app/components/optimized";
import { FaAngleRight } from "react-icons/fa6";

const SelectGroup = () => {
  return (
    <div className="flex flex-col gap-[18px] pt-[18px]">
      <div>
        <Button
          text="select group"
          RightIcon={FaAngleRight}
          variant="secondaryBtn"
        />
      </div>
      <ClientBox avatar={<Avatars count="54" variant="countAvatar" />} />
      <ClientBox
        avatar={<Avatars count="54" variant="countAvatar" />}
        title="Loyal clients"
      />
    </div>
  );
};

export default SelectGroup;
