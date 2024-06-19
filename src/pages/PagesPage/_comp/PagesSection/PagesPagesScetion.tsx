import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import { BlogPostInterface } from 'src/app/interface/BlogPostInterface';
import { getPagesTable } from 'src/app/store/slices/pagesPage/pages/pagesTableAsyncThunks';
import { getImageUrl } from 'src/app/utils';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import TopSectionBlogPostsAndSection from '../BlogPosts/_comp/TopSectionBlogPostsAndPagesSection';
import LegalPagesSection from './_comp/LegalPagesSection';
import PagesTableMobile from './_comp/PagesTableMobile';

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

			{xs && <PagesTableMobile data={data} />}
		</div>
	);
}
