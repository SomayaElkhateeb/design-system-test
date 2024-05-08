import { useParams } from 'react-router-dom';

import AddNav from './AddNav';
import AddPage from './AddPage';
import AddBlog from './AddBlog';

export default function PagesConfig() {
	const { config } = useParams();
	console.log(config);
	switch (config) {
		case 'add_page':
			return <AddPage />;
		case 'add_nav':
			return <AddNav />;
		case 'add_blog':
			return <AddBlog />;
	}
}
