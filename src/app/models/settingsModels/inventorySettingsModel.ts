import { InventoryExportAndImport, InventoryList, InventoryShow } from 'src/app/interface/settingsInterface/inventorySettingsInterface';
import { statusGlobal } from '..';

export interface inventorySliceModel extends statusGlobal {
	inventoryExport: InventoryExportAndImport[];
	inventoryList: InventoryList[];
    inventoryShow:InventoryShow[];
	isLoadingAddOrUpdate: boolean;
	isLoadingDelete: boolean;
}