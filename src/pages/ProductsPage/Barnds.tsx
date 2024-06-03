import BrandsTable from 'src/app/components/page/Products/Brands/BrandsTable';
import TopSectionBrandsTable from 'src/app/components/page/Products/Brands/TopSectionBrandsTable';

export default function Barnds() {
	return (
		<div className='custom_container'>
			<div className='flex-col-top-section-pages '>
				{/*  top section */}
				<TopSectionBrandsTable />

				{/*  table  */}
				<BrandsTable />
			</div>
		</div>
	);
}
