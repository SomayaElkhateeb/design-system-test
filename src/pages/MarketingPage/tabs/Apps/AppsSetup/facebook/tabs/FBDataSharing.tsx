import React, { useState } from 'react';
import { Button, CheckBox, InputRow, SelectBoxRow } from 'src/app/components/optimized';

interface FBDataSharingProps {
	data: {
		description: string;
	};
}

const FBDataSharing: React.FC<FBDataSharingProps> = ({ data }) => {
	const [state, setState] = useState({
		isChecked: false,
		inputState: {
			selectedValue: 'Select an option',
			value: '',
		},
	});

	const { isChecked, inputState } = state;

	const handleInputChange = (value: string) => {
		setState((prevState) => ({
			...prevState,
			inputState: { ...prevState.inputState, value },
		}));
	};

	const handleSelectChange = (value: string) => {
		setState((prevState) => ({
			...prevState,
			inputState: { ...prevState.inputState, selectedValue: value },
		}));
	};

	return (
		<div className='flex flex-col gap-4'>
			<p className='text-title text-sm'>
				{data.description}
				<Button variant='link' className='inline px-2'>
					{'Learn more'}
				</Button>
			</p>

			<CheckBox
				label='Activate data sharing'
				handleOnChange={() =>
					setState((prevState) => ({
						...prevState,
						isChecked: !prevState.isChecked,
					}))
				}
				checked={state.isChecked}
			/>

			{isChecked && (
				<div className='flex justify-between flex-col gap-4'>
					<div className='flex flex-col w-full md:w-1/2 gap-3 '>
						<InputRow
							label='Pixel ID'
							value={inputState.value}
							handleOnChange={handleInputChange}
						/>
						<SelectBoxRow
							label='Tracked action'
							selectedValue={inputState.selectedValue}
							handleOnChange={handleSelectChange}
							options={[
								{ value: 'option1', label: 'Option 1' },
								{ value: 'option2', label: 'Option 2' },
								{ value: 'option3', label: 'Option 3' },
							]}
						/>
					</div>
					<div className='flex justify-end'>
						<Button variant='primary'>{'Connect'}</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default FBDataSharing;
