import { useTranslation } from 'react-i18next';
// import SelectBox from 'src/app/components/optimized/UiKits/SelectBox';

const options = [{ value: 'design', label: 'design' }];
const StoreDetails = ({
	register,
	errors,
}: {
	register: (...args: any[]) => any;
	errors: string;
}) => {
	const { t } = useTranslation();
	return (
		<section className='global-cards'>
			<h3 className='text-title font-semibold'>{t('Store details')}</h3>

			<div className='w-[27rem] flex flex-col gap-7'>
				<>
					<input type='text' {...register('storeName')} placeholder='store name' />
					<p className='text-red-600 text-sm'>{errors.storeName?.message || ''}</p>
				</>
				<>
					<input type='email' {...register('storeEmail')} placeholder='email' />
					<p className='text-red-600 text-sm'>{errors.storeEmail?.message || ''}</p>
				</>
				<select {...register('storeIndustry')}>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				<>
					<input type='number' {...register('storeContactPhone')} placeholder='phone' />
					<p className='text-red-600 text-sm'>{errors.storeContactPhone?.message || ''}</p>
				</>
			</div>
		</section>
	);
};

export default StoreDetails;
