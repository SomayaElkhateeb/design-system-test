import { Checkbox } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';
import { addStuffInterface } from '../SettingPage/PermissionsAndUsers/AddStuff/AddStuff';

export default function CustomTableBodyCheckbox({
	array,
	setArray,
	id,
	formStore,
}: {
	array: string[];
	setArray: (e: string[]) => void;
	id: string;
	formStore?: UseFormReturn<addStuffInterface>;
}) {
	return (
		<Checkbox
			onChange={() => {
				if (array.includes(id)) {
					// formStore && formStore.setValue('storePermissions', array);
					setArray(array.filter((el) => el !== id));
				} else {
					// formStore && formStore.setValue('storePermissions', array);
					setArray([id, ...array]);
				}
			}}
			checked={array.includes(id)}
		/>
	);
}
