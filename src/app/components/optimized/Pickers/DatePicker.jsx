import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { capitalizeFirstLetter } from "src/app/utils";

const DatePicker = ({ label }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          "DatePicker",
          "MobileDatePicker",
          "DesktopDatePicker",
          "StaticDatePicker",
        ]}
      >
        <DemoItem>
          <span className="text-pri-dark text-sm">
            {capitalizeFirstLetter(label)}
          </span>
          <MobileDatePicker defaultValue={dayjs("2022-04-17")} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DatePicker;
