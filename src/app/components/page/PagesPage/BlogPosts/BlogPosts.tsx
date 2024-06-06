import { useTranslation } from 'react-i18next';
import TopSectionBlogPostsAndSection from './TopSectionBlogPostsAndPagesSection';
import BlogPostsTable from './BlogPostsTable';
import { getImageUrl } from 'src/app/utils';
import { BlogPostInterface } from 'src/app/interface/BlogPostInterface';
import { getBlogTable } from 'src/app/store/slices/pagesPage/blog/blogTableAsyncThunks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function BlogPosts() {
	//  hooks
	const { t } = useTranslation();

	// redux
	const dispatch = useDispatch();
	const { isLoading, blog, error } = useSelector((state) => state.blog || {});

	useEffect(() => {
		dispatch(getBlogTable());
	}, [dispatch]);

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
			<BlogPostsTable blog={blog} isLoading={isLoading} />
		</div>
	);
}
