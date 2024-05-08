import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function InputTags({ selectItems }) {
	return (
		<Stack>
			<Autocomplete
				multiple
				id='tags-outlined'
				options={selectItems}
				getOptionLabel={(option) => option.title}
				defaultValue={[selectItems[0]]}
				filterSelectedOptions
				renderInput={(params) => <TextField {...params} placeholder='Type and add' />}
			/>
		</Stack>
	);
}
