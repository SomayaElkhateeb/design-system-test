import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, CheckBox, InputRow } from 'src/app/components/optimized';

interface TikDataSharingProps {
	data: {
		description: string;
	};
}

const TikDataSharing: React.FC<TikDataSharingProps> = ({ data }) => {
	const { t } = useTranslation();
	const [state, setState] = useState({
		isChecked: false,
		inputState: {
			selectedValue: 'Select an option',
			value: '',
		},
	});

	const handleCheckBoxChange = (value: boolean) => {
		setState({
			...state,
			isChecked: value,
		});
	};

	const handleClick = () => {
		console.log('Button clicked!');
	};

	const { isChecked, inputState } = state;

	return (
		<div className='flex flex-col gap-4'>
			<p className='text-title text-sm w-[60%]'>
				{data.description}
				<Button variant='link' className='inline px-2'>
					{t('Learn more')}
				</Button>
			</p>

			<CheckBox
				label='Activate data sharing'
				checked={isChecked}
				handleOnChange={handleCheckBoxChange}
			/>

			{isChecked && (
				<>
					<div className='flex justify-between flex-col gap-4 w-full md:w-1/2'>
						<InputRow
							label='Pixel ID'
							value={inputState.value}
							handleOnChange={(value) =>
								setState({ ...state, inputState: { ...state.inputState, value } })
							}
						/>
					</div>

					<div className='flex justify-end'>
						<Button variant='primary'>{t('Connect')}</Button>
					</div>
				</>
			)}
		</div>
	);
};

export default TikDataSharing;
