import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { HeaderSettings } from 'src/app/components/optimized';
import BasicInfo from './BasicInfo/BasicInfo';
import ActiveDates from '../../../../app/components/page/discount/Comp/ActiveDates';
import CustomerSegment from 'src/app/components/page/discount/Comp/CustomerSegment/CustomerSegment';
import { postDiscounts } from 'src/app/store/slices/marketing/discounts/discountsAsyncThunks';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import MinimumRequirements from 'src/app/components/page/discount/Comp/MinimumRequirements';
import useCustomHookNewDiscount, { newDiscountInterface } from './HookForNewDiscount';

const NewDiscount = () => {
	// hook
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { t } = useTranslation();

	// custom hook
	const { handelDefaultValue, discountSchema } = useCustomHookNewDiscount();
	const data = [{ id: 1, title: t('On') }];

	const handleSaveChanges = async () => {
		try {
			const formData = formStore.getValues();
			await dispatch(postDiscounts(formData));
			navigate('/marketing/discounts');
		} catch (error) {
			console.error('Error while saving changes:', error);
		}
	};

	const handleSubmit: (validatedData: newDiscountInterface) => void = (
		values: newDiscountInterface,
	) => {
		console.log(values);
		handleSaveChanges();
	};

	const { formStore, onSubmit } = useForm({
		schema: discountSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit}>
				<HeaderSettings
					variant='settingTwoBtns'
					submit
					title={t('Add Discount')}
					btn1={{
						text: t('Discard'),
						onClick: () => {
							navigate(-1);
						},
					}}
					btn2={{ text: t('Save Changes'), onClick: () => {} }}
				/>
				<div className='p-4 flex justify-between gap-7'>
					<div className='w-full flex flex-col gap-[18px]'>
						<BasicInfo formStore={formStore} />
						<CustomerSegment />
						<MinimumRequirements formStore={formStore} />
						<ActiveDates formStore={formStore} />
					</div>
					<div>
						<QuickActions data={data} />
					</div>
				</div>
			</form>
		</Form>
	);
};
export default NewDiscount;
