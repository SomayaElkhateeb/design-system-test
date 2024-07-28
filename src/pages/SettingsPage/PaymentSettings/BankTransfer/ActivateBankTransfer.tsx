import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';

import { Form } from 'src/app/components/ui/form';
import AccountDetailsForm from './AccountDetailsForm';
import ActivateConditions from './ActivateConditions';
import useBankTransfer, { BankTransferTypes } from './useBankTransfer';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { postMerchantPayment, putMerchantPayment } from 'src/app/store/slices/settingsPage/payment/merchantPaymentMethods/merchantPaymentAsyncThunks';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'src/app/utils/hooks/form';

export default function ActivateBankTransfer() {
	//  hooks
	const { t } = useTranslation();
	const [apply_with, setApply_with] = useState('All');
	const { AddMerchantPaymentMethodSchema , handelDefaultValue } = useBankTransfer(apply_with);
	const data = [
		{
			id: 1,
			title: t('Activated'),
		},
		{
			id: 2,
			title: t('Assign as main method'),
		},
		{
			id: 3,
			title: t('Show on footer'),
		},

	];

	useEffect(() => {
		setApply_with(formStore.watch('apply_with'));
	}, []);



	// redux
	const dispatch = useAppDispatch();
	const { isLoadingAddOrUpdate } = useAppSelector((state) => state.merchantPaymentSettings);
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');


	const handleSubmit = (values: BankTransferTypes) => {
		console.log(values);

		let customValues = {
			payment_method_id: values.payment_method_id,
			account_number: values.account_number,
			account_name: values.account_name,
			bank_name: values.bank_name,
			iban: values.iban,
			price_more_than: values.price_more_than,
			items_more_than: values.items_more_than,
			apply_with: values.apply_with,
			active: values.active,
			main_method: values.main_method,
			show_in_footer: values.show_in_footer,
			additional_data: values.additional_data,
		};
		id
			? 
			dispatch(postMerchantPayment({ data: customValues, id })).then((promiseResponse) => {
				if ((promiseResponse.payload.code = 200)) {
					navigate(-1);
				}
			})
			: 
			dispatch(putMerchantPayment(customValues)).then((promiseResponse) => {
				if ((promiseResponse.payload.code = 200)) {
					navigate(-1);
				}
			});
	};
	const { formStore, onSubmit } = useForm({
		schema: AddMerchantPaymentMethodSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});


	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global '>
				<SubHeader title={t('Activate bank transfer')}>
					<SubHeaderDefaultBtns isLoading={isLoadingAddOrUpdate} onSubmit={onSubmit} />
				</SubHeader>
				<div className='grid gap-5 custom_container lg:grid-cols-3'>
					<div className='grid gap-5 lg:col-span-2 '>
						<AccountDetailsForm formStore={formStore} />
						<ActivateConditions formStore={formStore} />
					</div>
					<div className='lg:col-span-1'>
						<QuickActions data={data} />
					</div>
				</div>
				<SubHeaderMobileBtns isLoading={isLoadingAddOrUpdate} onSubmit={onSubmit} />
			</form>
		</Form>
	);
}
