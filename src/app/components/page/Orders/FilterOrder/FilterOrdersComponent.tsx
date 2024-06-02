import { useTranslation } from 'react-i18next';
import FilterSideBar from '../../../SideBar/FilterSideBar';

import { IoCloseCircleOutline } from 'react-icons/io5';
import { useState } from 'react';
import { Switch } from '../../../ui/switch';
import DropDownMenu from './DropDownMenu';
import FilterQuantity from './FilterQuantity';
import FilterPrice from './FilterPrice';
import { Button } from 'src/app/components/optimized';

export default function FilterOrdersComponent({
	HandelCloseDrawer,
	openDrawer,
}: {
	openDrawer: boolean;
	HandelCloseDrawer: () => void;
}) {
	//  hooks
	const { t } = useTranslation();
	const [checked, setChecked] = useState(false);
	const divClass = 'flex-row-global justify-between';
	const titleClass = 'text-title font-normal text-[.8rem]';
	return (
		<FilterSideBar handelClose={HandelCloseDrawer} sideDrawerOpen={openDrawer}>
			<div className='flex-col-top-section-pages gap-[1.2rem]'>
				{/*  top section */}
				<div className={divClass}>
					<h3 className='title text-[1.2rem]'>{t('Products Filters')}</h3>
					<IoCloseCircleOutline
						onClick={HandelCloseDrawer}
						className='cursor-pointer text-[1.2rem]'
					/>
				</div>

				<div className={divClass}>
					<h3 className={titleClass}>{t('Show favorites')}</h3>
					<Switch checked={checked} onCheckedChange={() => setChecked(!checked)} />
				</div>
				<hr />
				<DropDownMenu title={t('Product status')}></DropDownMenu>
				<DropDownMenu title={t('Category')}></DropDownMenu>
				<DropDownMenu title={t('Accessories')}></DropDownMenu>
				<DropDownMenu title={t('Brand')}></DropDownMenu>
				<DropDownMenu title={t('Sales')}></DropDownMenu>
				<DropDownMenu title={t('Product type')}></DropDownMenu>

				<FilterPrice />
				<FilterQuantity />

				<hr />
				<div className='flex-row-global justify-between'>
					<Button>{t('Show Results')}</Button>
					<Button className='bg-pri-dark'>{t('Saved Filters')}</Button>
					<Button variant='tertiary' className='text-[red] bg-white'>
						{t('Reset')}
					</Button>
				</div>
			</div>
		</FilterSideBar>
	);
}
