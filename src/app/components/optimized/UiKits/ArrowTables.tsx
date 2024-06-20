import { UseLanguage } from 'src/app/utils/hooks/LanguageHook';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export default function ArrowTables({ path }: { path: string }) {
	const language = UseLanguage();
	const navigate = useNavigate();
	return (
		<>
			{language === 'ar' ? (
				<IoIosArrowBack className='text-subtitle' onClick={() => navigate(path)} />
			) : (
				<IoIosArrowForward className='text-subtitle' onClick={() => navigate(path)} />
			)}
		</>
	);
}
