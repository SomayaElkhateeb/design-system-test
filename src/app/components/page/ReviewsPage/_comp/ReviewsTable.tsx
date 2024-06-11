import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import BaseTable, { GlobalTableCell } from '../../Customers/TableLayoutGlobal/base.table';
import { GoStarFill } from 'react-icons/go';

export const ReviewsTable = () => {
	//  hooks
	const language = UseLanguage();
	const { t } = useTranslation();
	//  headers

	const CouponsHeaders = [
		{ title: t('day') },
		{ title: t('Ratings No.') },
		{ title: t('Average') },
		{ title: t('Top customer group') },
		{ title: t('Orders') },
		{ title: t('Returns') },
	];

	// body
	const data = [
		{
			id: 1,
			day: '24 Apr 2020',
			ratings: 520,
			average: 4.1,
			customerGroup: 'Niche group',
			Orders: 420,
			Returns: 420,
		},
		{
			id: 2,
			day: '24 Apr 2020',
			ratings: 520,
			average: 4.1,
			customerGroup: 'Niche group',
			Orders: 420,
			Returns: 420,
		},
	];

	return (
		<BaseTable
			language={language}
			color='#55607A'
			headers={CouponsHeaders.map((h) => h)}
			rows={data?.map((e, i) => {
				return {
					item: e,
					elements: [
						<GlobalTableCell
							sx={{
								fontWeight: 600,
							}}
						>
							{e.day}
						</GlobalTableCell>,

						<GlobalTableCell>{e.ratings}</GlobalTableCell>,
						<GlobalTableCell>
							<div className='flex items-center gap-1'>
								<GoStarFill size={14} color='gold' />
								{e.average}
							</div>
						</GlobalTableCell>,

						<GlobalTableCell>{e.customerGroup}</GlobalTableCell>,
						<GlobalTableCell>{e.Orders}</GlobalTableCell>,
						<GlobalTableCell>{e.Returns}</GlobalTableCell>,
					],
				};
			})}
		/>
	);
};
