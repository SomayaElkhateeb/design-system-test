import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { HeaderSettings } from 'src/app/components/optimized';
import { AddCustomerGroupPageSchema } from 'src/app/components/page/AddCustomerGroup/AddCustomerGroupSchema';
import ChooseCustomers from 'src/app/components/page/AddCustomerGroup/ChooseCustomers';
import GeneralInfoCustomerGroupInfo from 'src/app/components/page/AddCustomerGroup/GeneralInfo';
import useCustomHookAddCustomerGroupForm from 'src/app/components/page/AddCustomerGroup/HookForAddCustomerGroupForm';
import { Form } from 'src/app/components/ui/form';
import { InferredZodSchema, useForm } from 'src/app/utils/hooks/form';

export default function AddCustomerGroup() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();

	//  custome hook
	const { handelDefaultValue } = useCustomHookAddCustomerGroupForm();
	const handleSubmit = (values: InferredZodSchema<typeof AddCustomerGroupPageSchema>) => {
		console.log(values);
		// handleClose();
	};
	const { formStore, onSubmit } = useForm({
		schema: AddCustomerGroupPageSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages'>
				<HeaderSettings
					submit
					variant='settingTwoBtns'
					title={t('Add New Group')}
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
						<GeneralInfoCustomerGroupInfo formStore={formStore} />
						<ChooseCustomers formStore={formStore} />
					</div>
				</div>
			</form>
		</Form>
	);
}
