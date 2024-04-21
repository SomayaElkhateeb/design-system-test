import { VscSettings } from 'react-icons/vsc';
import { Button } from 'src/app/components/optimized';
import ArrangeButton from 'src/app/components/optimized/Buttons/ArrangeButton';
import RightSidebar from 'src/app/components/optimized/UiKits/RightSidebar';

import { AsksQueriesProvider, useAsksQueriesContext } from './_comp/AsksQueriesContext';
import { useTranslation } from 'react-i18next';
import { sortMenus } from '../_comp/data';
import { ContextValue } from './_comp/AsksQueriesContext';
import QueryCard from './_comp/QueryCard';

const AsksQueries = () => {
	const { products, isOpen, setIsOpen, selectedOption, handleArrangeSelect } = useAsksQueriesContext() as ContextValue;

	const { t } = useTranslation();

	return (
		<section className='overflow-hidden'>
			<RightSidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} header='Orders Filters'>
				<ul className='p-5'>
					<li>Order status</li>
				</ul>
			</RightSidebar>
			<div className='flex flex-col items-center bg-[#F9FAFC]'>
				<div className='flex justify-end items-center w-full'>
					<div className='flex'>
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
					{[false, true].map((isResponded) => {
						const filteredProducts = products.filter((product) =>
							product.ask_queries.some((query) => query.isResponded === isResponded),
						);
						if (filteredProducts.length > 0) {
							return (
								<div key={isResponded ? 'responded' : 'not-responded'}>
									<h3 className='text-md text-gray-400 mt-8 mb-2 uppercase'>
										{isResponded ? t('Responded') : t('Not Responded')} ({filteredProducts.length})
									</h3>
									<div className='rounded-md w-full'>
										{filteredProducts.map((product) =>
											product.ask_queries.map((query) => {
												if (query.isResponded === isResponded) {
													return <QueryCard key={query.id} product={product} query={query} />;
												}
												return null;
											}),
										)}
									</div>
								</div>
							);
						}
						return null;
					})}
					{products.every((product) => product.ask_queries.length <= 0) && (
						<h3 className='font-semibold text-2xl flex items-center justify-center'>
							There are no Asks & Queries to view.
						</h3>
					)}
				</div>
			</div>
		</section>
	);
};

export default function AsksQueriesWrapperProvider() {
	return (
		<AsksQueriesProvider>
			<AsksQueries />
		</AsksQueriesProvider>
	);
}
