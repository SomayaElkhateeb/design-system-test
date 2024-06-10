import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import { TableCell } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

import { FaRegEdit } from 'react-icons/fa';

import { ToggleSwitch } from 'src/app/components/optimized';
import { BlogPostInterface } from 'src/app/interface/BlogPostInterface';
import { CameraIcon } from 'src/app/utils/icons';
import { IoEyeOutline } from 'react-icons/io5';
import { Switch } from 'src/app/components/ui/switch';
import BaseTable,{GlobalTableCell} from 'src/app/components/page/Customers/TableLayoutGlobal/base.table';

export default function PagesPagesTable({
	pages,
	isLoading,
}: {
	pages: BlogPostInterface[];
	isLoading: boolean;
}) {
	//  hooks
	const language = UseLanguage();
	const { t } = useTranslation();
	const navigate = useNavigate();

	//  headers

	const PagesSectionHeaders = [
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
				headers={PagesSectionHeaders?.map((h) => h)}
				rows={pages?.map((e: BlogPostInterface, i: number) => {
					return {
						item: e,
						elements: [
							<GlobalTableCell
								sx={{
									fontWeight: 600,
								}}
							>
								<div className='flex flex-col gap-2'>
									<p className='text-title text-[.9rem] font-semibold'>{e.title}</p>
									<p className=' opacity-60 text-[.7rem]'>{e.describtion}</p>
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

									{language === 'ar' ? (
										<IoIosArrowBack
											className='text-subtitle'
											onClick={() => navigate(`blogPosts/${e?.id}`)}
										/>
									) : (
										<IoIosArrowForward
											className='text-subtitle'
											onClick={() => navigate(`blogPosts/${e?.id}`)}
										/>
									)}
								</div>
							</TableCell>,
						],
					};
				})}
			/>
		</>
	);
}
