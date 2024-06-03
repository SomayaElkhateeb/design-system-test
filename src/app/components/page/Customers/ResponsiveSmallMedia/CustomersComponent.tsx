import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import Avatar from 'src/app/components/optimized/UiKits/Avatar';
import { settingMenus } from '../CustomersTable';
import { useNavigate } from 'react-router-dom';

interface props {
	firstName: string;
	lastName: string;
	imageUrl?: string;
	email: string;
	settingMenus: settingMenus[];
	id?: string;
	path?: string;
}
export default function CustomersComponenet({
	settingMenus,
	firstName,
	lastName,
	imageUrl,
	email,
	id,
	path,
}: props) {
	//  hooks
	const navigate = useNavigate();
	const { handleSelect, selectedOption } = useSelectBox();
	return (
		<div className=' flex gap-[3rem] items-start'>
			<div
				onClick={() => {
					id && navigate(`/${path}/${id}`);
				}}
				className=' cursor-pointer flex gap-3'
			>
				<Avatar
					variant='user'
					firstName={firstName}
					lastName={lastName}
					imageUrl={imageUrl}
					size='lg'
				/>
				<div className='flex flex-col justify-between'>
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
