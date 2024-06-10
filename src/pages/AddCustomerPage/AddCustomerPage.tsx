import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, SubHeader } from 'src/app/components/optimized';
import { Address } from 'src/app/components/page';
import {
	AddCustomerPageSchema,
	AddCustomerPageSchemaValues,
} from 'src/app/components/page/AddCustomer/AddCustomerPageSchema';
import GeneralInfoCustomerForm from 'src/app/components/page/AddCustomer/GeneralInfoCustomerForm';
import useCustomHookAddCustomerForm from 'src/app/components/page/AddCustomer/HookForAddCustomerForm';

import { Form } from 'src/app/components/ui/form';

import { useForm } from 'src/app/utils/hooks/form';
export default function AddCustomerPage() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [sendGift, setSendGift] = useState(false);
	const [isName, setIsName] = useState(false);
	const [selectedOption, setSelectedOption] = useState('Add manually');

	const handleSubmit = (values: AddCustomerPageSchemaValues) => {
		console.log(values);
		// handleClose();
	};

	//  custome hook
	const { handelDefaultValue, AddCustomerPageSchema } = useCustomHookAddCustomerForm(
		sendGift,
		selectedOption,
		isName,
	);

	const { formStore, onSubmit } = useForm({
		schema: AddCustomerPageSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	// console.log(formStore.formState.errors);
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages'>
				<SubHeader title={t('Add New Customer')}>
					<Button variant='secondary' onClick={() => navigate(-1)}>
						{t('Discard')}
					</Button>
					<Button variant='primary' onClick={onSubmit}>
						{t('Save Changes')}
					</Button>
				</SubHeader>
				<div className='grid gap-5 lg:grid-cols-3 custom_container'>
					<div className='flex-col-top-section-pages lg:col-span-2'>
						{/*  general info section */}
						<GeneralInfoCustomerForm formStore={formStore} />
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
			</form>
		</Form>
	);
}
