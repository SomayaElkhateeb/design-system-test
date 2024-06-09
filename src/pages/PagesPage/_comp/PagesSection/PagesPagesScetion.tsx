import { useTranslation } from 'react-i18next';

import { getImageUrl } from 'src/app/utils';
import { BlogPostInterface } from 'src/app/interface/BlogPostInterface';
import BlogPostsTable from '../BlogPosts/_comp/BlogPostsTable';
import TopSectionBlogPostsAndSection from '../BlogPosts/_comp/TopSectionBlogPostsAndPagesSection';
import PagesPagesTable from './PagesPagesSectionTable';
import LegalPagesSection from './LegalPagesSection';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPagesTable } from 'src/app/store/slices/pagesPage/pages/pagesTableAsyncThunks';

import useResponsive from 'src/app/utils/hooks/useResponsive';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';

export default function PagesPagesSection() {
	//  hooks
	const { t } = useTranslation();

	// redux
	const dispatch = useDispatch();
	const { isLoading, pages, error } = useSelector((state) => state.pages || {});

	useEffect(() => {
		dispatch(getPagesTable());
	}, [dispatch]);

	const { xs } = useResponsive();

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
				{xs && <AddButtonMobile path='AddPage' />}

				<LegalPagesSection />
			</div>
			<PagesPagesTable pages={pages} isLoading={isLoading} />
		</div>
	);
}
