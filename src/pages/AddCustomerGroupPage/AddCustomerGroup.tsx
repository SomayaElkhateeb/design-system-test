import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { HeaderSettings } from 'src/app/components/optimized';
import { selectItemsInterface } from 'src/app/components/page/AddCustomer/GeneralInfoCustomerForm';
import ChooseCustomers from 'src/app/components/page/AddCustomerGroup/ChooseCustomers';
import GeneralInfoCustomerGroupInfo from 'src/app/components/page/AddCustomerGroup/GeneralInfo';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import { z } from 'zod';

export interface addCustomerGroupInterface {
	groupName: string;
	description: string;
	active: boolean;
	Customers: selectItemsInterface[];
}
export default function AddCustomerGroup() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();

	const generalInfosSchema = {
		Customers: z.array(
			z.object({
				id: z.string().min(1),
				name: z.string().min(1),
			}),
		),
		groupName: z.string().min(1),
		description: z.string().min(1),
		active: z.boolean(),
	};
	const handelDefaultValue = () => {
		return {
			groupName: '',
			description: '',
			active: false,
			Customers: [],
		};
	};
	const handleSubmit = (values: addCustomerGroupInterface) => {
		console.log(values);
		// handleClose();
	};
	const { formStore, onSubmit } = useForm({
		schema: generalInfosSchema,
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
				<div className='grid gap-5 lg:grid-cols-3 container mx-auto'>
					<div className='flex-col-top-section-pages lg:col-span-2'>
						<GeneralInfoCustomerGroupInfo formStore={formStore} />
                        <ChooseCustomers formStore={formStore} />
					</div>
				</div>
			</form>
		</Form>
	);
}
