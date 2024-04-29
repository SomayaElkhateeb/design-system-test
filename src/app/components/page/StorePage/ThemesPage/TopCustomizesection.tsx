import { useTranslation } from 'react-i18next';
import { Button } from 'src/app/components/optimized';
import { getImageUrl } from 'src/app/utils';

export default function TopCustomizeSection() {
	//  hooks
	const { t } = useTranslation();
	return (
		<div className='bg-pri-dark rounded-[.4rem] pt-[1rem] text-white'>
			<div className='w-[95%] mx-auto flex flex-row justify-start gap-[1rem]'>
				{/*  img */}
				<img src={getImageUrl('images/product.png')} loading='lazy' alt='img' className='w-[130px]'/>
				<div className='flex flex-col gap-[1.5rem] pb-[.6rem]'>
					<div className='flex flex-col gap-[.2rem]'>
						<p className=' text-[.8rem] opacity-70'>{t('CURRENT THEME')}</p>
						<p className=' text-[.95rem] font-semibold'>Purfumika</p>
						<p className=' text-[.8rem] opacity-70'>
							{t('This is the theme customers see when they visit your store.')}
						</p>
					</div>
                    <div className='flex flex-row items-center gap-[1rem]'>
					<Button className='w-[8.9rem] h-[2rem] flex items-center justify-center text-[.8rem] font-semibold'>
						{t('Customize design')}
					</Button>

                    <Button className='w-[6.2rem] h-[2rem] flex items-center justify-center text-[.8rem] font-semibold' variant='LearnButton' >
						{t('Learn more')}
					</Button>


                    </div>
				</div>
				{/*  describtion */}
			</div>
		</div>
	);
}
