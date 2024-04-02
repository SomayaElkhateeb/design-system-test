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
  ToggleSwitch,
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
import Table from "src/app/components/optimized/Table/Table";
import HeaderTable from "src/app/components/optimized/Table/HeaderTable";
import BodyTable from "src/app/components/optimized/Table/BodyTable";
import Body from "src/app/components/optimized/Table/Body";
import Header from "src/app/components/optimized/Table/Header";
// import Table, { Header, Body } from "src/app/components/optimized/UiKits/Table";

// import PopupProceed from "src/app/components/optimized/Popups/PopupProceed";
const headerData = [
  {
    name: "discount name",
    type: "discount",
    date: "ends at",
    active: "active?",
    sales: "sales",
    actions: "actions",
  },
];

const bodyData = [
  {
    id: 1,
    name: "summer discount",
    value: 2000,
    date: "15 / 4 / 2020",
    sales: 20000,
  },
  {
    id: 2,
    name: "summer discount",
    value: 2000,
    date: "15 / 4 / 2020",
    sales: 200000,
  },
  {
    id: 3,
    name: "summer discount",
    value: 2000,
    date: "15 / 4 / 2020",
    sales: 200000,
  },
  {
    id: 4,
    name: "summer discount",
    value: 2000,
    date: "15 / 4 / 2020",
    sales: 200000,
  },
  {
    id: 5,
    name: "summer discount",
    value: 2000,
    date: "15 / 4 / 2020",
    sales: 200000,
  },
  {
    id: 6,
    name: "summer discount",
    value: 2000,
    date: "15 / 4 / 2020",
    sales: 200000,
  },

  {
    id: 7,
    name: "summer discount",
    value: 2000,
    date: "15 / 4 / 2020",
    sales: 200000,
  },

  {
    id: 8,
    name: "summer discount",
    value: 2000,
    date: "15 / 4 / 2020",
    sales: 200000,
  },

  {
    id: 9,
    name: "summer discount",
    value: 2000,
    date: "15 / 4 / 2020",
    sales: 200000,
  },

  {
    id: 10,
    name: "summer discount",
    value: 2000,
    date: "15 / 4 / 2020",
    sales: 200000,
  },
  {
    id: 11,
    name: "summer discount",
    value: 2000,
    date: "15 / 4 / 2020",
    sales: 200000,
  },
  {
    id: 12,
    name: "summer discount",
    value: 2000,
    date: "15 / 4 / 2020",
    sales: 200000,
  },
];

const StorePage = () => {
  return (
    <div className="bg-sky-100">
      <Table>
        <HeaderTable>
          <Header headerData={headerData} />
        </HeaderTable>
        <BodyTable>
          <Body bodyData={bodyData} />
        </BodyTable>
      </Table>
      {/* HeaderSettings */}
      <br />
      {/* <div>
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
      </div> */}
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
      {/* <PopupDelete /> */}
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
