import { useTranslation } from 'react-i18next';

import { getImageUrl } from 'src/app/utils';
import { BlogPostInterface } from 'src/app/interface/BlogPostInterface';
import BlogPostsTable from '../BlogPosts/BlogPostsTable';
import TopSectionBlogPostsAndSection from '../BlogPosts/TopSectionBlogPostsAndPagesSection';
import PagesPagesTable from './PagesPagesSectionTable';
import LegalPagesSection from './LegalPagesSection';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPagesTable } from 'src/app/store/slices/pagesPage/pages/pagesTableAsyncThunks';

export default function PagesPagesSection() {
	//  hooks
	const { t } = useTranslation();
	// redux
	const dispatch = useDispatch();
	const { isLoading, pages, error } = useSelector((state) => state.pages || {});

	useEffect(() => {
		dispatch(getPagesTable());
	}, [dispatch]);

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
			<div className='flex flex-col gap-[1rem]'>
				<TopSectionBlogPostsAndSection addButton={t('Add Page')} path='AddPage' />

				<LegalPagesSection />
			</div>
			<PagesPagesTable pages={pages} isLoading={isLoading} />
		</div>
	);
}
