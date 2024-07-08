import { TaxRatesResponse } from 'src/app/interface/settingsInterface/tax/taxRates/TaxRatesListInterface';
import { statusGlobal } from '../..';

export interface taxRatesListSliceModel extends statusGlobal {
	taxRatesList: TaxRatesResponse[];
}
