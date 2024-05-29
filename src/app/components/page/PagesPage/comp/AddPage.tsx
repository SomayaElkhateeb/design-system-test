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
import useCustomHookAddBlogOrPage, { addPageInterface } from '../HookForAddBlogOrPageForm';

export default function AddPage({ addblog }: { addblog?: boolean }) {
	// /hooks
	const [open, setOpen] = useState(false);
	const { t } = useTranslation();
	const navigate = useNavigate();

	// ////////////////////////////
	// ////////////////////////////
	const handleSubmit = (values: addPageInterface) => {
		console.log(values);
		// handelclose();
	};

	// /////////////////////
	// ////////////////////

	// custom hook

	const { pageSchema, handelDefaultValue } = useCustomHookAddBlogOrPage(addblog);
	// ////////////////////////////
	// ////////////////////////////
	const { formStore, onSubmit } = useForm({
		schema: pageSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	const data = [
		{ id: 1, title: t('Visible') },
		{ id: 2, title: t('Show on footer') },
		{ id: 3, title: t('Show on main menu') },
	];

	return (
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
				<div className='custom_container grid lg:grid-cols-3 gap-5'>
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
	);
}
