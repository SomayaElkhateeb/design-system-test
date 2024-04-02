import {
  Accordion,
  Avatars,
  Button,
  ChannelChart,
  CheckBox,
  ClientBox,
  ColumnChart,
  GroupIcons,
  HeaderSettings,
  LineChart,
  PrevNextBtn,
  SelectItem,
  SelectItems,
  StackedColumnChart,
} from "src/app/components/optimized";
import { IoIosAddCircle } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import CheckMenu from "src/app/components/optimized/Menu/CheckMenu";
import ControlProductsMenu from "src/app/components/optimized/Menu/ControlProductsMenu";
import SortMenu from "src/app/components/optimized/Menu/SortMenu";
import StatusMenu from "src/app/components/optimized/Menu/StatusMenu";
import Size from "src/app/components/optimized/Sizes/Size";
import SizeAndCloseIcon from "src/app/components/optimized/Sizes/SizeAndCloseIcon";
import PopupDelete from "src/app/components/optimized/Popups/PopupDelete";
import PopupDiscover from "src/app/components/optimized/Popups/PopupDiscover";
import PopupWelcome from "src/app/components/optimized/Popups/PopupWelcome";
// import PopupProceed from "src/app/components/optimized/Popups/PopupProceed";

const StorePage = () => {
  return (
    <div>
      {/* HeaderSettings */}
      <div>
        <HeaderSettings
          variant="settingOrder"
          to="/your-back-link"
          title="Your Title"
          btn1={{ text: "Button 1", onClick: () => {} }}
          btn2={{ text: "Button 2", onClick: () => {} }}
          btn3={{ text: "Button 3", onClick: () => {} }}
        />
        <br />
        <HeaderSettings
          variant="settingOneBtn"
          to="/your-back-link"
          title="Your Title"
          btn1={{ text: "Button 1", onClick: () => {} }}
        />
        <br />
        <HeaderSettings
          variant="settingThreeBtns"
          to="/your-back-link"
          title="Your Title"
          btn1={{ text: "Button 1", onClick: () => {} }}
          btn2={{ text: "Button 2", onClick: () => {} }}
          btn3={{ text: "Button 3", onClick: () => {} }}
        />
        <br />
        <HeaderSettings
          variant="settingWithIcons"
          to="/your-back-link"
          title="Your Title"
          btn1={{ text: "Button 1", onClick: () => {} }}
          btn2={{ text: "Button 2", onClick: () => {} }}
        />
      </div>
      <hr />
      {/* check box */}
      <CheckBox
        label="Example Label"
        onChange={(value) => console.log(value)}
      />
      <CheckBox
        label="Example Label"
        variant="minus"
        onChange={(value) => console.log(value)}
      />
      <hr />
      <br />
      <Avatars fName="somaya" lName="adel" src="/cloud.svg" />
      <Avatars fName="somaya" lName="adel" />
      <Avatars fName="elkhateeb" />
      <Avatars fName="elkhateeb" small />
      <Avatars count="20" variant="countAvatar" />
      <Avatars count="51" variant="countAvatar" />
      <hr />
      <br />
      <PrevNextBtn />
      <br />
      <GroupIcons />
      <GroupIcons variant="edit" />
      <hr />
      <br />
      <Button text="cancel" LeftIcon={IoIosAddCircle} />
      <br />
      <Button
        text="cancel"
        LeftIcon={IoIosAddCircle}
        RightIcon={FaChevronDown}
      />
      <br />
      <Button
        variant="sec"
        text="cancel"
        LeftIcon={IoIosAddCircle}
        RightIcon={FaChevronDown}
      />
      <br />
      <Button
        variant="ter"
        text="add item"
        LeftIcon={IoIosAddCircle}
        RightIcon={FaChevronDown}
      />
      <br />
      <Button text="click" variant="lin" />
      <br />
      <Button loading />
      <br />
      <hr />
      <ClientBox avatar={<Avatars fName="somaya" lName="adel" />} />
      <br />
      <ClientBox avatar={<Avatars count="51" variant="countAvatar" />} />
      <br />
      <ClientBox avatar={<Avatars fName="elkhateeb" small />} />
      <br />
      <ChannelChart />
      <br />
      <ColumnChart />
      <br /> <hr />
      <LineChart />
      <br /> <hr />
      <StackedColumnChart />
      <br /> <hr />
      <Accordion />
      <br /> <hr />
      <CheckMenu />
      <br /> <hr />
      <ControlProductsMenu />
      <br /> <hr />
      <SortMenu />
      <br /> <hr />
      <StatusMenu />
      <br /> <hr />
      <Size />
      <br /> <hr />
      <SizeAndCloseIcon />
      <SizeAndCloseIcon bgColor="sky-400" />
      <br /> <hr />
      <PopupDelete />
      <br /> <hr />
      {/* <PopupProceed /> */}
      <br /> <hr />
      <PopupDiscover />
      <br /> <hr />
      <PopupWelcome />
      <br />
    </div>
  );
};

export default StorePage;
