import { useState } from 'react';
import { z } from 'zod';
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

export interface newDiscountInterface {
	name: string;
	value: number;
	sales: number;
	miniQuantity: number;
	percentage: number;
	percentageGets?: number;
	date?: Date | null;
}

const discountSchema = {
	name: z.string().min(3).max(60),
	value: z.coerce.number().min(0),
	sales: z.coerce.number().min(0),
	miniQuantity: z.coerce.number().min(0),
	percentage: z.coerce.number().min(0).max(100),
	percentageGets: z.coerce.number().min(0).max(100).optional(),
	date: z.date().nullable().optional(),
};

const NewDiscount = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const [state, setState] = useState();
	const data = [{ id: 1, title: t('On') }];

	const handelDefaultValue = () => {
		return {
			name: '',
			value: 0,
			sales: 0,
			miniQuantity: 0,
			percentage: 0,
			percentageGets: 0,
			date: null,
		};
	};

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
						<ActiveDates setState={setState} />
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
