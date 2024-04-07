import { getImageUrl } from 'src/app/utils';
import ReviewCard from './comp/ReviewCard';
import { useState } from 'react';
import { Button } from 'src/app/components/optimized';
import RightSidebar from './comp/RightSidebar';
import { VscSettings } from 'react-icons/vsc';
import { VscSortPrecedence } from 'react-icons/vsc';

const productsList = [
	{
		id: '1',
		reviewer: 'John Doe',
		date: '2024-04-03',
		content: 'This product is amazing! I highly recommend it.',
		rating: 5,
		numReviews: 500,
		product: 'DJI Mavic Pro 2',
		image: getImageUrl('product/product.png'),
		isPublished: true,
	},
	{
		id: '2',
		reviewer: 'Jane Smith',
		date: '2024-04-02',
		content: 'It was good, but could be better.',
		rating: 3.1,
		numReviews: 500,
		product: 'DJI Mavic Pro 2',
		image: getImageUrl('product/product.png'),
		isPublished: true,
	},
	{
		id: '3',
		reviewer: 'John Doe',
		date: '2024-04-03',
		content: 'This product is amazing! I highly recommend it.',
		rating: 5,
		numReviews: 500,
		product: 'DJI Mavic Pro 2',
		image: getImageUrl('product/product.png'),
		isPublished: false,
	},
	{
		id: '4',
		reviewer: 'Jane Smith',
		date: '2024-04-02',
		content: 'It was good, but could be better.',
		rating: 3.8,
		numReviews: 500,
		product: 'DJI Mavic Pro 2',
		image: getImageUrl('product/product.png'),
		isPublished: false,
	},
];

const ProductReviews = () => {
	const [products, setProducts] = useState(productsList);
	const [isOpen, setIsOpen] = useState(true);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	const publishAllProducts = () => {
		const updatedProducts = products.map((product) => ({ ...product, isPublished: true }));
		setProducts(updatedProducts);
	};

	const publishedProducts = products.filter((product) => product.isPublished);
	const unpublishedProducts = products.filter((product) => !product.isPublished);

	return (
		<>
			<RightSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
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
							onClick={toggleSidebar}
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
									<ReviewCard key={product.id} {...product} />
								))}
							</div>
						</div>
					)}

					{publishedProducts && (
						<div>
							<h3 className='text-md text-gray-400 mt-8 mb-2 uppercase'>Published ({publishedProducts.length})</h3>
							<div className='grid grid-cols-1 gap-4 w-full'>
								{publishedProducts.map((product) => (
									<ReviewCard key={product.id} {...product} />
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
