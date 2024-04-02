import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { capitalizeFirstLetter } from "src/app/utils";

const TimePicker = ({ label }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          "TimePicker",
          "MobileTimePicker",
          "DesktopTimePicker",
          "StaticTimePicker",
        ]}
      >
        <DemoItem>
          <span className="text-pri-dark text-sm">
            {capitalizeFirstLetter(label)}
          </span>
          <MobileTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default TimePicker;
