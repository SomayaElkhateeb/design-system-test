import { TaxRateShowResponse } from 'src/app/interface/settingsInterface/tax/taxRates/TaxRatesShowInterface';
import { statusGlobal } from '../..';

export interface taxRatesShowSliceModel extends statusGlobal {
	taxRatesShow: TaxRateShowResponse[];
}
