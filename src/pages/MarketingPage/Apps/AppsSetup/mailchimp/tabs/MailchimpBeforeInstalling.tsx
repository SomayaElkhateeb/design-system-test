import React from 'react';
import { Button } from 'src/app/components/optimized';
import { FaRegCheckCircle } from 'react-icons/fa';

interface Props {
	data: {
		notes: string[];
	};
}

const MailchimpBeforeInstalling: React.FC<Props> = ({ data }) => {
	return (
		<div>
			<div>
				{data?.notes.map((message, index) => (
					<div key={index} className='flex space-x-2 p-3'>
						<FaRegCheckCircle color='#E9E9E9'  size={20}/>
						<p className='w-[70%]'>{message}</p>
					</div>
				))}
			</div>
			<div className='flex justify-end'>
				<Button>Continue</Button>
			</div>
		</div>
	);
};

export default MailchimpBeforeInstalling;
