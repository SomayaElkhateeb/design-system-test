import { ProductCard } from 'src/app/components/optimized';
import { menuType } from 'src/app/components/optimized/Buttons/ActionsComp';
import { Product } from 'src/app/interface/ProductInterface';
import { getImageUrl } from 'src/app/utils';

export default function AllproductsVertical({
	products,
	array,
	setArray,
	settingMenus,
}: {
	products: Product[];
	array: string[];
	setArray: (e: string[]) => void;
	settingMenus: menuType[];
}) {
	return (
		<div className='grid gap-[1.2rem] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[1rem]'>
			{products?.map((e) => (
				<ProductCard
					settingMenus={settingMenus}
					key={e.id}
					array={array}
					setArray={setArray}
					imageUrl={getImageUrl(e.imageUrl)}
					id={e.id}
					options={e.option}
					name={e.name}
					quantity={e.quantity}
					price={e.price}
					sku={e.SKU}
					category={e.category}
				/>
			))}
		</div>
	);
}
