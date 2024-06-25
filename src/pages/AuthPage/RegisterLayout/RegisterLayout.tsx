import { type ReactNode } from 'react';

import useResponsive from 'src/app/utils/hooks/useResponsive';
import { RegisterFooter, RegisterHeader, RegisterImage } from './RegisterLayoutUtils';

export default function RegisterLayout({ children }: { children: ReactNode }) {
	const { xs, sm } = useResponsive();
	return (
		<section className='flex flex-col custom_container h-screen bg-white'>
			<RegisterHeader />
			<section className='flex items-center justify-between h-full flex-grow'>
				<div className='w-[28.5rem] max-md:w-full h-full flex justify-center items-center'>{children}</div>
				{!xs && !sm && <RegisterImage path='images/register_1.svg' />}
			</section>
			<RegisterFooter />
		</section>
	);
}
