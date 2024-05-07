import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

function Header() {
	return (
		<div className='w-full py-2 px-4 flex justify-between items-center bg-white'>
			<div className='flex items-center gap-2 w-full'>
				<Skeleton height='4rem' width='40%' />
			</div>
			<div className='w-full flex gap-3 items-center justify-end'>
				<Skeleton height='4rem' width='15%' />
				<Skeleton height='4rem' width='20%' />
			</div>
		</div>
	);
}

function Body() {
	return (
		<div className='p-4 flex justify-between gap-7 w-full'>
			<div className='w-[75%] flex flex-col gap-[18px]'>
				<Skeleton variant='rounded' width='100%' height={300} />
				<Skeleton variant='rounded' width='100%' height={120} />
				<Skeleton variant='rounded' width='100%' height={120} />
				<Skeleton variant='rounded' width='100%' height={170} />
			</div>
			<div className='w-[25%]'>
				<Skeleton variant='rounded' height='9rem' width='100%' className='bg-white p-4' />
			</div>
		</div>
	);
}
function SkeletonChildrenDemo() {
	return (
		<>
			<Header />
			<Body />
		</>
	);
}

export default function AddDiscAndCoupLoading() {
	return (
		<Grid>
			<Grid item xs>
				<SkeletonChildrenDemo />
			</Grid>
		</Grid>
	);
}
