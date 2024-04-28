import { Rating } from '@mui/material';
import Avatar from './Avatar';
import SlideCard from 'src/app/components/page/Cards/SlideCard';
import { useTranslation } from 'react-i18next';

interface UserReview {
	firstName: string;
	lastName: string;
	date: string;
	rating: number;
	review: string;
}

interface ReviewData {
	averageRating: number;
	totalReviews: number;
	recentReviews: UserReview[];
}

interface AnalyticsReviewsProps {
	data: ReviewData;
}

export default function AnalyticsReviews({ data }: AnalyticsReviewsProps) {
	const {t} = useTranslation()

	return (
		<div>
			<SlideCard
				items={data.recentReviews}
				title={t('Reviews')}
				itemsPerSlide={1}
				SlideComponent={UsersReview}
			>
				<AverageRating averageRating={data.averageRating} totalReviews={data.totalReviews} />
			</SlideCard>
		</div>
	);
}

interface AverageRating {
	averageRating: number;
	totalReviews: number;
}

function AverageRating({ averageRating, totalReviews }: AverageRating) {
	return (
		<div className='grid gap-3 mb-5'>
			<div className='flex items-end'>
				<h2 className='text-3xl text-title'>{averageRating}</h2>
				<span className='subtitle text-lg'>&nbsp; ({totalReviews})</span>
			</div>
			<Rating precision={0.5} value={averageRating} readOnly />
		</div>
	);
}

function UsersReview({ firstName, lastName, date, rating, review }: UserReview) {
	const {t} = useTranslation()

	return (
		<div className='grid gap-3 mb-4'>
			<h2 className='title text-base capitalize'>{t('Recent')}</h2>
			<div className='flex gap-3 items-start'>
				<Avatar variant='user' firstName={firstName} lastName={lastName} />
				<div>
					<h2 className='title text-lg capitalize'>
						{firstName} {lastName} &nbsp; <span className='subtitle'>{date}</span>
					</h2>
					<Rating precision={0.5} value={rating} readOnly />
					<p className='paragraph text-title'>{review}</p>
				</div>
			</div>
		</div>
	);
}
