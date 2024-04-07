// Done refactoring to type
// TODO: (needs to be reviewed)
import image from 'src/app/assets/brand/cloud.svg';

export default function PopupDiscover() {
	return (
		<div className='grid grid-row-3 border border-constrained bg-white w-[420px] p-[12px]'>
			<div className='bg-sec-light rounded-md h-[131px] w-[396px] mb-5 flex justify-center items-center'>
				<img className='h-[29.92px] w-[43.39px]' src={image} alt='brand' />
			</div>
			<div className='mb-5'>
				<h3 className='text-sm font-semibold text-title'>Discover our learnning hub</h3>
				<p className='mt-2 text-sm text-subtitle'>Learn about how to use dookan and a lot more!</p>
			</div>
			<div className='flex items-end justify-end gap-4'>
				<button className='btn-sec'>Help center</button>
				<button className='btn-pri'>Discover Now</button>
			</div>
		</div>
	);
}
