import { useEffect, useState } from 'react';
import InventoryTable from 'src/pages/ProductsPage/tabs/Inventory/_comp/InventoryTable';
import TopSectionInventoryTable from 'src/pages/ProductsPage/tabs/Inventory/_comp/TopSectionInventoryTable';
import { getInventoryTable } from 'src/app/store/slices/productsPage/inventory/inventoryAsyncThunks';
import { MobileProductViews } from 'src/app/components/optimized';
import { allProducts } from '../../_comp/data';
import { useAppDispatch, useAppSelector } from 'src/app/store';

export default function Inventory() {
	//  hooks
	const [array, setArray] = useState<string[]>([]);
	// redux
	const dispatch = useAppDispatch();
	const { inventory, isLoading, error } = useAppSelector((state) => state.inventory);

	useEffect(() => {
		dispatch(getInventoryTable());
	}, [dispatch]);

	

	return (
		<div className='custom_container'>
			<div className='flex-col-global '>
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

				{/* <div className='grid gap-2'>
					{allProducts?.map((product) => (
						<MobileProductViews key={product.name} {...product} />
					))}
				</div> */}
			</div>
		</div>
	);
}
