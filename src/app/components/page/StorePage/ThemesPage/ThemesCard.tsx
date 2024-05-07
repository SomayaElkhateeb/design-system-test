import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { LabelIcon } from 'src/app/components/optimized';
import Badge from 'src/app/components/optimized/UiKits/Badge';
import { getImageUrl } from 'src/app/utils';

export default function ThemesCard() {
	// hooks
	const navigate = useNavigate();

	// let backgroundColor, textColor;
	// switch (props.status) {
	// 	case 'free':
	// 		backgroundColor = '#EEF9F5';
	// 		textColor = '#49A882';
	// 		break;
	// 	case 'installed':
	// 		backgroundColor = '#F3F7FF';
	// 		textColor = '#0B47D9';
	// 		break;
	// 	default:
	// 		backgroundColor = 'gray';
	// 		textColor = 'white';
	// 		break;
	// }
	return (
		<div
			onClick={() => navigate('?ThemeId=1&&name=Purfumika')}
			className='w-[100%] border-constrained rounded-[.45rem] cursor-pointer'
		>
			<div className='w-[95%] mx-auto flex flex-col gap-[.5rem]'>
				<img
					src={getImageUrl('images/ThemesPage/smallwebsiteimg.png')}
					loading='lazy'
					alt='smallwebsiteimg'
				/>
				<p className='text-[.8rem] font-semibold'>Purfumika</p>
				<p className='text-[.8rem] text-subtitle'>Perfumes, cosmetics</p>
				
				
					<Badge status={'installed'} />
				
			</div>
		</div>
	);
}
