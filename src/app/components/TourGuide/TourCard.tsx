
import { getImageUrl } from 'src/app/utils';
import { Button } from '../optimized';
interface TourCardProps {
	index: number;
	step: {
		image: string;
		content: string;
		link?: string;
	};
	backProps: object;
	closeProps: object;
	primaryProps: object;
	tooltipProps: object;
	size: number;
	isLastStep: boolean;
}
export default function TourCard({
	index,
	step,
	backProps,
	closeProps,
	primaryProps,
	tooltipProps,
	size,
	isLastStep,
}: TourCardProps) {
	const { image, content, link } = step;
	const stepNumber = index + 1;


	return (
		<div {...tooltipProps} className='w-80 h-52 p-3 global-cards flex flex-col justify-between'>
			<div className='flex justify-between items-start'>
				<div className='size-20 grid place-content-center border-light-2 border rounded-md'>
					<img src={getImageUrl(image)} alt='icon' className='w-14' />
				</div>
				{!isLastStep && <Button {...closeProps} variant='link' text='End tour' />}
			</div>
			<p className='paragraph'>
				{content}
				{link && (
					// <a href={link} className='text-primary'>
					// 	Learn More
					// </a>
					<Button {...closeProps} variant='link' text='Learn More' />
				)}
			</p>
			<div className='flex justify-between items-end'>
				<p className='subtitle'>
					{stepNumber}/{size}
				</p>
				<div className='gap-2 flex'>
					{stepNumber > 1 && <Button {...backProps} variant='tertiary' text='Back' />}
					<Button {...primaryProps} variant='primary' text={isLastStep ? 'Finish' : 'Next'} />
				</div>
			</div>
		</div>
	);
}
