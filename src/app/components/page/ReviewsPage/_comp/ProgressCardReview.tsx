import { GoStarFill } from 'react-icons/go';
import { RatingCard } from './RatingCard';
import { BackAndroidIcon } from 'src/app/utils/icons';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import useResponsive from 'src/app/utils/hooks/useResponsive';

export const ProgressCardReview = () => {
	const { md } = useResponsive();
	const rating = 4.75;

	return (
		<section className='cardDetails-sharedClass px-5 py-10'>
			<div className='flex-col-top-section-pages gap-15'>
				<div className='flex flex-col gap-4 items-start w-full md:flex-row md:justify-between md:items-start'>
					<div className='flex flex-col gap-1'>
						<div className='flex items-end'>
							<BackAndroidIcon
								className={`fill-${rating < 3 ? 'error' : 'success'}  ${
									rating < 3 ? '-rotate-90' : 'rotate-90'
								}`}
							/>
							<p className={`text-${rating < 3 ? 'error' : 'success'}`}>{rating} %</p>
						</div>

						<div
							className='text-title flex items-center
						 gap-1'
						>
							<p className='text-[2rem]'>4.0</p>
							<p className='text-lg'>(54)</p>
						</div>
						<div className='flex-row-global'>
							<GoStarFill size={24} color='gold' />
							<GoStarFill size={24} color='gold' />
							<GoStarFill size={24} color='gold' />
							<GoStarFill size={24} color='gold' />
							<GoStarFill size={24} color='gold' />
						</div>
					</div>
					{md ? <p className='bg-constrained w-[1px] h-[8.3rem]' /> : ''}

					<div>
						<Progress />
					</div>
				</div>

				<div className='flex flex-col gap-2'>
					<h3 className='text-title font-semibold'>Recent</h3>
					<RatingCard />
				</div>
			</div>
		</section>
	);
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 10,
	borderRadius: 5,
	width: '250px',
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: theme.palette.mode === 'light' ? '#FFCC73' : '#F2F3F7',
	},
}));

function Progress() {
	return (
		<Box sx={{ width: '100%' }}>
			<div className='flex flex-col gap-2'>
				<div className='flex items-center gap-1 text-sm text-subtitle'>
					<span>5 Stars</span>
					<BorderLinearProgress variant='determinate' value={50} />
					<span>(15)</span>
				</div>
				<div className='flex items-center gap-1 text-sm text-subtitle'>
					<span>4 Stars</span>
					<BorderLinearProgress variant='determinate' value={20} />
					<span>(10)</span>
				</div>
				<div className='flex items-center gap-1 text-sm text-subtitle'>
					<span>3 Stars</span>
					<BorderLinearProgress variant='determinate' value={50} />
					<span>(4)</span>
				</div>
				<div className='flex items-center gap-1 text-sm text-subtitle'>
					<span>2 Stars</span>
					<BorderLinearProgress variant='determinate' value={30} />
					<span>(1)</span>
				</div>
				<div className='flex items-center gap-1 text-sm text-subtitle'>
					<span>1 Stars</span>
					<BorderLinearProgress variant='determinate' value={10} />
					<span>(0)</span>
				</div>
			</div>
		</Box>
	);
}
