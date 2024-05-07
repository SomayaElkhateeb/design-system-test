import { useState } from 'react';
import InventoryTable from 'src/app/components/page/Products/Inventory/InventoryTable';
import TopSectionInventoryTable from 'src/app/components/page/Products/Inventory/TopSectionInventoryTable';

export default function Inventory() {

    //  hooks
    const [array,setArray]=useState<string[]>([])
	return (
		<div className=' container mx-auto '>
			<div className=' flex flex-col '>
				{/*  top section */}
				<TopSectionInventoryTable  />

				{/*  table */}

				<InventoryTable array={array} setArray={setArray}/>
			</div>
		</div>
	);
}
