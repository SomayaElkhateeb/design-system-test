import {
  CheckBox,
  HeaderSettings,
  SelectItem,
  SelectItems,
} from "src/app/components/optimized";

const StorePage = () => {
  return (
    <div>
      <HeaderSettings
        variant="settingIcons"
        to="/your-back-link"
        title="Your Title"
        btn1={{ text: "Button 1", onClick: () => {} }}
        btn2={{ text: "Button 2", onClick: () => {} }}
      />
      <br />

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

      <CheckBox
        label="Example Label"
        onChange={(value) => console.log(value)}
      />

      <br />

      {/* <SelectItems /> */}
      <br />
      <br />
      <br />
    </div>
  );
};

export default StorePage;
