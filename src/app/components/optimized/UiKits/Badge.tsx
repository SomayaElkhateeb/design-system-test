import { CheckIcon } from 'src/app/utils/icons';

export default function Badge({ status }: { status: string }) {
	const installStyle = 'text-pri-hover bg-light-3 pl-1.5';
	const freeStyle = 'bg-sec-light text-sec-hover';
	const classes = status === 'installed' ? installStyle : status === 'free' ? freeStyle : '';
	return (
		<div
			className={`flex items-center w-fit py-[3px] px-[13px] paragraph rounded-full capitalize ${classes}`}
		>
			{status === 'installed' && <CheckIcon className='fill-pri-hover' />}
			<p>{status}</p>
		</div>
	);
}
