import { IUsers } from 'src/app/interface/settingsInterface/UsersSettingsInterface';
import { statusGlobal } from '..';
import { addOwnerInterface } from 'src/app/components/page/SettingPage/PermissionsAndUsers/Owner/TransferOwnership';

export interface usersSliceModel extends statusGlobal {
	users: IUsers[];
    userById:addOwnerInterface;
}