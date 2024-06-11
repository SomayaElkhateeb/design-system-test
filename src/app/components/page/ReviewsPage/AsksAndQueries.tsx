import { nanoid } from 'nanoid';
import { useOpenFilterDrawer } from '../../SideBar/CustomHookOpenDrawer';
import ActionsComp from '../../optimized/Buttons/ActionsComp';
import useSelectBox from '../../optimized/Menu/useSelectBox';
import { useTranslation } from 'react-i18next';
import { ReviewsCard } from '..';
import { HeaderAsksAnsQueries, BodyCard, Children, Publish } from './_comp/ChildrenProps';
import { useState } from 'react';
import { FilterReviews } from './_comp/FilterReviews';

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
		<div className='flex-col-top-section-pages'>
			<div className='topTable flex-btn-end'>
				<ActionsComp
					HandelopenDrawer={HandelopenDrawer}
					filter
					sortMenus={sortMenus}
					selectedOption={selectedOption}
					handelSelect={handleSelect}
				/>
			</div>

			<div className='flex-col-top-section-pages'>
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
					title={t('Q & A Filters ')}
					openDrawer={openDrawer}
					HandelCloseDrawer={HandelCloseDrawer}
				/>
			)}
		</div>
	);
};
