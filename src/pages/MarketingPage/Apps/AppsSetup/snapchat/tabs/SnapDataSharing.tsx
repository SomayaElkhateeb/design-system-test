import React, { useState } from 'react';
import { Button, CheckBox, InputRow } from 'src/app/components/optimized';

interface Props {
	data: {
		description: string;
	};
}

const SnapDataSharing: React.FC<Props> = ({ data }) => {
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
		<div>
			<p>
				{data.description} <span className='text-blue-500'>Learn more</span>
			</p>
			<div className='my-6'>
				<CheckBox
					label='Activate data sharing'
					checked={isChecked}
					handleOnChange={handleCheckBoxChange}
				/>
			</div>

			<div className='flex items-center justify-between'>
				{isChecked && (
					<div className='flex flex-col w-1/3 space-y-3 '>
						<InputRow
							label='Pixel ID'
							value={inputState.value}
							handleOnChange={(value) =>
								setState({ ...state, inputState: { ...state.inputState, value } })
							}
						/>
					</div>
				)}

				{isChecked && (
					<Button variant='primary' onClick={handleClick}>
						Connect
					</Button>
				)}
			</div>
		</div>
	);
};

export default SnapDataSharing;
