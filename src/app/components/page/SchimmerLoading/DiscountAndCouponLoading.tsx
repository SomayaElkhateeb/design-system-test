import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

function Header() {
	return (
		<div className='w-full py-2 px-4 flex justify-between items-center'>
			<div className='flex items-center gap-2 w-full'>
				<Skeleton height='4rem' width='25%' />
			</div>
			<div className='w-full flex gap-3 items-center justify-end'>
				<Skeleton height='4rem' width='15%' />
				<Skeleton height='4rem' width='15%' />
			</div>
		</div>
	);
}

function Table() {
	return (
		<div className='w-full py-2 px-4 flex flex-col'>
			<Skeleton height='4rem' width='100%' />
			<Skeleton variant='rounded' width='100%' height={400} />
		</div>
	);
}
function SkeletonChildrenDemo() {
	return (
		<>
			<Header />
			<hr />
			<Table />
		</>
	);
}

export default function DiscountAndCouponLoading() {
	return (
		<Grid>
			<Grid item xs>
				<SkeletonChildrenDemo />
			</Grid>
		</Grid>
	);
}
