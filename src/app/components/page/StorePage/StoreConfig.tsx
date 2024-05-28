import { useParams } from 'react-router-dom';
import ThemesDetails from './ThemesPage/ThemesDetails';

const StoreConfig = () => {
	const { id } = useParams();
	

	return <ThemesDetails />;
};

export default StoreConfig;
