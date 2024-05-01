import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
// top left
function SkeletonChildrenDemoTopLeft(props: { loading?: boolean }) {
	const { loading = false } = props;

	return (
		<div>
			<Box>
				<div className='flex justify-between'>
					<Skeleton height='4rem' width='60%' />
					<Skeleton height='4rem' width='15%' />
				</div>
			</Box>
			<Skeleton variant='rectangular' width='100%' height='24rem'>
				<div style={{ paddingTop: '57%' }} />
			</Skeleton>
		</div>
	);
}

// top right
function SkeletonChildrenDemoTopRight(props: { loading?: boolean }) {
	const { loading = false } = props;

	return (
		<div className='bg-white rounded-xl w-full p-5 h-96 flex flex-col justify-between'>
			<Box>
				<div className='flex justify-between'>
					<Skeleton height='4rem' width='20%' />
					<Skeleton height='4rem' width='20%' />
				</div>
			</Box>
			<Box>
				<div className='flex justify-between'>
					<div style={{ width: '45%' }}>
						<Skeleton height='2rem' width='90%' />
						<Skeleton height='4rem' width='90%' />
					</div>
					<div style={{ width: '45%', left: 0 }} className='flex flex-col items-end'>
						<Skeleton height='2rem' width='90%' />
						<Skeleton height='4rem' width='90%' />
					</div>
				</div>
			</Box>
			<Box>
				<div className='flex justify-between'>
					<div style={{ width: '45%' }}>
						<Skeleton height='2rem' width='90%' />
						<Skeleton height='4rem' width='90%' />
					</div>
					<div style={{ width: '45%', left: 0 }} className='flex flex-col items-end'>
						<Skeleton height='2rem' width='90%' />
						<Skeleton height='4rem' width='90%' />
					</div>
				</div>
			</Box>
		</div>
	);
}
// button left
function SkeletonChildrenDemoButtonLeft(props: { loading?: boolean }) {
	const { loading = false } = props;

	return (
		<div>
			<Skeleton variant='rectangular' width='50%'>
				<div style={{ paddingTop: '57%' }} />
			</Skeleton>
		</div>
	);
}
// button right
function SkeletonChildrenDemoButtonRight(props: { loading?: boolean }) {
	const { loading = false } = props;

	return (
		<div>
			<Skeleton variant='rectangular' width='50%'>
				<div style={{ paddingTop: '57%' }} />
			</Skeleton>
		</div>
	);
}

// four parts
function SkeletonChildrenDemo(props: { loading?: boolean }) {
	const { loading = false } = props;

	return (
		<div className='grid gap-5 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1'>
			<div className='col-span-2'>
				<SkeletonChildrenDemoTopLeft />
			</div>
			<SkeletonChildrenDemoTopRight />
			<div className='col-span-2'>
				<SkeletonChildrenDemoButtonLeft />
			</div>
			<SkeletonChildrenDemoButtonRight />
		</div>
	);
}

// button
function Slider(props: { loading?: boolean }) {
	const { loading = false } = props;

	return (
		<div>
			<Skeleton variant='rectangular' width='50%'>
				<div style={{ paddingTop: '57%' }} />
			</Skeleton>
		</div>
	);
}

export const HomeLoading = () => {
	return (
		<Grid container spacing={8}>
			<Grid item xs>
				<div className='w-full h-full px-4 py-6'>
					<SkeletonChildrenDemo loading />
					<Slider />
				</div>
			</Grid>
		</Grid>
	);
};
