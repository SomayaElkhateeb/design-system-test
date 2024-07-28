import { PaymentMethod } from "src/app/interface/settingsInterface/MerchantPaymentMethodsSettingsInterface";
import { statusGlobal } from "..";


export interface paymentMethodsSliceModel extends statusGlobal {
	paymentList: PaymentMethod[];
	paymentShow: PaymentMethod | null;
	isLoadingAddOrUpdate: boolean;
}
