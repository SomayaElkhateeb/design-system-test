import { getImageUrl } from 'src/app/utils';

const AuthImage = ({ path }: { path: string }) => {
	return (
		<div className='grid place-content-center '>
			<img src={getImageUrl(path)} alt='Create Store' className='w-full' />
		</div>
	);
};

export default AuthImage;
