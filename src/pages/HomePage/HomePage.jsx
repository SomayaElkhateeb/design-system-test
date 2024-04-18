import BrandForm from 'src/app/components/optimized/Forms/Brand';

const HomePage = () => {
	return (
		<div>
			HomePage
			<br />
			<BrandForm
				handleSubmit={(values) => {
					console.log(values);
				}}
			/>
		</div>
	);
};

export default HomePage;
