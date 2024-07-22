import { RolesData, RolesList } from 'src/app/interface/settingsInterface/rolesSettingsInterface';
import { statusGlobal } from '..';

export interface rolesSliceModel extends statusGlobal {
	permissions: RolesData[];
	rolesList: RolesList[];
	isLoadingDelete: boolean;
}
