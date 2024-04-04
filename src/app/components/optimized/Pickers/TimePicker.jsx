import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { capitalizeFirstLetter } from 'src/app/utils';

/**
 * @param {{
 *  label: string;
 *  value?: import("dayjs").Dayjs | null;
 *  handleOnChange?: (date: import("dayjs").Dayjs | null) => void;
 * }} props
 */
export default function TimePicker(props) {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={['TimePicker', 'MobileTimePicker', 'DesktopTimePicker', 'StaticTimePicker']}>
				<DemoItem>
					<span className='text-sm text-pri-dark'>{capitalizeFirstLetter(props.label)}</span>
					<MobileTimePicker
						defaultValue={dayjs('2022-04-17T15:30')}
						value={props.value}
						onChange={props.handleOnChange}
					/>
				</DemoItem>
			</DemoContainer>
		</LocalizationProvider>
	);
}
