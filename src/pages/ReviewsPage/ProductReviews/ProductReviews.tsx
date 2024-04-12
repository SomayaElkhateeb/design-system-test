import { useState } from 'react';
import { VscSettings } from 'react-icons/vsc';
import { Button } from 'src/app/components/optimized';
import { getImageUrl } from 'src/app/utils';
import ReviewCard from './comp/ReviewCard';
import RightSidebar from '../../../app/components/optimized/UiKits/RightSidebar';
import useProductState, { Product } from './comp/useProductState';
import ArrangeButton from 'src/app/components/optimized/UiKits/ArrangeButton';
import { useTranslation } from 'react-i18next';

const productsList: Product[] = [
	{
		id: '1',
		reviewer: 'Muhammed 1',
		date: '2024-04-03',
		content: 'This product is amazing! I highly recommend it.',
		rating: '5',
		numReviews: 500,
		product: 'DJI Mavic Pro 2',
		image: getImageUrl('product/product.png'),
		isPublished: true,
		isReplyed: false,
	},
	{
		id: '2',
		reviewer: 'Muhammed 2',
		date: '2024-04-02',
		content: 'It was good, but could be better.',
		rating: 3.1,
		numReviews: 250,
		product: 'DJI Mavic Pro 2',
		image: getImageUrl('product/product.png'),
		isPublished: true,
		isReplyed: false,
	},
	{
		id: '3',
		reviewer: 'Muhammed 3',
		date: '2024-04-03',
		content: 'This product is amazing! I highly recommend it.',
		rating: 5,
		numReviews: 300,
		product: 'DJI Mavic Pro 2',
		image: getImageUrl('product/product.png'),
		isPublished: false,
		isReplyed: false,
	},
	{
		id: '4',
		reviewer: 'Muhammed 4',
		date: '2024-04-02',
		content: 'It was good, but could be better.',
		rating: 3.8,
		numReviews: 400,
		product: 'DJI Mavic Pro 2',
		image: getImageUrl('product/product.png'),
		isPublished: false,
		isReplyed: false,
	},
];

// Define sortMenus
const sortMenus = [
	{ id: 'date', text: 'Date published' },
	{ id: 'top', text: 'Top reviews' },
	{ id: 'low', text: 'Lowest reviews' },
];

const ProductReviews = () => {
	const {
		publishAllProducts,
		unpublishProduct,
		replyToProduct,
		deleteProduct,
		publishProduct,
		markAsNotReplied,
		selectedOption,
		filteredPublishedProducts,
		filteredUnpublishedProducts,
		publishedProducts,
		unpublishedProducts,
		handleArrangeSelect,
	} = useProductState(productsList);
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();

	return (
		<>
			<RightSidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} header='Orders Filters'>
				<ul className='p-5'>
					<li>Order status</li>
					<li>Date</li>
					<li>Payment Status</li>
					<li>Delivery Option</li>
					<li>Shipping Providers</li>
					<li>Payment Methods</li>
					<li>Location</li>
					<li>Branches</li>
				</ul>
			</RightSidebar>
			<div className='flex flex-col items-center bg-[#F9FAFC] p-4'>
				<div className='flex justify-between items-center w-full'>
					<div>
						<Button onClick={publishAllProducts}>{t('publish all')}</Button>
					</div>
					<div className='flex space-x-2'>
						<ArrangeButton sortMenus={sortMenus} selectedOption={selectedOption} handleSelect={handleArrangeSelect} />

						<Button
							onClick={() => setIsOpen(!isOpen)}
							variant='secondary'
							LeftIcon={<VscSettings size={16} style={{ transform: 'rotate(90deg)' }} />}
						>
							Filter
						</Button>
					</div>
				</div>
				<div className='w-full'>
					{unpublishedProducts && unpublishedProducts.length > 0 && (
						<div>
							<h3 className='text-md text-gray-400 mt-8 mb-2 uppercase'>
								Unpublished ({filteredUnpublishedProducts.length})
							</h3>
							<div className='grid grid-cols-1 gap-4 w-full'>
								{filteredUnpublishedProducts.map((product) => (
									<ReviewCard
										key={product.id}
										{...product}
										publishProduct={() => publishProduct(product.id)}
										replyToProduct={() => replyToProduct(product.id)}
										deleteProduct={() => deleteProduct(product.id)}
										markAsNotReplied={() => markAsNotReplied(product.id)}
										unpublishProduct={() => unpublishProduct(product.id)}
									/>
								))}
							</div>
						</div>
					)}

					{publishedProducts && publishedProducts.length > 0 && (
						<div>
							<h3 className='text-md text-gray-400 mt-8 mb-2 uppercase'>
								Published ({filteredPublishedProducts.length})
							</h3>
							<div className='grid grid-cols-1 gap-4 w-full'>
								{filteredPublishedProducts.map((product) => (
									<ReviewCard
										key={product.id}
										{...product}
										replyToProduct={() => replyToProduct(product.id)}
										unpublishProduct={() => unpublishProduct(product.id)}
										deleteProduct={() => deleteProduct(product.id)}
										markAsNotReplied={() => markAsNotReplied(product.id)}
										publishProduct={() => publishProduct(product.id)}
									/>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default ProductReviews;
