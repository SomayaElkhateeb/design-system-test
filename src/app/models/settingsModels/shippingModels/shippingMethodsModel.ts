import { shippingMethodsInterface } from 'src/app/interface/settingsInterface/shipping/ShippingInterface';
import { statusGlobal } from '../..';

export interface shippingMethodsSliceModel extends statusGlobal {
	shippingMethod: shippingMethodsInterface[];
}
