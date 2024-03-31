import { Link } from "react-router-dom";
import { GroupIcons } from "..";
import {
  BackIcon,
  LinkIcon,
  LoadUpdateIcon,
  MoreIcon,
  PrintIcon,
} from "src/app/utils/icons";

const HeaderSettings = ({
  to = "/",
  variant,
  title,
  btn1 = { text: "", onClick: () => {} },
  btn2 = { text: "", onClick: () => {} },
  btn3 = { text: "", onClick: () => {} },
}) => {
  return (
    <div className="flex justify-between items-center bg-white pl-2 pr-4 h-14">
      <div className="flex items-center gap-1">
        <Link to={to}>
          <BackIcon />
        </Link>
        <h2 className="text-title font-semibold capitalize">{title}</h2>
      </div>

      <div className="flex gap-6 items-center">
        {variant === "settingIcons" && (
          <>
            <IconButton onClick={btn1.onClick}>
              <LinkIcon className="fill-title p-1 mb-2" />
            </IconButton>
            <IconButton onClick={btn2.onClick}>
              <MoreIcon className="fill-pri-dark" />
            </IconButton>
          </>
        )}
        {variant === "settingOrder" && (
          <>
            <ButtonWithIcon
              onClick={btn1.onClick}
              icon={<LoadUpdateIcon className="p-0.5 fill-pri-dark" />}
            >
              Update Status
            </ButtonWithIcon>
            <ButtonWithIcon
              onClick={btn2.onClick}
              icon={<PrintIcon className="p-0.5 fill-pri-dark" />}
            >
              Print Invoice
            </ButtonWithIcon>
            <IconButton onClick={btn3.onClick}>
              <MoreIcon />
            </IconButton>
          </>
        )}
        {variant === "settingOneBtn" && (
          <Button onClick={btn1.onClick} variant="pri">
            {btn1.text}
          </Button>
        )}
        {variant === "settingTwoBtns" && (
          <>
            <Button onClick={btn1.onClick} variant="sec">
              {btn1.text}
            </Button>
            <Button onClick={btn2.onClick} variant="pri">
              {btn2.text}
            </Button>
          </>
        )}
        {variant === "settingThreeBtns" && (
          <>
            <Button onClick={btn1.onClick} variant="ter">
              {btn1.text}
            </Button>
            <Button onClick={btn2.onClick} variant="sec">
              {btn2.text}
            </Button>
            <Button onClick={btn3.onClick} variant="pri">
              {btn3.text}
            </Button>
          </>
        )}
        {variant === "settingWithIcons" && (
          <>
            <GroupIcons />
            <Button onClick={btn1.onClick} variant="sec">
              {btn1.text}
            </Button>
            <Button onClick={btn2.onClick} variant="pri">
              {btn2.text}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

const IconButton = ({ children, onClick }) => (
  <button onClick={onClick} className="p-1">
    {children}
  </button>
);

const ButtonWithIcon = ({ children, onClick, icon }) => (
  <button onClick={onClick} className="flex items-center gap-2">
    {icon}
    <span className="font-semibold text-title text-sm">{children}</span>
  </button>
);

const Button = ({ children, onClick, variant }) => (
  <button onClick={onClick} className={`btn-${variant}`}>
    {children}
  </button>
);

export default HeaderSettings;
