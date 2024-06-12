import { useTranslation } from 'react-i18next';

import BaseTable , {GlobalTableCell} from 'src/app/components/optimized/TableLayoutGlobal/base.table';

import { Switch } from 'src/app/components/ui/switch';
import { getImageUrl } from 'src/app/utils';
import { UseLanguage } from 'src/app/utils/hooks/LanguageHook';
import { AddFillIcon, DownIcon, MoreIcon, MoveIcon } from 'src/app/utils/icons';

export const CategoryTable = () => {
	//  hooks
	const language = UseLanguage();
	const { t } = useTranslation();
	//  headers

	const headers = [
		{ title: t('name & description') },
		{ title: t('products No.') },
		{ title: t('subcategories') },
		{ title: t('availability') },
		{ title: t('actions') },
	];

	// body
	const data = [
		{
			id: 1,
			img: 'product/product.svg',
			name: 'General Wellness',
			subtitle: 'lorem ipsum dolor sit amet dolor ...',
			products: 51,
			subcategories: 179,
			active: true,
		},
		{
			id: 2,
			img: 'product/product.svg',
			name: 'General Wellness',
			subtitle: 'lorem ipsum dolor sit amet dolor ...',
			products: 51,
			subcategories: 179,
			active: false,
		},
	];

	return (
		<BaseTable
			language={language}
			color='#55607A'
			headers={headers.map((h) => h)}
			rows={data?.map((e, i) => {
				return {
					item: e,
					elements: [
						<GlobalTableCell
							sx={{
								fontWeight: 600,
							}}
						>
							<div className='flex items-center gap-2'>
								<MoveIcon />
								<div className='size-8 border border-constrained rounded-md overflow-hidden'>
									<img src={getImageUrl(e.img)} />
								</div>

								<div>
									{e.name}
									<p className='subtitle text-sm'>{e.subtitle}</p>
								</div>
							</div>
						</GlobalTableCell>,
						<GlobalTableCell>{e.products}</GlobalTableCell>,
						<GlobalTableCell>{e.subcategories}</GlobalTableCell>,
						<GlobalTableCell>
							<Switch checked={e.active} />
						</GlobalTableCell>,
						<GlobalTableCell>
							<div className='flex justify-between'>
								<div className='flex gap-4'>
									<AddFillIcon />
									<MoreIcon />
								</div>
								<div>
									<DownIcon
										className={
											language === 'ar' ? 'rotate-90 cursor-pointer' : '-rotate-90 cursor-pointer'
										}
									/>
								</div>
							</div>
						</GlobalTableCell>,
					],
				};
			})}
		/>
	);
};
