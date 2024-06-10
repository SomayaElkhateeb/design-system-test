import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, SubHeader } from 'src/app/components/optimized';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import useCustomHookAddStuff, { addStuffInterface } from './HookForAddStuff';
import Permissions from './Permissions';
import Stuff from './Stuff';
import { RxDotsHorizontal } from 'react-icons/rx';
import useResponsive from 'src/app/utils/hooks/useResponsive';

export default function AddStuff() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { xs } = useResponsive();

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
	
	const SubHeaderActions = () => {
		return (
			<>
				<Button variant='secondary' onClick={() => navigate(-1)}>
					Discard
				</Button>
				<Button variant='primary' onClick={() => {}}>
					{t('Send invitation')}
				</Button>
			</>
		);
	};
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages'>
				<SubHeader title={t('add staff')}>
					{!xs ? <SubHeaderActions /> : <RxDotsHorizontal />}
				</SubHeader>
				<div className='custom_container grid lg:grid-cols-3 gap-5'>
					<div className=' flex-col-top-section-pages lg:col-span-2'>
						<Stuff formStore={formStore} />
						<Permissions formStore={formStore} />
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
