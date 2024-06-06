import { getImageUrl } from 'src/app/utils';

const AuthImage = ({ path }) => {
	return (
		<div className='w-full sm:w-4/6 md:w-5/6 lg:w-3/6 xl:w-2/5 flex justify-center items-center'>
			<img src={getImageUrl(path)} alt='Create Store' className='w-full' />
		</div>
	);
};

export default AuthImage;
