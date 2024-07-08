import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';

import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';

import { Form } from 'src/app/components/ui/form';

import { useForm } from 'src/app/utils/hooks/form';

import { Address } from 'src/app/components/page';
import {
	AddAddressInterface,
	createAddressSchema,
	getDefaultValues,
} from 'src/app/components/page/Orders/AddOrder/Comp/useOrderAddress';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { PostAddCustomerAddressRequest } from 'src/app/store/slices/customersPage/AddresseCustomer/AddressesCustomersAsyncThunks';

export default function AddNewAddressCustomer() {
	//  hooks
	const { t } = useTranslation();
	const [selectedOption, setSelectedOption] = useState('Add manually');
	const [sendGift, setSendGift] = useState(false);
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	// ////////////////
	//  selectors
	const { isLoadingAddOrUpdate } = useAppSelector((state) => state.AddressesCustomer);
	// ////////////////
	const handleSubmit = (values: AddAddressInterface) => {
		const sendingData: AddAddressInterface = { ...values, customer_id: id };

		dispatch(PostAddCustomerAddressRequest(sendingData)).then((promiseResponse) => {
			if ((promiseResponse.payload.code = 200)) {
				navigate(-1);
			}
		});
	};

	const schema = { ...createAddressSchema(sendGift, selectedOption, false, true) };
	//  custom hook

	const { formStore, onSubmit } = useForm({
		schema: schema,
		handleSubmit: handleSubmit,
		defaultValues: getDefaultValues(),
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global'>
				<SubHeader title={t('Add new address')}>
					<SubHeaderDefaultBtns isLoading={isLoadingAddOrUpdate} onSubmit={onSubmit} />
				</SubHeader>
				<div className='custom_container '>
					<div className='global-cards md:w-[75%]'>
						<Address<AddAddressInterface>
							giftOption
							useMapPicker
							formStore={formStore}
							sendGift={sendGift}
							setSendGift={setSendGift}
							selectedOption={selectedOption}
							setSelectedOption={setSelectedOption}
						/>
					</div>

					<SubHeaderMobileBtns isLoading={isLoadingAddOrUpdate} onSubmit={onSubmit} />
				</div>
			</form>
		</Form>
	);
}
