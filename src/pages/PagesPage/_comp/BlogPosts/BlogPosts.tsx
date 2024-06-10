import { useTranslation } from 'react-i18next';
import TopSectionBlogPostsAndSection from './_comp/TopSectionBlogPostsAndPagesSection';
import BlogPostsTable from './_comp/BlogPostsTable';
import { getImageUrl } from 'src/app/utils';
import { BlogPostInterface } from 'src/app/interface/BlogPostInterface';

import { getBlogTable } from 'src/app/store/slices/pagesPage/blog/blogTableAsyncThunks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import useResponsive from 'src/app/utils/hooks/useResponsive';

export default function BlogPosts() {
	//  hooks
	const { t } = useTranslation();
	const { xs } = useResponsive();

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

			{xs && <AddButtonMobile path='AddBlog' />}
		</div>
	);
}
