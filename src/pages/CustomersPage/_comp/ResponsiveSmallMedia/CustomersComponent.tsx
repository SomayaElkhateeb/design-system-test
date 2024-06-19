import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import Avatar from 'src/app/components/optimized/UiKits/Avatar';
import { settingMenus } from '../CustomersTables/CustomersTable';
import { useNavigate } from 'react-router-dom';
import { getImageUrl } from 'src/app/utils';

interface props {
	firstName: string;
	lastName?: string;
	imageUrl?: string;
	email: string;
	settingMenus: settingMenus[];
	id?: string;
	path?: string;
	noAvatar?: boolean;
}
export default function CustomersComponenet({
	settingMenus,
	firstName,
	lastName,
	imageUrl,
	email,
	id,
	path,
	noAvatar,
}: props) {
	//  hooks
	const navigate = useNavigate();
	const { handleSelect, selectedOption } = useSelectBox();
	return (
		<div className='flex-row-global-items-start justify-between '>
			<div
				onClick={() => {
					id && path && navigate(`/${path}/${id}`);
				}}
				className={`${path && 'cursor-pointer'} flex gap-3 items-start`}
			>
				{!noAvatar ? (
					<Avatar
						variant='user'
						firstName={firstName}
						lastName={lastName}
						imageUrl={imageUrl}
						size='lg'
					/>
				) : (
					imageUrl && <img src={getImageUrl(imageUrl)} loading='lazy' />
				)}

				<div className='flex-col-global gap-1 justify-between'>
					<h2 className='title text-sm'>
						{firstName} {lastName}
					</h2>
					<p className='font-normal text-sm'>{email}</p>
				</div>
			</div>
			<ThreeDotsButton
				sortMenus={settingMenus}
				selectedOption={selectedOption}
				handelSelect={handleSelect}
			/>
		</div>
	);
}
