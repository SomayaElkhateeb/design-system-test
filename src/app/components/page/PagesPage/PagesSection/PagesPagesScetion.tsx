import { useTranslation } from 'react-i18next';

import { getImageUrl } from 'src/app/utils';
import { BlogPostInterface } from 'src/app/interface/BlogPostInterface';
import BlogPostsTable from '../BlogPosts/BlogPostsTable';
import TopSectionBlogPostsAndSection from '../BlogPosts/TopSectionBlogPostsAndPagesSection';
import PagesPagesTable from './PagesPagesSectionTable';
import LegalPagesSection from './LegalPagesSection';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';

export default function PagesPagesSection() {
	//  hooks
	const { t } = useTranslation();
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
			<PagesPagesTable data={data} />
		</div>
	);
}
