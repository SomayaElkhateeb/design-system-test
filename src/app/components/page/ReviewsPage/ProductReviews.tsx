import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useOpenFilterDrawer } from 'src/app/utils/hooks/CustomHookOpenDrawer';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { nanoid } from 'nanoid';
import { Button } from 'src/app/components/optimized';
import ActionsComp from 'src/app/components/optimized/Buttons/ActionsComp';
import FilterOrdersComponent from '../Orders/FilterOrder/FilterOrdersComponent';
import { BodyCard, Children, HeaderCard, Publish } from './_comp/ChildrenProps';
import { ReviewsCard } from '..';

export const ProductReviews = () => {
	const [reply, setReply] = useState(false);
	const [submitReply, setSubmitReply] = useState(false);
	const { HandelopenDrawer, openDrawer, HandelCloseDrawer } = useOpenFilterDrawer();
	const { selectedOption, handleSelect } = useSelectBox();
	const { t } = useTranslation();

	const sortMenus = [
		{ id: nanoid(), text: t('Date published') },
		{ id: nanoid(), text: t('Top reviews') },
		{ id: nanoid(), text: t('Sales Ascending') },
	];

	return (
		<div className='flex-col-top-section-pages'>
			<div className='topTable pb-3'>
				<Button variant='primary'>{t('publish all')}</Button>

				<ActionsComp
					HandelopenDrawer={HandelopenDrawer}
					filter
					sortMenus={sortMenus}
					selectedOption={selectedOption}
					handelSelect={handleSelect}
				/>
			</div>

			<div className='flex-col-top-section-pages'>
				<h5 className='subtitle uppercase'>unpublished (2)</h5>
				<div className='cardDetails-sharedClass'>
					<ReviewsCard
						header={<HeaderCard />}
						body={<BodyCard setReply={setReply} submitReply={submitReply} />}
						children={<Children setReply={setReply} setSubmitReply={setSubmitReply} />}
						publish={<Publish setReply={setReply} />}
						// props
						reply={reply}
						submitReply={submitReply}
					/>
				</div>
			</div>

			<div className='flex-col-top-section-pages'>
				<h5 className='subtitle uppercase'>published (300)</h5>
				<div className='cardDetails-sharedClass'>
					<ReviewsCard
						header={<HeaderCard />}
						body={<BodyCard setReply={setReply} submitReply={submitReply} published />}
						children={<Children setReply={setReply} setSubmitReply={setSubmitReply} />}
						publish={<Publish setReply={setReply} />}
						// props
						reply={reply}
						submitReply={submitReply}
					/>
				</div>
			</div>

			{openDrawer && (
				<FilterOrdersComponent openDrawer={openDrawer} HandelCloseDrawer={HandelCloseDrawer} />
			)}
		</div>
	);
};
