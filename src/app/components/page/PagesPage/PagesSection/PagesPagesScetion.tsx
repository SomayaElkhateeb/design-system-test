import { useTranslation } from 'react-i18next';

import { getImageUrl } from 'src/app/utils';
import { BlogPostInterface } from 'src/app/interface/BlogPostInterface';
import BlogPostsTable from '../BlogPosts/BlogPostsTable';
import TopSectionBlogPostsAndSection from '../BlogPosts/TopSectionBlogPostsAndPagesSection';
import PagesPagesTable from './PagesPagesSectionTable';

export default function PagesPagesSection() {
	//  hooks
	const { t } = useTranslation();

	const data: BlogPostInterface[] = [
		{
			id: '1',
			visibility: false,
			img: getImageUrl('images/product.png'),
			title: 'mohamed Mostafa',
			describtion: '01064545565',
		},
	];
	return (
		<div className='flex flex-col'>
			<TopSectionBlogPostsAndSection addButton={t('Add Page')} path='add_page' />
			<PagesPagesTable data={data} />
		</div>
	);
}
