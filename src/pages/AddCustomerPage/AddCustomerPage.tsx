import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { HeaderSettings } from 'src/app/components/optimized';
import GeneralInfoCustomerForm, {
	selectItemsInterface,
} from 'src/app/components/page/AddCustomer/GeneralInfoCustomerForm';
import PrimaryAddresseForm from 'src/app/components/page/AddCustomer/PrimaryAddresseForm';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import { z } from 'zod';
export interface addcustomerSettingsInterface {
	humanType: string;
	fullName: string;
	email: string;
	groupCustomer: selectItemsInterface[];
	PhoneNumber: string;
	fullNameAddresse: string;
	countryName: string;
	cityName: string;
	area: string;
	street: string;
	building: string;
	landmark: string;
	addressePhoneNumber: string;
	emailSubescribe: boolean;
}

export default function AddCustomerPage() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	const handleSubmit = (values: addcustomerSettingsInterface) => {
		console.log(values);
		// handleClose();
	};

	const RequiredAddresseData = z.string().min(1);

	const generalInfoSchema = {
		humanType: RequiredAddresseData,
		fullName: RequiredAddresseData,
		email: z.string().min(1).email(),
		PhoneNumber: z.string().min(7),

		groupCustomer: z.array(
			z.object({
				id: z.string().min(1),
				name: z.string().min(1),
			}),
		),
		fullNameAddresse: RequiredAddresseData,
		countryName: RequiredAddresseData,
		cityName: RequiredAddresseData,
		area: RequiredAddresseData,
		street: RequiredAddresseData,
		building: RequiredAddresseData,
		landmark: RequiredAddresseData,
		addressePhoneNumber: z.string().min(7),
		emailSubescribe: z.boolean(),
	};
	// /////////////////////////////////////
	///////////////////////////////////////
	const handelDefaultValue = () => {
		return {
			humanType: 'Male',
			fullName: '',
			email: '',
			PhoneNumber: '',
			groupCustomer: [],
			fullNameAddresse: '',
			countryName: '',
			cityName: '',
			area: '',
			street: '',
			building: '',
			landmark: '',
			addressePhoneNumber: '',
			emailSubescribe: false,
		};
	};
	// ////////////////////////////////
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
				<div className='grid gap-5 lg:grid-cols-3 container mx-auto '>
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
