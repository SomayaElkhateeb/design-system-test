import { useTranslation } from 'react-i18next';
import SubCategoryTable from './_comp/SubCategoryTable';
import TopSectionCategoriesTable from './_comp/TopSectionCategoriesTable';

export const SubCategories = () => {
	const { t } = useTranslation();

	return (
		<div className='custom_container pt-5'>
			<div className='flex-col-global'>
				{/*  top section */}
				<TopSectionCategoriesTable title={t('Add Subcategory')} />

				{/* table */}
				<SubCategoryTable />

				{/*  case of small media */}
				{/* <div className='flex-col-global sm:hidden'>
					{categoryData?.map((e, i) => (
						<CustomersComponenet
							noAvatar
							id={e.id}
							settingMenus={Menue}
							key={i}
							firstName={e.name}
							email={e.subtitle}
							imageUrl={e.img}
						/>
					))}
				</div> */}
			</div>
		</div>
	);
};
// Menue={Menue} categoryData={categoryData}
