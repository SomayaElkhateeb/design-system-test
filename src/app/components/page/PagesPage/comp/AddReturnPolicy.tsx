import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { Form } from 'src/app/components/ui/form';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { useNavigate } from 'react-router-dom';
import { Button, SubHeader } from 'src/app/components/optimized';
import { LuEye } from 'react-icons/lu';
import { RxDotsHorizontal } from 'react-icons/rx';
import { useForm } from 'src/app/utils/hooks/form';

import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Textarea } from 'src/app/components/ui/textarea';
import useResponsive from 'src/app/utils/hooks/useResponsive';
export interface addReturnPloicyInterface {
	descriptionEn: string;
	descriptionAr: string;
}

export default function AddReturnPloicy() {
	// /hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { xs } = useResponsive();

	const handleSubmit = (values: addReturnPloicyInterface) => {
		console.log(values);
		// handelclose();
	};

	const handelDefaultValue = () => {
		return {
			descriptionEn: '',
			descriptionAr: '',
		};
	};

	const ReturnPloicySchema = {
		descriptionEn: z.string().min(10).max(200),
		descriptionAr: z.string().min(10).max(200),
	};

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

	const SubHeaderActions = () => {
		return (
			<>
				<div className='flex space-x-3'>
					<button>
						<LuEye size='22' />
					</button>

					<button>
						<RxDotsHorizontal size='22' />
					</button>
				</div>
				<Button variant='secondary' onClick={() => navigate(-1)}>
					Discard
				</Button>
				<Button variant='primary' onClick={() => {}}>
					Save Changes
				</Button>
			</>
		);
	};
	return (
		<Form {...formStore}>
			<form className='flex-col-top-section-pages gap-[1.7rem]' onSubmit={onSubmit}>
				<SubHeader title={t('Return policy')}>
					{!xs ? <SubHeaderActions /> : <RxDotsHorizontal />}
				</SubHeader>
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
				{xs && (
					<div className='flex space-x-3 justify-center bg-white p-5 absolute w-full bottom-0'>
						<SubHeaderActions />
					</div>
				)}
			</form>
		</Form>
	);
}
