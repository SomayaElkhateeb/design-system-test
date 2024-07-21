import { useTranslation } from 'react-i18next';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import { BrandsInterface } from 'src/app/interface/BrandInterface';
import { getImageUrl } from 'src/app/utils';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';
import BaseTable, {
	GlobalTableCell,
} from 'src/app/components/optimized/TableLayoutGlobal/base.table';
import { TableCell } from '@mui/material';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { Switch } from 'src/app/components/ui/switch';
import { settingMenus } from 'src/pages/CustomersPage/_comp/CustomersTables/CustomersTable';
import ArrowTables from 'src/app/components/optimized/UiKits/ArrowTables';
import { actionsButtonStyle } from '../../AllProducts/_comp/AllProductsTable';

export default function BrandsTable({
	settingMenus,
	brands,
	isLoading,
}: {
	settingMenus: settingMenus[];
	brands: BrandsInterface[];
	isLoading: boolean;
}) {
	//  hooks
	const { language } = useLanguage();
	const { t } = useTranslation();
	const classData = actionsButtonStyle();
	//  headers

	const brandssHeaders = [
		{ title: t('Name & Description') },
		{ title: t('Products No.') },
		{ title: t('Availability') },
		{ title: t('actions') },
	];

	//  custom hook for select setting item

	const { selectedOption, handleSelect } = useSelectBox();

	return (
		<BaseTable
			isLoading={isLoading}
			language={language}
			color='#55607A'
			headers={brandssHeaders.map((h) => h)}
			rows={brands?.map((e: BrandsInterface, i: number) => {
				return {
					item: e,
					elements: [
						<GlobalTableCell>
							<div className='flex items-center gap-[.4rem] '>
								<img src={getImageUrl(e.img)} loading='lazy' alt={e.title} />

								<div className='flex-col-global gap-2'>
									<p className='title'>{e.title}</p>
									<p className='subtitle'>{e.describtion}</p>
								</div>
							</div>
						</GlobalTableCell>,

						<GlobalTableCell>{e.productsNo}</GlobalTableCell>,

						<TableCell>
							<Switch checked={e.available} />
						</TableCell>,

						<TableCell>
							<div className={classData}>
								<ThreeDotsButton
									sortMenus={settingMenus}
									selectedOption={selectedOption}
									handelSelect={handleSelect}
								/>

								<ArrowTables path={`/brands/${e?.id}`} />
							</div>
						</TableCell>,
					],
				};
			})}
		/>
	);
}
