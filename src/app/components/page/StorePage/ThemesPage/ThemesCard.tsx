import { useNavigate } from 'react-router-dom';
import { getImageUrl } from 'src/app/utils';

export default function ThemesCard() {
	// hooks
	const navigate = useNavigate();

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
				<div className='bg-sec-light w-[3rem] flex flex-row justify-center items-center h-[1.5rem] rounded-[1rem] text-[.8rem] text-sec-hover'>
					Free
				</div>
			</div>
		</div>
	);
}
