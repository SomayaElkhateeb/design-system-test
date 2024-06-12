import { useTranslation } from 'react-i18next';

import BaseTable, {
	GlobalTableCell,
} from 'src/app/components/optimized/TableLayoutGlobal/base.table';

import { Switch } from 'src/app/components/ui/switch';
import { getImageUrl } from 'src/app/utils';
import { UseLanguage } from 'src/app/utils/hooks/LanguageHook';
import { AddFillIcon, DownIcon, MoreIcon, MoveIcon } from 'src/app/utils/icons';
import { Category } from '../Categories';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';

export const CategoryTable = ({
	categoryData,
	Menue,
}: {
	categoryData: Category[];
	Menue: { id: string; text: string; icon: React.ReactNode }[];
}) => {
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

	//  custom hook for select setting item

	const { selectedOption, handleSelect } = useSelectBox();

	const actionsButtonStyleAr = 'justify-end flex items-center gap-4 cursor-pointer text-[1.2rem]';
	const actionsButtonStyleEn = 'justify-start flex items-center gap-4 cursor-pointer text-[1.2rem]';
	return (
		<BaseTable
			language={language}
			color='#55607A'
			headers={headers.map((h) => h)}
			rows={categoryData?.map((e, i) => {
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
							<div className={language === 'ar' ? actionsButtonStyleAr : actionsButtonStyleEn}>
								<div className='flex gap-4 items-center'>
									<AddFillIcon className='text-subtitle' />
									<ThreeDotsButton
										sortMenus={Menue}
										selectedOption={selectedOption}
										handelSelect={handleSelect}
									/>
								</div>
								<div>
									<DownIcon
										className={
											language === 'ar'
												? 'rotate-90 cursor-pointer text-subtitle'
												: ' text-subtitle -rotate-90 cursor-pointer'
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
