import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { HeaderSettings } from 'src/app/components/optimized';
import GeneralInfoCustomerForm from 'src/app/components/page/AddCustomer/GeneralInfoCustomerForm';
import useCustomHookAddCustomerForm, {
	addCustomerInterface,
} from 'src/app/components/page/AddCustomer/HookForAddCustomerForm';
import PrimaryAddresseForm from 'src/app/components/page/AddCustomer/PrimaryAddresseForm';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
export default function AddCustomerPage() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	const handleSubmit = (values: addCustomerInterface) => {
		console.log(values);
		// handleClose();
	};

	//  custome hook
	const { generalInfoSchema, handelDefaultValue } = useCustomHookAddCustomerForm();
	// ////////////////////////////////
	const { formStore, onSubmit } = useForm({
		schema: generalInfoSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages'>
				<HeaderSettings
					submit
					variant='settingTwoBtns'
					title={t('Add New Customer')}
					btn1={{
						text: t('Discard'),
						onClick: () => {
							navigate(-1);
						},
					}}
					btn2={{
						text: t('Save Changes'),
						onClick: () => {},
					}}
				/>
				<div className='grid gap-5 lg:grid-cols-3 custom_container'>
					<div className='flex-col-top-section-pages lg:col-span-2'>
						{/*  general info section */}
						<GeneralInfoCustomerForm formStore={formStore} />

						{/* primary addresses section */}
						<PrimaryAddresseForm formStore={formStore} />
					</div>
				</div>
			</form>
		</Form>
	);
}
