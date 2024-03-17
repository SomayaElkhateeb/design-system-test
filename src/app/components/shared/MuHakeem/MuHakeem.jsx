import FormStates from "./Comp/Card/FormStates";
import GetStartedCard from "./Comp/Card/GetStartedCard/GetStartedCard";
import ManageAccountCard from "./Comp/Card/ManageAccountCard";
import RatedCard from "./Comp/Card/RatedCard";
import TelegramCard from "./Comp/Card/TelegramCard";
import TourCard from "./Comp/Card/TourCard";
import CheckboxWithImage from "./Comp/InputsFields/InputsCollection/CheckboxWithImage";
import TextFieldsTest from "./Comp/InputsFields/TextFieldsTest";
import FormikRowTest from "./Comp/InputsFields/formik/FormikRowTest";
import Accordion from "./Comp/Tab/Accordion";
import InputRangeSlider from "./Comp/Tab/InputRangeSlider";
import MultiRangeSlider from "./Comp/Tab/MultiRangeSlider";
import Steps from "./Comp/Tab/Steps";
import Tabs from "./Comp/Tab/Tabs";
import CustomToastTest from "./Comp/Toast/CustomToastTest";

const items = [
  <div className="bg-blue-200 h-64 w-64 flex justify-center items-center">
    Slide 1
  </div>,
  <div className="bg-green-200 h-64 w-64 flex justify-center items-center">
    Slide 2
  </div>,
  <div className="bg-yellow-200 h-64 w-64 flex justify-center items-center">
    Slide 3
  </div>,
  // Add more slides as needed
];
const MuHakeem = () => {
  return (
    <div className=" flex flex-col space-y-8">
      {/* <div className=" mx-auto py-8 w-full">
        <h1 className="text-2xl font-bold mb-4">React Carousel Example</h1>
        <Carousel items={items} />
      </div> */}

      <GetStartedCard size="full" />
      <CheckboxWithImage />
      <FormStates />
      <MultiRangeSlider />
      <InputRangeSlider />
      <div className="p-4 w-[500px]">
        <Accordion title="Section 1">
          <p>This is the content of section 1.</p>
        </Accordion>
        <Accordion title="Section 2">
          <p>This is the content of section 2.</p>
        </Accordion>
      </div>
      <Tabs />
      <Steps />
      <GetStartedCard />
      <CustomToastTest />
      <TextFieldsTest />
      <TelegramCard />
      <RatedCard />
      <ManageAccountCard />
      <FormikRowTest />
      <TourCard />
    </div>
  );
};

export default MuHakeem;
