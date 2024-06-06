import { useEffect, useState } from 'react';
import InventoryTable from 'src/app/components/page/Products/Inventory/InventoryTable';
import TopSectionInventoryTable from 'src/app/components/page/Products/Inventory/TopSectionInventoryTable';
import { products } from './AllProducts';
import { MobileProductViews } from 'src/app/components/optimized';
import { useDispatch, useSelector } from 'react-redux';
import { getInventoryTable } from 'src/app/store/slices/productsPage/inventory/inventoryAsyncThunks';

export default function Inventory() {
	//  hooks
	const [array, setArray] = useState<string[]>([]);
	// redux
	const dispatch = useDispatch();
	const { isLoading, inventory, error } = useSelector((state) => state.inventory);
	useEffect(() => {
		dispatch(getInventoryTable());
	}, [dispatch]);

	return (
		<div className='custom_container'>
			<div className='flex-col-top-section-pages '>
				{/*  top section */}
				<TopSectionInventoryTable />

				{/*  table */}

				<InventoryTable
					array={array}
					setArray={setArray}
					inventory={inventory}
					isLoading={isLoading}
				/>

				{/*  case of small media only  */}

				<div className='grid gap-2'>
					{products?.map((product) => (
						<MobileProductViews key={product.name} {...product} />
					))}
				</div>
			</div>
		</div>
	);
}
