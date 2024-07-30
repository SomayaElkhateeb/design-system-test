import { IUsers } from 'src/app/interface/settingsInterface/UsersSettingsInterface';
import { statusGlobal } from '..';


export interface usersSliceModel extends statusGlobal {
    users: IUsers[];
    userById: IUsers | null;
    isLoadingAddOrUpdate: boolean;
}