import { useForm } from 'src/app/utils/hooks/form';
import { z } from 'zod';
import AccordionCard from 'src/app/components/optimized/UiKits/AccordionCard';
import { GroupIcons, HeaderSettings } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import { Form } from 'src/app/components/ui/form';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { useNavigate } from 'react-router-dom';
import MainInfoBlog from 'src/app/components/page/PagesPage/BlogPosts/MainInfoBlog';
import ContentSeoPage from 'src/app/components/page/PagesPage/PagesSection/ContentSeoPage';
import { useState } from 'react';

export interface addPageInterface {
	pageTitle: string;
	link: string;
	metaKey: string;
	metaDescription: string;
	titleEn: string;
	titleAr: string;
	descriptionEn: string;
	descriptionAr: string;
}

const blogSchema = {
	pageTitle: z.string().min(3, { message: 'Page title is required' }),
	link: z.string().url(),
	metaKey: z.string(),
	metaDescription: z.string().min(7, { message: 'Meta description is required' }),
	titleEn: z.string().min(3).max(50),
	titleAr: z.string().min(3).max(50),
	descriptionEn: z.string().min(10).max(200),
	descriptionAr: z.string().min(10).max(200),
};

export default function AddBlog() {
	const [open, setOpen] = useState(false);
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleSubmit = (values: addPageInterface) => {
		console.log(values);
		// handelclose();
	};

	const handelDefaultValue = () => {
		return {
			pageTitle: '',
			link: '',
			metaKey: '',
			metaDescription: '',
			titleEn: '',
			titleAr: '',
			descriptionEn: '',
			descriptionAr: '',
		};
	};

	const { formStore, onSubmit } = useForm({
		schema: blogSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	const data = [
		{ id: 1, title: 'Visible' },
		{ id: 2, title: 'Show on blog header' },
	];

	return (
		<div>
			<Form {...formStore}>
				<form className='flex-col-top-section-pages gap-[1.7rem]' onSubmit={onSubmit}>
					<HeaderSettings
						variant='settingWithIcons'
						submit
						title={t('Add posts')}
						groupIcons={<GroupIcons variant='view' />}
						btn1={{
							text: t('Discard'),
							onClick: () => {
								navigate(-1);
							},
						}}
						btn2={{
							text: t('Save Changes'),
							onClick: () => {},
						}}
					/>
					<div className='p-4 flex gap-7 w-full justify-between'>
						<div className=' gap-7 flex flex-col w-full'>
							<MainInfoBlog formStore={formStore} />
							<AccordionCard
								open={open}
								setOpen={setOpen}
								content={<ContentSeoPage formStore={formStore} open={open} />}
								title={t('SEO (Search engine listing preview)')}
							/>
						</div>
						<div>
							<QuickActions data={data} />
						</div>
					</div>
				</form>
			</Form>
		</div>
	);
}
