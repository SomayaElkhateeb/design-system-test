import { AddFillIconWhite } from 'src/app/utils/icons';
import { useNavigate } from 'react-router-dom';
interface Props {
	path?: string;
	onClick?: () => void;
	campaigns?:boolean
}
export default function AddButtonMobile({ path, onClick,campaigns }: Props) {
	const navigate = useNavigate();

	const handleClick = () => {
		if (path) {
			navigate(path);
		} else if (onClick) {
			onClick();
		}
	};

	return (
		<button
			onClick={handleClick}
			className={`flex justify-center items-center size-12 rounded-full bg-primary ${campaigns?'bottom-[-1rem]':'bottom-[-4rem]'}  right-4 absolute`}
		>
			<AddFillIconWhite className='fill-white w-8 h-8' />
		</button>
	);
}

// Usage Example
// const { xs } = useResponsive();
// {xs && <AddButtonMobile onClick={} />}
// or
// {xs && <AddButtonMobile path='' />}
