import { Countries } from 'src/app/interface/settingsInterface/countriesSettingsInterface';
import { statusGlobal } from '..';

export interface countriesSliceModel extends statusGlobal {
	allCountries: Countries[];
}