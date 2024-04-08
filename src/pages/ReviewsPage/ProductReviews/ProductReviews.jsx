import { useState } from 'react';
import { VscSettings, VscSortPrecedence } from 'react-icons/vsc';
import { Button } from 'src/app/components/optimized';
import { getImageUrl } from 'src/app/utils';
import ReviewCard from './comp/ReviewCard';
import RightSidebar from './comp/RightSidebar';
import useProductState from './comp/useProductState';

const productsList = [
	{
		id: '1',
		reviewer: 'Muhammed 1',
		date: '2024-04-03',
		content: 'This product is amazing! I highly recommend it.',
		rating: "5",
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
		numReviews: 500,
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
		numReviews: 500,
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
		numReviews: 500,
		product: 'DJI Mavic Pro 2',
		image: getImageUrl('product/product.png'),
		isPublished: false,
		isReplyed: false,
	},
];

const ProductReviews = () => {
	const {
		publishAllProducts,
		unpublishProduct,
		replyToProduct,
		deleteProduct,
		publishProduct,
		publishedProducts,
		unpublishedProducts,
	} = useProductState(productsList);

	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<RightSidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
			<div className='flex flex-col items-center bg-[#F9FAFC] p-4'>
				<div className='flex justify-between items-center  w-full'>
					<div>
						<Button onClick={publishAllProducts}>publish all</Button>
					</div>
					<div className='flex space-x-2'>
						<Button variant='secondary' LeftIcon={<VscSortPrecedence size={18} />}>
							Arrange
						</Button>
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
							<h3 className='text-md text-gray-400 mt-8 mb-2 uppercase'>Unpublished ({unpublishedProducts.length})</h3>
							<div className='grid grid-cols-1 gap-4 w-full'>
								{unpublishedProducts.map((product) => (
									<ReviewCard
										key={product.id}
										{...product}
										publishProduct={() => publishProduct(product.id)}
										replyToProduct={() => replyToProduct(product.id)}
										deleteProduct={() => deleteProduct(product.id)}
									/>
								))}
							</div>
						</div>
					)}

					{publishedProducts && publishedProducts.length > 0 && (
						<div>
							<h3 className='text-md text-gray-400 mt-8 mb-2 uppercase'>Published ({publishedProducts.length})</h3>
							<div className='grid grid-cols-1 gap-4 w-full'>
								{publishedProducts.map((product) => (
									<ReviewCard
										key={product.id}
										{...product}
										replyToProduct={() => replyToProduct(product.id)}
										unpublishProduct={() => unpublishProduct(product.id)}
										deleteProduct={() => deleteProduct(product.id)}
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
