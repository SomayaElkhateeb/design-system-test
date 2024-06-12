import { SubHeader } from 'src/app/components/optimized';
import SubCategoryTable from './_comp/subCategory/SubCategoryTable';
import TopSubCategoriesTable from './_comp/subCategory/TopSubCategoriesTable';
import { useTranslation } from 'react-i18next';

export const SubCategories = () => {
	const { t } = useTranslation();
	return (
		<>
			<SubHeader title={t('Categories')} />
			<div className='custom_container pt-5'>
				<div className='flex-col-global'>
					{/*  top section */}
					<TopSubCategoriesTable />

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
		</>
	);
};
// Menue={Menue} categoryData={categoryData}
