import { useTranslation } from 'react-i18next';
import { Button } from '..';
import { EditIcon, LocationIcon } from 'src/app/utils/icons';

interface IData {
	data: Data[];
	title: string;
	icon?: React.ReactNode;
	contact?: string | number;
	name?: string;
	value?: number | string;
	id: string | number;
	contacts: boolean;
	isEdit?: boolean;
	isLocation?: boolean;
}

const ContactCard: React.FC<IData> = ({ data, title, contacts, isEdit, isLocation }) => {
	const { t } = useTranslation();
	return (
		<div className='cardDetails-sharedClass p-5'>
			<div className='flex justify-between items-center'>
				<h3 className='text-title font-semibold'>{title}</h3>
				{/* is edit */}
				{isEdit && (
					<Button LeftIcon={EditIcon} variant='tertiary'>
						{t('edit')}
					</Button>
				)}
			</div>

			{contacts ? (
				<div className='flex flex-col gap-3 pt-4'>
					{data.map((e) => (
						<div className='flex items-center gap-2' key={e.id}>
							{e.icon}
							<p className='text-title text-sm'>{e.contact}</p>
						</div>
					))}
				</div>
			) : (
				<div className='flex flex-col gap-1.5 pt-4'>
					{data.map((e) => (
						<p className='flex items-center justify-between' key={e.id}>
							<span className='text-subtitle text-sm'>{e.name}:</span>
							<span className='text-title text-sm'>SAR {e.value}</span>
						</p>
					))}
					{isLocation && (
						<Button className='pt-3' LeftIcon={LocationIcon} variant='tertiary'>
							{t('show on map')}
						</Button>
					)}
				</div>
			)}
		</div>
	);
};

export default ContactCard;
