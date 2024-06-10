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
import PrimaryAddresseForm from 'src/app/components/page/AddCustomer/PrimaryAddresseForm';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
export default function AddCustomerPage() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	const handleSubmit = (values: AddCustomerPageSchemaValues) => {
		console.log(values);
		// handleClose();
	};

	//  custome hook
	const { handelDefaultValue } = useCustomHookAddCustomerForm();

	const { formStore, onSubmit } = useForm({
		schema: AddCustomerPageSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});
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
								<Address customer={true} />
							</div>
						</div>
					</div>
				</div>
			</form>
		</Form>
	);
}
