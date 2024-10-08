import { TableCell } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FaRegEdit } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { Switch } from 'src/app/components/ui/switch';
import { BlogPostInterface } from 'src/app/interface/BlogPostInterface';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import { CameraIcon } from 'src/app/utils/icons';
import BaseTable, {
	GlobalTableCell,
} from 'src/app/components/optimized/TableLayoutGlobal/base.table';
import ArrowTables from 'src/app/components/optimized/UiKits/ArrowTables';
import { actionsButtonStyle } from 'src/pages/ProductsPage/tabs/AllProducts/_comp/AllProductsTable';

export default function BlogPostsTable({
	blog,
	isLoading,
}: {
	blog: BlogPostInterface[];
	isLoading: boolean;
}) {
	//  hooks
	const { language } = useLanguage();
	const { t } = useTranslation();
	const classData = actionsButtonStyle();
	const navigate = useNavigate();

	//  headers

	const BlogPostsHeaders = [
		{ title: t('Name & Description') },
		{ title: t('Visibility') },

		{ title: t('actions') },
	];


	return (
		<>
			<BaseTable
				isLoading={isLoading}
				language={language}
				color='#55607A'
				headers={BlogPostsHeaders?.map((h) => h)}
				rows={blog?.map((e: BlogPostInterface, i: number) => {
					return {
						item: e,
						elements: [
							<GlobalTableCell
								sx={{
									fontWeight: 600,
								}}
							>
								<div className=' flex  items-center gap-[.4rem] '>
									<div className='relative'>
										<img src={e.img} loading='lazy' alt={e.title} />
										<CameraIcon className='bg-white rounded-[50%] p-[.1rem] w-[19px] h-[19px] absolute bottom-[.5rem] left-[.3rem]' />
									</div>

									<div className='flex flex-col gap-2'>
										<p className='text-title text-[.9rem] font-semibold'>{e.title}</p>
										<p className=' opacity-60 text-[.7rem]'>{e.describtion}</p>
									</div>
								</div>
							</GlobalTableCell>,

							<GlobalTableCell>
								<Switch checked={e.visibility} />
							</GlobalTableCell>,

							<GlobalTableCell>
								<div className={classData}>
									<IoEyeOutline className='text-subtitle' />
									<FaRegEdit
										className='text-subtitle'
										onClick={() => navigate(`admin/addDiscount?id=${e?.id}`)}
									/>
									<ArrowTables path={`blogPosts/${e?.id}`} />
								</div>
							</GlobalTableCell>,
						],
					};
				})}
			/>
		</>
	);
}
