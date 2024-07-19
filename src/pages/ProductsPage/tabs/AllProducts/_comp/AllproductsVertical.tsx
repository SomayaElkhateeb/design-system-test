import { ProductCard } from 'src/app/components/optimized';
import { menuType } from 'src/app/components/optimized/Buttons/ActionsComp';
import { getImageUrl } from 'src/app/utils';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import { Product } from 'src/pages/ProductsPage/_comp/data';

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
	const { language } = useLanguage();
	return (
		<div className='grid gap-[1.2rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[1rem]'>
			{products?.map((e) => (
				<ProductCard
					settingMenus={settingMenus}
					key={e.id}
					array={array}
					setArray={setArray}
					imageUrl={e.images[0]?.original_image_url? e.images[0]?.original_image_url : ''}
					name={language === 'ar' ? e.ar.name : e.en.name}
					category={e.category}
					quantity={e.qty}
					price={e.price}
					sku={e.sku}
					id={e.id}
					options={e.option}
				/>
			))}
		</div>
	);
}
