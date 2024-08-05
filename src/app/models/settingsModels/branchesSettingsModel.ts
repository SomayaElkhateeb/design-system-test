import { statusGlobal } from '..';
import { LocationBranches } from 'src/app/interface/settingsInterface/branchSettingsInterface';

export interface configurationsSliceModel extends statusGlobal {
	branches: LocationBranches[];
    branch: LocationBranches | null;
}