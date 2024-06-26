import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SubHeader } from 'src/app/components/optimized';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import useCustomHookAddStuff, { addStuffInterface } from './HookForAddStuff';
import Permissions from './Permissions';
import Stuff from './Stuff';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';

export default function AddStuff() {
	//  hooks
	const { t } = useTranslation();

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
			<form onSubmit={onSubmit} className='flex-col-global'>
				<SubHeader title={t('add staff')}>
					<SubHeaderDefaultBtns onSubmit={onSubmit} />
				</SubHeader>
				<div className='custom_container custom-grid-parent'>
					<div className=' flex-col-global grid-left'>
						<Stuff formStore={formStore} />
						<Permissions formStore={formStore} />
					</div>
					<div className='grid-right'>
						<QuickActions data={data} />
					</div>
				</div>
				<div className='flex-btn-end px-5'>
					<SubHeaderMobileBtns onSubmit={onSubmit} />
				</div>
			</form>
		</Form>
	);
}
