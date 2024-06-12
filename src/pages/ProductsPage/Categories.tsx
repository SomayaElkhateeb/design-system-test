import TopSectionCategoriesTable from 'src/app/components/page/Products/Categories/TopSectionCategoriesTable';
import { CategoryTable } from './New/_comps/CategoryTable';

export default function Categories() {
	return (
		<div className='custom_container'>
			<div className='flex-col-top-section-pages'>
				{/*  top section */}
				<TopSectionCategoriesTable />

				{/* table */}
				<CategoryTable />
			</div>
		</div>
	);
}
