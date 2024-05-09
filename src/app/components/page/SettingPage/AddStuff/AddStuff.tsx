import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';

import { useNavigate } from 'react-router-dom';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { useTranslation } from 'react-i18next';
import { HeaderSettings } from 'src/app/components/optimized';
import Stuff from './Stuff';
import Permissions from './Permissions';

export interface addStuffInterface {
	name: string;
	email: string;
}

const stuffSchema = {
	name: z.string().min(5, { message: 'Full name is required' }),
	email: z.string().email(),
};

export default function AddStuff() {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleSubmit = (values: addStuffInterface) => {
		console.log(values);
	};
	const handelDefaultValue = () => {
		return {
			name: '',
			email: '',
		};
	};

	const { formStore, onSubmit } = useForm({
		schema: stuffSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	const data = [{ id: 1, title: t('Activated') }];
	return (
		<>
			<Form {...formStore}>
				<form onSubmit={onSubmit}>
					<HeaderSettings
						variant='settingTwoBtns'
						submit
						title={t('Add staff')}
						btn1={{
							text: t('Discard'),
							onClick: () => {
								navigate(-1);
							},
						}}
						btn2={{
							text: t('Send invitation'),
							onClick: () => {},
						}}
					/>
					<div className='p-4 flex gap-7 w-full justify-between'>
						<div className=' gap-7 flex flex-col w-full'>
							<Stuff formStore={formStore} />
							<Permissions />
						</div>
						<div>
							<QuickActions data={data} />
						</div>
					</div>
				</form>
			</Form>
		</>
	);
}
