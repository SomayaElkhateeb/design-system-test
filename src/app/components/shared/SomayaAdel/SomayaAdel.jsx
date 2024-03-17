import Accordion from "./Comp/accordionSetting/Accordion";
import Avatar from "./Comp/avatars/Avatar";
import AvatarSm from "./Comp/avatars/AvatarSm";
import LinkBtn from "./Comp/buttons/LinkBtn";
import PrimaryBtn from "./Comp/buttons/PrimaryBtn";
import SecondaryBtn from "./Comp/buttons/SecondaryBtn";
import SpinnerBtn from "./Comp/buttons/SpinnerBtn";
import TertiaryBtn from "./Comp/buttons/TertiaryBtn";
import ChannelChart from "./Comp/charts/ChannelChart";
import ColumnChart from "./Comp/charts/ColumnChart";
import LineChart from "./Comp/charts/LineChart";
import StackedColumnChart from "./Comp/charts/StackedColumnChart";
import DoWeShip from "./Comp/customComp/DoWeShip";
import Icons from "./Comp/customComp/Icons";
import PrevNextBtn from "./Comp/customComp/PrevNextBtn";
import StatusCheckBox from "./Comp/customComp/StatusCheckBox";
import StatusMinusBox from "./Comp/customComp/StatusMinusBox";
import Tooltip from "./Comp/customComp/Tooltip";
import CheckMenu from "./Comp/menus/CheckMenu";
import ControlProductsMenu from "./Comp/menus/ControlProductsMenu";
import SortMenu from "./Comp/menus/SortMenu";
import StatusMenu from "./Comp/menus/StatusMenu";
import PopupProceed from "./Comp/popups/PopupProceed";
import PopupWelcome from "./Comp/popups/PopupWelcome";
import PopupDelete from "./Comp/popups/PopupDelete";
import PopupDiscover from "./Comp/popups/PopupDiscover";
import Size from "./Comp/sizes/Size";
import SizeIcon from "./Comp/sizes/SizeIcon";
import SizeAndCloseIcon from "./Comp/sizes/SizeAndCloseIcon";
import {AddFillIcon, DownIcon} from 'src/app/utils/icons'
import avatarSrc from '../../../assets/brand/cloud.svg';
import { AppsIcon, UpIcon } from "src/app/utils/icons";


const SomayaAdel = () => {
  return <div>
    {/* <Accordion /> */}
    {/* <AvatarSm name="adel" /> */}
    {/* <Avatar src={avatarSrc}  /> */}

    <br />
    {/* <LinkBtn text="section"/> */}
    {/* <PrimaryBtn IconRight={DownIcon} /> */}
    {/* <PrimaryBtn  /> */}
    {/* <SecondaryBtn IconRight={DownIcon} IconLeft={AddFillIcon}/>      */}

    <br />
    {/* <SpinnerBtn background='true'/>
    <SpinnerBtn />
    <TertiaryBtn iconRight='true' iconLeft='true'/>
    <TertiaryBtn iconRight='true' />
    <TertiaryBtn iconLeft='true'/> */}

  
      <ChannelChart />
      <ColumnChart />
      <LineChart />
      <StackedColumnChart />
    

    {/* <DoWeShip /> */}
    <br />
    {/* <Icons /><br /> */}
    {/* <PrevNextBtn /><br /> */}
    {/* <StatusCheckBox /><br /> */}
    {/* <StatusMinusBox /><br /> */}
    {/* <Tooltip /><br /> */}

    {/* <br />
    <CheckMenu /><br />
    <ControlProductsMenu /><br />
    <SortMenu /><br />
    <StatusMenu /><br /> */}

    {/* <PopupDelete /><br /> */}
    {/* <PopupDiscover /><br /> */}

    {/* <PopupProceed /> */}
    {/* <PopupWelcome /> <br /> */}

    {/* <Size /><br/>
    <Size  size="m" bgColor="red-500"/><br/>
    <SizeIcon /><br />
    <SizeIcon Icon={AppsIcon} size="l"/><br />
    <SizeAndCloseIcon />
    <SizeAndCloseIcon bgColor='red-500' size="2xl"/> */}



  </div>;
};

export default SomayaAdel;
