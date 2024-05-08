import { useParams } from 'react-router-dom';
import AddPage from './AddPage';
import AddNavigation from './AddNavigation';
import AddBlog from './AddBlog';

export default function PagesConfig() {
	const { config } = useParams();
	console.log(config);
	switch (config) {
		case 'AddPage':
			return <AddPage />;
		case 'AddPage':
			return <AddNavigation />;
		case 'AddPage':
			return <AddBlog />;
	}
}
