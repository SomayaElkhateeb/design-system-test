
import { statusGlobal } from '..';
import { generalSettingsInterface } from 'src/pages/SettingsPage/GeneralSettings/HookForGeneralForm';

export interface configurationsSliceModel extends statusGlobal {
	generalSettings: generalSettingsInterface | null;
}