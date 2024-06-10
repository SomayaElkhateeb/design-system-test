import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import {
	AddCustomerPageSchema,
	AddCustomerPageSchemaValues,
} from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/AddCustomerPageSchema';
import GeneralInfoCustomerForm from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/GeneralInfoCustomerForm';
import useCustomHookAddCustomerForm from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/HookForAddCustomerForm';
import PrimaryAddressForm from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/PrimaryAddressForm';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';

export default function AddCustomerPage() {
	//  hooks
	const { t } = useTranslation();
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
			<form onSubmit={onSubmit} className='flex-col-top-section-pages relative'>
				<SubHeader title={t('Add New Customer')}>
					<SubHeaderDefaultBtns onSubmit={() => alert('Submit')} />
				</SubHeader>
				<div className='grid gap-5 lg:grid-cols-3 custom_container'>
					<div className='flex-col-top-section-pages lg:col-span-2'>
						{/*  general info section */}
						<GeneralInfoCustomerForm formStore={formStore} />

						{/* primary Addresss section */}
						<PrimaryAddressForm formStore={formStore} />
					</div>
				</div>

				<SubHeaderMobileBtns onSubmit={() => alert('Submit')} />
			</form>
		</Form>
	);
}
