import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import { useNavigate } from 'react-router-dom';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { useTranslation } from 'react-i18next';
import { HeaderSettings } from 'src/app/components/optimized';
import Stuff from './Stuff';
import Permissions from './Permissions';
import useCustomHookAddStuff, { addStuffInterface } from './HookForAddStuff';

export default function AddStuff() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();

	// custom hook
	const { handelDefaultValue, stuffSchema } = useCustomHookAddStuff();

	const handleSubmit = (values: addStuffInterface) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: stuffSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	const data = [{ id: 1, title: t('Activated') }];

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages'>
				<HeaderSettings
					variant='settingTwoBtns'
					submit
					title={t('add staff')}
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
				<div className='container mx-auto grid lg:grid-cols-3 gap-5'>
					<div className=' flex-col-top-section-pages lg:col-span-2'>
						<Stuff formStore={formStore} />
						<Permissions formStore={formStore} />
					</div>
					<div className='lg:col-span-1'>
						<QuickActions data={data} />
					</div>
				</div>
			</form>
		</Form>
	);
}
