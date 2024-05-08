import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import AccordionCard from 'src/app/components/optimized/UiKits/AccordionCard';
import ContentSeo from './ContentSeo';
import { GroupIcons, HeaderSettings } from 'src/app/components/optimized';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';

const pageSchema = z.object({
	pageTitle: z.string().min(3, { message: 'Page title is required' }),
	link: z.string().refine((value) => /^https?:\/\/(www\.)?link\.net\/[a-zA-Z0-9._]+$/.test(value), {
		message: 'Invalid URL',
	}),
	metaKey: z.string(),
	metaDescription: z.string().min(7, { message: 'Meta description is required' }),
});

type TFormInputs = z.infer<typeof pageSchema>;

export default function AddPage() {
	const { t } = useTranslation();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TFormInputs>({
		mode: 'onBlur',
		resolver: zodResolver(pageSchema),
	});
	const submitForm: SubmitHandler<TFormInputs> = (data) => console.log(data);

	const handleSaveChangesClick = () => {
		handleSubmit(submitForm)();
	};
	return (
		<>
			<HeaderSettings
				variant='settingWithIcons'
				to={-1}
				title={t('Add page')}
				groupIcons={<GroupIcons variant='view' />}
				btn1={{ text: t('Discard'), onClick: () => {} }}
				btn2={{
					text: t('Save Changes'),
					onClick: handleSaveChangesClick,
				}}
			/>
			<div className='p-4 flex gap-7 w-full justify-between'>
				<div className=' gap-7 flex flex-col w-full'>
					<AccordionCard
						content={<ContentSeo register={register} errors={errors} />}
						title='SEO (Search engine listing preview)'
					/>
				</div>
				<div>
					<QuickActions />
				</div>
			</div>
		</>
	);
}
