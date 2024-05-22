import { useParams } from 'react-router-dom';
import AddPage from './AddPage';
import AddBlog from './AddBlog';
import AddNavigation from './AddNavigation';
import AddReturnPloicy from './AddReturnPolicy';

export default function PagesConfig() {
	const { config } = useParams();

	switch (config) {
		case 'AddPage':
			return <AddPage />;
		case 'AddNavigation':
			return <AddNavigation />;
		case 'AddBlog':
			return <AddBlog />;
		case 'return_policy':
			return <AddReturnPloicy />;
	}
}
