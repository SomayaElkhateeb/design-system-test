import { nanoid } from 'nanoid';

import { useTranslation } from 'react-i18next';

import { HeaderAsksAnsQueries, BodyCard, Children, Publish } from './_comp/ChildrenProps';
import { useState } from 'react';
import { FilterReviews } from './_comp/FilterReviews';
import { useOpenFilterDrawer } from 'src/app/utils/hooks/CustomHookOpenDrawer';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { ReviewsCard } from './_comp/ReviewsCard';
import ActionsComp from 'src/app/components/optimized/Buttons/ActionsComp';

export const AsksAndQueries = () => {
	const [reply, setReply] = useState(false);
	const [submitReply, setSubmitReply] = useState(false);
	const { HandelopenDrawer, openDrawer, HandelCloseDrawer } = useOpenFilterDrawer();
	const { selectedOption, handleSelect } = useSelectBox();
	const { t } = useTranslation();

	const sortMenus = [
		{ id: nanoid(), text: t('Date published') },
		{ id: nanoid(), text: t('Date replied') },
	];
	return (
		<div className='flex-col-global'>
			<div className='topTable flex-btn-end'>
				<ActionsComp
					HandelopenDrawer={HandelopenDrawer}
					filter
					sortMenus={sortMenus}
					selectedOption={selectedOption}
					handelSelect={handleSelect}
				/>
			</div>

			<div className='flex-col-global'>
				<h5 className='subtitle uppercase'>not responded (2)</h5>
				<div className='cardDetails-sharedClass'>
					<ReviewsCard
						header={<HeaderAsksAnsQueries />}
						body={<BodyCard setReply={setReply} submitReply={submitReply} query />}
						children={<Children setReply={setReply} setSubmitReply={setSubmitReply} query />}
						publish={<Publish setReply={setReply} query />}
						reply={reply}
						submitReply={submitReply}
						noRating
					/>
				</div>
			</div>

			{openDrawer && (
				<FilterReviews
					title={'Q & A Filters'}
					openDrawer={openDrawer}
					HandelCloseDrawer={HandelCloseDrawer}
				/>
			)}
		</div>
	);
};
