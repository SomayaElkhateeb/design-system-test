import { Link } from "react-router-dom";
import { UseLanguage } from "../../CustomHook/LanguageHook";
import { IoIosArrowForward } from 'react-icons/io';
import { BackIcon } from 'src/app/utils/icons';
export default function TopHeader({ name }: { name: string }) {

    //  custom hooks
    const language = UseLanguage();
    return (
        <div className='flex items-center gap-[.6rem]'>
            <Link to={-1}>{language === 'ar' ? <IoIosArrowForward /> : <BackIcon />}</Link>
            <h2 className='text-lg font-semibold capitalize text-title'>{name}</h2>
        </div>
    )
}