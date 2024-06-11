import { useTranslation } from 'react-i18next';
import { ChannelChart } from '../../optimized';
import { ProgressCardReview } from './_comp/ProgressCardReview';
import CompareButton from '../../optimized/UiKits/CompareButton';
import useSelectBox from '../../optimized/Menu/useSelectBox';
import { ReviewsTable } from './_comp/ReviewsTable';
import AnalyticsTableActions from 'src/pages/AnalyticsPage/comp/AnalyticsTableActions';
import { useState } from 'react';
import { getImageUrl } from 'src/app/utils';

export const StoreReviews = () => {
	const { selectedOption, handleSelect } = useSelectBox();
	const [arrange, setArrange] = useState('');
	const [tableData, setTableData] = useState([]);

	const handleArrangeChange = () => {
		console.log('table');
	};
	const { t } = useTranslation();

	const comparisonMenus = [
		{ id: '1', text: t('Today') },
		{ id: '2', text: t('Last week') },
		{ id: '3', text: t('Last month') },
	];
	const productsSortMenus = [
		{ text: t('Quantity Descending') },
		{ text: t('Quantity Ascending') },
		{ text: t('Price Low in first') },
		{ text: t('Price High in first') },
		{ text: t('Searches Descending') },
		{ text: t('Searches Ascending') },
	];
	return (
		<div className='custom_container grid grid-cols-1 gap-5'>
			{/* header */}
			<div className='flex flex-col gap-2 md:flex-row-global md:justify-between'>
				<div className='flex-row-global gap-1'>
					<div>
						<CompareButton
							sortMenus={comparisonMenus}
							selectedOption={selectedOption}
							handleSelect={handleSelect}
							variant='secondary'
						/>
					</div>
					<p className='subtitle text-sm'>Compared to:</p>
					<p className='title text-sm'>{selectedOption ? selectedOption : 'Today'}</p>
				</div>
				<div className='bg-success text-white text-sm flex items-center gap-2 p-2 rounded-md w-fit'>
					<img src={getImageUrl('good.svg')} />
					<span>Looks good!</span>
				</div>
			</div>

			<div className=' grid grid-cols-1 lg:grid-cols-2 gap-3'>
				<div className='col-span-1'>
					<ProgressCardReview />
				</div>
				<div className='col-span-1'>
					<ChannelChart
						title='net promoter score'
						percentage='4.75'
						labels={['Detractors', 'Passives', 'Promoters']}
						colors={['#e74c3c', '#F97316', '#2ecc71']}
						series={[44, 55, 41]}
					/>
				</div>
			</div>
			{/* table */}
			<div>
				<AnalyticsTableActions
					data={tableData}
					sortMenus={productsSortMenus}
					selectedOption={arrange}
					onSelectOption={handleArrangeChange}
					noBorder={true}
				/>
				<ReviewsTable />
			</div>
		</div>
	);
};
