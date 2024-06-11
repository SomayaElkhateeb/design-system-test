import { VscSettings } from 'react-icons/vsc';
import { ArrangeButton, Button, RightSidebar } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import { ProductReviewsProvider, ReviewsContext, useProductReviewsContext } from './_comp/ProductReviewsContext';
import ProductReview from './_comp/ReviewCard';

const ProductReviews = () => {
	const {
		products,
		isOpen,
		setIsOpen,
		publishAllRepliedReview,
		// properties for sorting
		sortReviews,
		sortMenus,
		handleArrangeSelect,
		selectedOption,
	} = useProductReviewsContext() as ReviewsContext;
	const { t } = useTranslation();

	return (
		<section className='overflow-hidden'>
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
			<div className='flex flex-col items-center bg-[#F9FAFC]'>
				<div className='flex justify-between items-center w-full'>
					<div>
						<Button onClick={() => publishAllRepliedReview()}>{t('publish all')}</Button>
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
					{[false, true].map((isPublished) => {
						const filteredProducts = products.filter((product) =>
							product.reviews.some((review) => review.isPublished === isPublished),
						);
						const publishedText = isPublished ? t('Published') : t('Not Published');

						if (filteredProducts.length > 0) {
							return (
								<div key={isPublished ? 'published' : 'unpublished'}>
									<h3 className='text-md text-gray-400 mt-8 mb-2 uppercase'>
										{publishedText} ({filteredProducts.length})
									</h3>
									<div className='rounded-md w-full max-h-[400px] overflow-x-hidden'>
										{products.map((product) => {
											const filteredReviews = product.reviews.filter((review) => review.isPublished === isPublished);
											return (
												filteredReviews.length > 0 && (
													<div key={product.id}>
														{sortReviews(filteredReviews, selectedOption).map((review) => (
															<ProductReview key={review.id} product={product} review={review} />
														))}
													</div>
												)
											);
										})}
									</div>
								</div>
							);
						}
						return null;
					})}
					{products.every((product) => product.reviews.length <= 0) && (
						<h3 className='font-semibold text-2xl flex items-center justify-center'>There are no Reviews to view.</h3>
					)}
				</div>
			</div>
		</section>
	);
};

export default function ProductReviewsWrapperProvider() {
	return (
		<ProductReviewsProvider>
			<ProductReviews />
		</ProductReviewsProvider>
	);
}
