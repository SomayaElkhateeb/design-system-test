import { BackIconSm, NextIconSm } from 'src/app/utils/icons';

export default function PrevNextBtn({
	onClickPrev,
	onClickNext,
}: {
	onClickPrev?: () => void,
	onClickNext?: () => void,
}) {
	return (
		<div className='flex w-[67px] h-[34px]'>
			<button
				onClick={onClickPrev}
				className='flex items-center justify-center w-full border rounded-l border-pri-dark'
			>
				<BackIconSm className=' fill-pri-dark ms-1 mt-1.5' />
			</button>
			<button
				onClick={onClickNext}
				className='flex items-center justify-center w-full border rounded-r border-pri-dark'
			>
				<NextIconSm className=' fill-pri-dark ms-1.5 mt-1.5' />
			</button>
		</div>
	);
}
