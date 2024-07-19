import {TaxRateShowResponse, TaxRatesResponse } from "src/app/interface/settingsInterface/TaxSettingsInterface";
import { statusGlobal } from "..";


export interface taxRateSettingsSliceModel extends statusGlobal {
	taxRatesList: TaxRatesResponse[];
	taxRatesShow: TaxRateShowResponse[];
}
