import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'src/app/components/main/Header';
import Sidebar from 'src/app/components/main/Sidebar';
import SidebarMob from 'src/app/components/main/SidebarMob';

const RootLayout = () => {
	const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
	const isMobile = useMediaQuery({ maxWidth: 525 }); // for mobile . there in Header.tsx
	const isDesktop = useMediaQuery({ minWidth: 526 }); // for desktop

	const sidebarOpenHandler = () => {
		setSidebarIsOpen((prevState) => !prevState);
	};

	return (
		<div className='relative'>
			{isDesktop && (
				<div className='flex flex-row'>
					<div>
						<Sidebar isOpen={sidebarIsOpen} />
					</div>
					<div className='w-full bg-light-1'>
						<div className='sticky top-0 z-50'>
							<Header setIsOpen={sidebarOpenHandler} />
						</div>
						<main className='mb-5'>
							<Outlet />
						</main>
					</div>
				</div>
			)}
			{isMobile && (
				<div className='flex flex-row'>
					<div className='w-full bg-light-1'>
						<div className='sticky top-0 z-50'>
							<Header setIsOpen={sidebarOpenHandler} />
						</div>
						<main className='mb-5'>
							<Outlet />
						</main>
						<SidebarMob />
					</div>
				</div>
			)}
		</div>
	);
};
export default RootLayout;
// w-[calc(90vw-64px)]
//
