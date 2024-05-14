import { z } from 'zod';
import AccordionCard from 'src/app/components/optimized/UiKits/AccordionCard';
import { GroupIcons, HeaderSettings } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import { Form } from 'src/app/components/ui/form';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { useNavigate } from 'react-router-dom';
import MainInfoPage from 'src/app/components/page/PagesPage/PagesSection/MainInfoPage';
import ContentSeoPage from 'src/app/components/page/PagesPage/PagesSection/ContentSeoPage';
import { useForm } from 'src/app/utils/hooks/form';
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
	image?: File;
}

const pageSchema = (addblog?: boolean) => {
	return {
		pageTitle: z.string().min(3, { message: 'Page title is required' }),
		link: z.string().url(),
		metaKey: z.string(),
		metaDescription: z.string().min(7, { message: 'Meta description is required' }),
		titleEn: z.string().min(3).max(50),
		titleAr: z.string().min(3).max(50),
		descriptionEn: z.string().min(10).max(200),
		descriptionAr: z.string().min(10).max(200),
		image: addblog ? z.instanceof(File) : z.optional(z.instanceof(File)),
	};
};

export default function AddPage({ addblog }: { addblog?: boolean }) {
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
			image: undefined,
		};
	};

	const { formStore, onSubmit } = useForm({
		schema: pageSchema(addblog),
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	const data = [
		{ id: 1, title: t('Visible') },
		{ id: 2, title: t('Show on footer') },
		{ id: 3, title: t('Show on main menu') },
	];

	return (
		<>
			<Form {...formStore}>
				<form className='flex-col-top-section-pages gap-[1.7rem]' onSubmit={onSubmit}>
					<HeaderSettings
						variant='settingWithIcons'
						submit
						title={!addblog ? t('Add page') : t('Add blog')}
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
					<div className='container mx-auto grid lg:grid-cols-3 gap-5'>
						<div className='flex-col-top-section-pages lg:col-span-2'>
							<MainInfoPage addblog={addblog} formStore={formStore} />
							<AccordionCard
								open={open}
								setOpen={setOpen}
								content={<ContentSeoPage formStore={formStore} open={open} />}
								title={t('SEO (Search engine listing preview)')}
							/>
						</div>
						<div className='lg:col-span-1'>
							<QuickActions data={data} />
						</div>
					</div>
				</form>
			</Form>
		</>
	);
}
