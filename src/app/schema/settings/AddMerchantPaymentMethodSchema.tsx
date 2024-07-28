import { InferredZodSchema } from 'src/app/utils/hooks/form';
import useBankTransfer from 'src/pages/SettingsPage/PaymentSettings/BankTransfer/useBankTransfer';


const { AddMerchantPaymentMethodSchema } = useBankTransfer();

export type AddMerchantPaymentMethodSchemaValues = InferredZodSchema<typeof AddMerchantPaymentMethodSchema>;
