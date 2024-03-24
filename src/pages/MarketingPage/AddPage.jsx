import React from "react";
import { useParams } from "react-router-dom";
import { AppsSetupLayout, NewDiscount } from ".";

const AddPage = () => {
  const { add } = useParams();
  const tabs = {
    addDiscount: <NewDiscount />,
    appSetup: <AppsSetupLayout />,
  };
  return tabs[add];
};

export default AddPage;
