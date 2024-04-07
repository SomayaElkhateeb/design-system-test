// Done refactoring to type
// TODO: (needs to be reviewed)
import image from 'src/app/assets/brand/cloud.svg';

export default function PopupWelcome() {
	return (
		<div className='grid grid-row-3 border border-constrained rounded-md w-[420px] h-[247px] p-5 bg-white'>
			<div className='flex items-center justify-center w-full mb-5 rounded'>
				<img className='w-[95.04px] h-[65.54px]' src={image} alt='' />
			</div>
			<div className='mb-2 text-center'>
				<h3 className='font-semibold text-title'>Welcome to Dookan</h3>
				<p className='mt-2 text-[13px] text-pri-dark'>
					Hey, this is Bot, I&apos;m here to be your <br /> assistant, Let&apos;s take a quick tour
				</p>
			</div>
			<div className='flex items-end justify-end gap-4'>
				<button className='btn-ter'>No Thanks</button>
				<button className='btn-pri'>Ok</button>
			</div>
		</div>
	);
}
