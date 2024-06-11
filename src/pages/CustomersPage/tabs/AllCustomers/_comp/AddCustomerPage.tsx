import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SubHeader } from 'src/app/components/optimized';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { Address } from 'src/app/components/page';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import {
	AddCustomerPageSchema,
	AddCustomerPageSchemaValues,
} from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/AddCustomerPageSchema';
import GeneralInfoCustomerForm from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/GeneralInfoCustomerForm';
import useCustomHookAddCustomerForm from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/HookForAddCustomerForm';
import PrimaryAddressForm from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/PrimaryAddressForm';

const AddCustomerPage: React.FC = () => {
	// hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [sendGift, setSendGift] = useState<boolean>(false);
	const [isName, setIsName] = useState<boolean>(false);
	const [selectedOption, setSelectedOption] = useState<string>('Add manually');

	const handleSubmit = (values: AddCustomerPageSchemaValues) => {
		console.log(values);
		// handleClose();
	};

	// custom hook
	const { handelDefaultValue } = useCustomHookAddCustomerForm(sendGift, selectedOption, isName);

	const { formStore, onSubmit } = useForm<AddCustomerPageSchemaValues>({
		schema: AddCustomerPageSchema,
		handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages relative'>
				<SubHeader title={t('Add New Customer')}>
					<SubHeaderDefaultBtns onSubmit={() => alert('Submit')} />
				</SubHeader>
				<div className='grid gap-5 lg:grid-cols-3 custom_container'>
					<div className='flex-col-top-section-pages lg:col-span-2'>
						{/* general info section */}
						<GeneralInfoCustomerForm formStore={formStore} />
						{/* primary Address section */}
						<PrimaryAddressForm formStore={formStore} />
						<div className='global-cards gap-[1.3rem]'>
							<h2 className='title'>{t('Add primary address')}</h2>
							<div className='flex-col-top-section-pages md:w-[65%]'>
								<Address
									customer
									sendGift={sendGift}
									setSendGift={setSendGift}
									isName={isName}
									setIsName={setIsName}
									selectedOption={selectedOption}
									setSelectedOption={setSelectedOption}
									formStore={formStore}
								/>
							</div>
						</div>
					</div>
				</div>
				<SubHeaderMobileBtns onSubmit={() => alert('Submit')} />
			</form>
		</Form>
	);
};

export default AddCustomerPage;
