import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

function SkeletonChildrenDemo() {
	return (
		<div className='bg-white h-[2.5rem] w-full px-4 flex gap-2 items-center mx-auto relative top-0'>
			<Skeleton height='2.5rem' width='8%' />
			<Skeleton height='2.5rem' width='8%' />
			<Skeleton height='2.5rem' width='8%' />
			<Skeleton height='2.5rem' width='8%' />
		</div>
	);
}

export default function TapsLoading() {
	return (
		<Grid>
			<Grid item xs>
				<SkeletonChildrenDemo />
			</Grid>
		</Grid>
	);
}
