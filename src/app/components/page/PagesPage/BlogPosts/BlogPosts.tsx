import { useTranslation } from 'react-i18next';
import TopSectionBlogPostsAndSection from './TopSectionBlogPostsAndPagesSection';
import BlogPostsTable from './BlogPostsTable';
import { getImageUrl } from 'src/app/utils';
import { BlogPostInterface } from 'src/app/interface/BlogPostInterface';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import useResponsive from 'src/app/utils/hooks/useResponsive';

export default function BlogPosts() {
	//  hooks
	const { t } = useTranslation();
	const { xs } = useResponsive();

	const Blogs: BlogPostInterface[] = [
		{
			id: '1',
			visibility: false,
			img: getImageUrl('images/product.png'),
			title: 'mohamed Mostafa',
			describtion: '01064545565',
		},
	];
	return (
		<div className='flex-col-top-section-pages'>
			<TopSectionBlogPostsAndSection addButton={t('Add post')} path='AddBlog' />
			{xs && <AddButtonMobile path='AddBlog' />}

			<BlogPostsTable Blogs={Blogs} />
		</div>
	);
}
