import { Button } from 'src/app/components/optimized';

export default function PaymentCard({
	Icon,
	title,
	description,
	buttonText,
	onButtonClick
}) {
	return (
		<div className='mr-3 overflow-hidden bg-white rounded-lg shadow-md w-80'>
			<div className='flex flex-col px-4 py-5 space-y-3'>
				<div className='flex items-center justify-center flex-shrink-0 rounded-full bg-blue-50 size-16'>
					{Icon}
				</div>
				<div className='w-full h-32'>
					<h5 className='text-lg font-semibold text-gray-800'>{title}</h5>
					<p className='text-lg text-gray-800'>{description}</p>
				</div>
				<div>
					<Button className='text-lg' onClick={onButtonClick} variant='linkBtn'>
						{buttonText}
					</Button>
				</div>
			</div>
		</div>
	);
}
