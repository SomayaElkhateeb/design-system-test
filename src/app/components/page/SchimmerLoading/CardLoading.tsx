import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

function SkeletonChildrenDemo(props: { loading?: boolean }) {
	const { loading = false } = props;

	return (
		<div>
			<Skeleton variant='rectangular' width='100%'>
				<div style={{ paddingTop: '57%' }} />
			</Skeleton>
		</div>
	);
}

export default function CardLoading() {
	return (
		<Grid container spacing={8}>
			<Grid item xs>
				<SkeletonChildrenDemo loading />
			</Grid>
		</Grid>
	);
}
