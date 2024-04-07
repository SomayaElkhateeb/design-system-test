import TabPanel from "@mui/lab/TabPanel";
import { Tab } from "@mui/material";
import { useTranslation } from "react-i18next";

import AllCustomers from "src/app/components/page/Customers/AllCustomersComp";
import Tabs from "src/app/components/page/Customers/Tabs";
import CustomersGroups from "src/app/components/page/Customers/CustomersGroupsComp";

const CustomersPage = () => {
  //  hooks
  const { t } = useTranslation()
  return (
    //  tabs section

    <Tabs

      body={
        <>
          <TabPanel value="1"><AllCustomers /></TabPanel>
          <TabPanel value="2"><CustomersGroups /></TabPanel>
        </>
      }
    >
      {/*  children */}
      <Tab label={t("All Customers")} value="1" />
      <Tab label={t("Customers Groups")} value="2" />
    </Tabs>

  );
};

export default CustomersPage;
