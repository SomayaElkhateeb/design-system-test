import { PermissionsData, RolesList } from 'src/app/interface/settingsInterface/rolesSettingsInterface';
import { statusGlobal } from '..';

export interface rolesSliceModel extends statusGlobal {
	permissions: PermissionsData[];
	rolesList: RolesList[];
	isLoadingDelete: boolean;
}
