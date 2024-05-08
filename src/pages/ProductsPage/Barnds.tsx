import BrandsTable from 'src/app/components/page/Products/Brands/BrandsTable';
import TopSectionBrandsTable from 'src/app/components/page/Products/Brands/TopSectionBrandsTable';

export default function Barnds() {
	return (
		<div className=' container mx-auto '>
			<div className=' flex flex-col '>
				{/*  top section */}
				<TopSectionBrandsTable />

				{/*  table  */}
				<BrandsTable />
			</div>
		</div>
	);
}
