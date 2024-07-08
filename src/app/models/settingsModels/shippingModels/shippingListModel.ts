import { ShippingListInterface } from 'src/app/interface/settingsInterface/shipping/ShippingListInterface';
import { statusGlobal } from '../..';

export interface shippingListSliceModel extends statusGlobal {
	shippingList: ShippingListInterface[];
}
