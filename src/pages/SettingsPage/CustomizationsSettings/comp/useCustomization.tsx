import { UseFormReturn } from 'react-hook-form';
import { useForm } from 'src/app/utils/hooks/form';
import useCustomHookCustomizationSettings, {
	customizationsInterface,
} from './HookForCustomizationsettings';

export interface CustomizationsFormProps {
	formStore: UseFormReturn<customizationsInterface>;
}

export default function UseCustomization() {
	const handleSubmit = (values: customizationsInterface) => {
		console.log(values);
	};

	//  custom hooks
	const { customizationsSchema, handelDefaultValue } = useCustomHookCustomizationSettings();
	const { formStore, onSubmit } = useForm({
		handleSubmit: handleSubmit,
		schema: customizationsSchema,
		defaultValues: handelDefaultValue(),
	});
	return { formStore, onSubmit };
}
