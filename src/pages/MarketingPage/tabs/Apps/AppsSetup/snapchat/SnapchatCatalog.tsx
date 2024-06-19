import SnapchatMarketingCatalog from "./_comp/SnapchatMarketingCatalog";

const SnapchatCatalog = () => {
	return (
		<section>
			<div className='p-4 text-black bg-white'>
				<h3 className='text-xl font-medium'>Setup Marketing Catalog</h3>
			</div>
			<div className='bg-[#F9FAFC] p-4 flex flex-col items-center'>
				<div className='w-4/5'>
					<h2 className='font-bold text-2xl mb-5'>Set Up Business Marketing Catalog </h2>
					<SnapchatMarketingCatalog />
				</div>
			</div>
		</section>
	);
};

export default SnapchatCatalog;