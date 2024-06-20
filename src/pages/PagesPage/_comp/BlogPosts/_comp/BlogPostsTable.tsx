import { TableCell } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FaRegEdit } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { Switch } from 'src/app/components/ui/switch';
import { BlogPostInterface } from 'src/app/interface/BlogPostInterface';
import { UseLanguage } from 'src/app/utils/hooks/LanguageHook';
import { CameraIcon } from 'src/app/utils/icons';
import BaseTable, {
	GlobalTableCell,
} from 'src/app/components/optimized/TableLayoutGlobal/base.table';
import ArrowTables from 'src/app/components/optimized/UiKits/ArrowTables';

export default function BlogPostsTable({
	blog,
	isLoading,
}: {
	blog: BlogPostInterface[];
	isLoading: boolean;
}) {
	//  hooks
	const language = UseLanguage();
	const { t } = useTranslation();
	const navigate = useNavigate();

	//  headers

	const BlogPostsHeaders = [
		{ title: t('Name & Description') },
		{ title: t('Visibility') },

		{ title: t('actions') },
	];

	const actionsButtonStyleAr = 'justify-end flex  items-center gap-4 cursor-pointer text-[1.2rem]';
	const actionsButtonStyleEn =
		'justify-start flex  items-center gap-4 cursor-pointer text-[1.2rem]';

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

							<TableCell>
								<Switch checked={e.visibility} />
							</TableCell>,

							<TableCell>
								<div className={language === 'ar' ? actionsButtonStyleAr : actionsButtonStyleEn}>
									<IoEyeOutline className='text-subtitle' />
									<FaRegEdit
										className='text-subtitle'
										onClick={() => navigate(`addDiscount?id=${e?.id}`)}
									/>
									<ArrowTables path={`blogPosts/${e?.id}`} />
								</div>
							</TableCell>,
						],
					};
				})}
			/>
		</>
	);
}
