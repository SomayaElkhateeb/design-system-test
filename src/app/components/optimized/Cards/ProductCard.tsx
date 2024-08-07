//? Unfinished tasks
//! =================
// todo Actions Button
// todo Make the Component more clean
// todo Trigger image preview logic

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
	CameraIcon,
	CopyIcon,
	EditIcon,
	NextIcon,
	StarActiveIcon,
	StarIcon,
	ViewIcon,
} from 'src/app/utils/icons';

import ThreeDotsButton from '../Buttons/ThreedotsButton';
import useSelectBox from '../Menu/useSelectBox';
import CustomTableBodyCheckbox from '../UiKits/CustomTableBodyCheckbox';
import { Product } from 'src/pages/ProductsPage/_comp/data';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import { menuType } from '../Buttons/ActionsComp';

interface AllProductsTableProps {
	product: Product;
	array: string[];
	setArray: (e: string[]) => void;

	setOpenDialog: (e: boolean) => void;
	setEdit_product: (e: Product) => void;
	children: React.ReactNode;
	handelId: (e: string) => void;
}

export default function ProductCard({
	product,
	array,
	setArray,

	setOpenDialog,
	setEdit_product,
	children,
	handelId,
}: AllProductsTableProps) {
	//  hooks
	const { t } = useTranslation();
	const { language } = useLanguage();
	const [isFavorite, setIsFavorite] = useState(false);

	function toggleFavorite() {
		setIsFavorite(!isFavorite);
	}

	const info = {
		sku: product.sku,
		quantity: product?.qty && product?.qty > 0 ? product.qty : t('Out of stock'),
		price: product.price,
	};

	return (
		<div className='border-2 bg-white overflow-hidden border-light-2 rounded-xl  divide-y p-0  group '>
			<div className='relative w-full h-[260px]'>
				{product?.images?.length > 0 && product?.images[0]?.original_image_url && (
					<img
						src={product?.images[0]?.original_image_url}
						alt={product?.en?.name}
						className='object-cover w-full h-full'
					/>
				)}
				<div className='absolute flex flex-col items-center justify-between top-3 bottom-2 left-3'>
					<div className='flex flex-col items-center gap-4 '>
						<CustomTableBodyCheckbox array={array} setArray={setArray} id={product.id} />
						<button onClick={toggleFavorite}>
							{isFavorite ? (
								<StarActiveIcon className='fill-neutral-1' />
							) : (
								<StarIcon className='fill-hint' />
							)}
						</button>
					</div>

					<div className='grid w-6 h-6 bg-white border rounded-full border-light-2 place-content-center'>
						<button>
							<CameraIcon className='w-[19px] h-[19px]' />
						</button>
					</div>
				</div>

				{/* Actions Btns */}
				<div className='absolute transition-all bg-white opacity-0 top-2 right-2 group-hover:opacity-100'>
					<Actions
						handelId={handelId}
						setEdit_product={setEdit_product}
						setOpenDialog={setOpenDialog}
						product={product}
					>
						{children}
					</Actions>
				</div>
			</div>
			<div className='flex items-end justify-between p-3'>
				<div className='space-y-1'>
					<h2 className='title'>{language === 'ar' ? product?.ar?.name : product?.en?.name}</h2>
					<p className='subtitle'>{product?.category}</p>
					{product?.option && <p className='paragraph'>{product?.option} Options</p>}
				</div>
				<button>
					<NextIcon className='fill-subtitle' />
				</button>
			</div>
			{Object.entries(info).map(([posterKey, posterValue]) => (
				<div className='flex justify-between p-3' key={posterKey}>
					<p className='subheading'>{posterKey}</p>
					<p className='paragraph'>{posterValue}</p>
				</div>
			))}
		</div>
	);
}

function Actions({
	setEdit_product,
	setOpenDialog,
	product,
	handelId,
	children,
}: {
	setEdit_product: (e: Product) => void;
	setOpenDialog: (e: boolean) => void;
	product: Product;
	children: React.ReactNode;
	handelId: (e: string) => void;
}) {
	const handelEdit = (e: Product) => {
		if (e.type === 'simple') {
			setOpenDialog(true);
			setEdit_product(e);
		}
	};

	return (
		<div className='flex-col-global gap-3 px-2 py-1 card items-center '>
			<ViewIcon className='fill-subtitle' />

			<div onClick={() => handelEdit(product)}>
				<EditIcon className='fill-subtitle cursor-pointer' />
			</div>

			{/* <CopyIcon className='fill-subtitle' /> */}

			<div onClick={() => handelId(product?.id)}>{children}</div>
		</div>
	);
}
