import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../Buttons/Button';
import { RxDotsHorizontal } from 'react-icons/rx';
import useResponsive from 'src/app/utils/hooks/useResponsive';

const SubHeaderActionBtns = ({ onSubmit }: { onSubmit: () => void }) => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	return (
		<>
			<Button variant='secondary' onClick={() => navigate(-1)}>
				{t('Discard')}
			</Button>
			<Button variant='primary' onClick={onSubmit}>
				{t('Save Changes')}
			</Button>
		</>
	);
};

export default SubHeaderActionBtns;

export const SubHeaderDefaultBtns = ({ onSubmit }: { onSubmit: () => void }) => {
	const { xs } = useResponsive();

	return <>{!xs ? <SubHeaderActionBtns onSubmit={onSubmit} /> : <RxDotsHorizontal />}</>;
};
export const SubHeaderMobileBtns = ({ onSubmit }: { onSubmit: () => void }) => {
	const { xs } = useResponsive();

	return (
		<>
			{xs && (
				<div className='flex space-x-3 justify-center bg-white   w-full '>
					<SubHeaderActionBtns onSubmit={onSubmit} />
				</div>
			)}
		</>
	);
};
