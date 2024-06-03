import { useTranslation } from 'react-i18next';
import DropDownMenu from './DropDownMenu';
import CheckboxWithChild from './CheckboxWithChild';
import { useState } from 'react';
export default function CategoryStatusFilter() {
	//  hooks
	const { t } = useTranslation();
	const [filterData, setFilterData] = useState<string[]>([]);
	const [filterDataWoman, setFilterDataWoman] = useState<string[]>([]);
	
	return (
		<DropDownMenu title={t('Category')}>
			<CheckboxWithChild
				parent='Men'
				label1='Cloth'
				label2='Perfumes'
				filterData={filterData}
				setFilterData={setFilterData}
			/>
			<CheckboxWithChild
				parent='Women'
				label1='Cloth'
				label2='Perfumes'
				filterData={filterDataWoman}
				setFilterData={setFilterDataWoman}
			/>
		</DropDownMenu>
	);
}
