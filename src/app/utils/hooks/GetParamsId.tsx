import { useSearchParams } from 'react-router-dom';

export const UseGetIdParams = () => {
	const [searchParams] = useSearchParams();

	const id = searchParams.get('id');

	return id;
};
