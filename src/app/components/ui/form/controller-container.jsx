import { cn } from 'src/app/utils';

/**
 * @param {{
 * 	start?: import('react').ReactNode;
 * 	startSeparator?: boolean;
 * 	end?: import('react').ReactNode;
 * 	endSeparator?: boolean;
 * 	children: import('react').ReactNode;
 * }} props
 */
export default function ControllerContainer(props) {
	return (
		<div className={cn('flex border rounded-md', props.start && 'ps-2.5', props.end && 'pe-2.5')}>
			{props.start}
			{props.start && props.startSeparator && (
				<div className='border-r h-[80%] my-[1.25%] border-gray-200 ps-2.5' />
			)}
			{props.children}
			{props.end && props.endSeparator && (
				<div className='border-l h-[80%] my-[1.25%] border-gray-200 pe-2.5' />
			)}
			{props.end}
		</div>
	);
}
