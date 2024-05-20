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
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Textarea } from 'src/app/components/ui/textarea';
export interface addReturnPloicyInterface {
	descriptionEn: string;
	descriptionAr: string;
}

export default function AddReturnPloicy() {
	// /hooks
	const { t } = useTranslation();
	const navigate = useNavigate();

	// ////////////////////////////
	// ////////////////////////////
	const handleSubmit = (values: addReturnPloicyInterface) => {
		console.log(values);
		// handelclose();
	};

	// /////////////////////
	// ////////////////////

	const handelDefaultValue = () => {
		return {
			descriptionEn: '',
			descriptionAr: '',
		};
	};
	// //////////////////////////////////////////
	const ReturnPloicySchema = {
		descriptionEn: z.string().min(10).max(200),
		descriptionAr: z.string().min(10).max(200),
	};

	// ////////////////////////////
	// ////////////////////////////
	const { formStore, onSubmit } = useForm({
		schema: ReturnPloicySchema,
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
					title={t('Return policy')}
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
						<div className='global-cards'>
							<h3 className='title'>{t('Main info')}</h3>

							<TabbedFormField
								formStore={formStore}
								keys={[
									{ name: 'descriptionEn', label: 'En' },
									{ name: 'descriptionAr', label: 'عربي' },
								]}
								label={t('Description')}
								renderer={(field) => <Textarea {...field} />}
							/>
						</div>
					</div>
					<div className='lg:col-span-1'>
						<QuickActions data={data} />
					</div>
				</div>
			</form>
		</Form>
	);
}
