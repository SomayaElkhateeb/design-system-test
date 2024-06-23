import { Link } from 'react-router-dom';

import { Button } from 'src/app/components/optimized';
import { FacebookIcon, GoogleIcon } from 'src/app/utils/icons';


export function LoginOptions({ setLogin }: { setLogin: (value: boolean) => void }) {
	const handleEmailLogin = () => setLogin(true);
	return (
		<section className='grid w-full gap-5 grid-cols-1'>
			<Button variant={'primary'} onClick={handleEmailLogin} text='Continue With Email' />
			<span className='relative flex items-center justify-center h-10'>
				<span className='absolute left-[15%] w-[70%] h-px bg-borders-lines'></span>
				<span className='relative px-5 bg-white paragraph text-subtitle'>OR</span>
			</span>
			<Button variant={'secondary'} text='Continue with Google' LeftIcon={GoogleIcon} />
			<Button variant={'secondary'} text='continue with Facebook' LeftIcon={FacebookIcon} />
			<p className='paragraph text-subtitle flex justify-center'>
				Already have an account?&nbsp;
				<Link to='/login' className='text-primary font-semibold'>
					Sign In
				</Link>
			</p>
		</section>
	);
}
