import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

function Header() {
	return (
		<div className='w-full py-2 px-4 flex justify-between items-center'>
			<Skeleton variant='rounded' width='100%' height={190} />
		</div>
	);
}

function Cards() {
	return (
		<div className='grid grid-cols-4 gap-6 py-4 px-4 '>
			<Skeleton variant='rounded' height={100} />
			<Skeleton variant='rounded' height={100} />
			<Skeleton variant='rounded' height={100} />
			<Skeleton variant='rounded' height={100} />
			<Skeleton variant='rounded' height={100} />
			<Skeleton variant='rounded' height={100} />
			<Skeleton variant='rounded' height={100} />
			<Skeleton variant='rounded' height={100} />
			<Skeleton variant='rounded' height={100} />
			<Skeleton variant='rounded' height={100} />
			<Skeleton variant='rounded' height={100} />
			<Skeleton variant='rounded' height={100} />
			<Skeleton variant='rounded' height={100} />
		</div>
	);
}
function SkeletonChildrenDemo() {
	return (
		<>
			<Header />
			<Cards />
		</>
	);
}

export default function SettingsLoading() {
	return (
		<Grid>
			<Grid item xs>
				<SkeletonChildrenDemo />
			</Grid>
		</Grid>
	);
}
