
import { ProductCard } from 'src/app/components/optimized';
import { menuType } from 'src/app/components/optimized/Buttons/ActionsComp';

import useLanguage from 'src/app/utils/hooks/useLanguage';
import { Product } from 'src/pages/ProductsPage/_comp/data';

export default function AllproductsVertical({
	products,
	array,
	setArray,
	settingMenus,
	setOpenDialog,
	setEdit_product,
}: {
	products: Product[];
	array: string[];
	setArray: (e: string[]) => void;
	settingMenus: menuType[];
	setOpenDialog: (e: boolean) => void;
	setEdit_product: (e: Product) => void;
}) {
	return (
		<div className='grid gap-[1.2rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[1rem]'>
			{products?.map((e) => (
				<ProductCard
					key={e?.id}
					product={e}
					setOpenDialog={setOpenDialog}
					setEdit_product={setEdit_product}
					settingMenus={settingMenus}
					array={array}
					setArray={setArray}
					options={e.option}
				/>
			))}
		</div>
	);
}
