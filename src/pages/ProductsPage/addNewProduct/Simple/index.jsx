import SimpleProductForm from "./_comp/SimpleProductForm";

const index = () => {
	return (
		<section className='flex flex-col lg:flex-row justify-between w-full items-center py-12 space-y-16 lg:space-y-0 lg:space-x-8'>
			<div className='w-full lg:w-4/5'>
				<SimpleProductForm />
			</div>
		</section>
	);
};

export default index;
