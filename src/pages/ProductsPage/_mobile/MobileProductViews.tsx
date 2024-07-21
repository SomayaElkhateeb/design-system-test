//? Unfinished task
//! ===============
// todo Action Button
import { getImageUrl } from 'src/app/utils';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { useTranslation } from 'react-i18next';
import { settingMenus } from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/CustomersTable';
import { Product } from '../_comp/data';
import useLanguage from 'src/app/utils/hooks/useLanguage';

interface ProductViewsProps {
	product: Product;
	settingMenus?: settingMenus[];
	setEdit_product: (e: Product) => void;
	setOpenDialog: (e: boolean) => void;
}
export default function MobileProductViews({
	product,
	settingMenus,
	setEdit_product,
	setOpenDialog,
}: ProductViewsProps) {
	const { selectedOption, handleSelect } = useSelectBox();
	const { t } = useTranslation();
	const { language } = useLanguage();

	const handelEdit = (e: Product) => {
		if (e.type === 'simple') {
			setOpenDialog(true);
			setEdit_product(e);
		}
	};
	return (
		<div className='flex justify-between bg-white'>
			<div className='flex gap-1 items-center'>
				<div className='box-photo size-12'>
					{product?.images?.length > 0 && product?.images[0]?.original_image_url && (
						<img
							onClick={() => handelEdit(product)}
							src={product?.images[0]?.original_image_url}
							className='w-full h-full cursor-pointer'
							alt={product.en.name}
						/>
					)}
				</div>
				<div className='flex flex-col justify-around '>
					<h2 className='title'>{language === 'ar' ? product.ar.name : product.en.name}</h2>

					{product.category && <p className='subtitle'>{product.category}</p>}

					<p className={product.qty === 0 ? 'paragraph text-error' : ' paragraph text-black'}>
						{t('Qty')} : {product.qty > 0 ? product.qty : t('Out of stock')}
					</p>
				</div>
			</div>
			<div className='flex flex-col items-end justify-between'>
				{settingMenus && settingMenus?.length > 0 && (
					<ThreeDotsButton
						sortMenus={settingMenus}
						selectedOption={selectedOption}
						handelSelect={handleSelect}
					/>
				)}
				<p className='paragraph'>SAR {product?.price}</p>
			</div>
		</div>
	);
}
