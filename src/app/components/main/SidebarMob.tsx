import { getImageUrl } from 'src/app/utils';
import { NavLink, useLocation } from 'react-router-dom';
import { sidebarLinksMob, sidebarLinksMobDrawer } from 'src/app/utils/constants';
import { useTranslation } from 'react-i18next';
import { ChatIcon, DownIcon, FaqIcon, NavIcon } from 'src/app/utils/icons';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { ClientBox } from '../optimized';
import Avatar from '../optimized/UiKits/Avatar';
import ManageAccountCard from '../optimized/Cards/ManageAccountCard';

export default function SidebarMob() {
	const [openMore, setOpenMore] = useState(false);
	return (
		<>
			{openMore ? (
				<aside className='h-dvh z-50 bg-white fixed top-0 left-0 right-0 overflow-y-auto'>
					<header className='flex items-center justify-between p-4'>
						<div className=''>
							<img src={getImageUrl('brand/en-light.svg')} alt='logo' className='w-32 ' />
						</div>
						<IoClose
							size={24}
							color='#032C58'
							onClick={() => setOpenMore(false)}
							className='cursor-pointer'
						/>
					</header>
					{/* dialog */}
					<Profile />
					<ContainLinks setOpenMore={setOpenMore} list={true} />
				</aside>
			) : (
				<ContainLinks setOpenMore={setOpenMore} />
			)}
		</>
	);
}

const ContainLinks = ({ setOpenMore, list }: { setOpenMore: () => void; list?: boolean }) => {
	const { t } = useTranslation();
	return (
		<>
			<ul className={`bg-white px-1  ${list ? '' : 'h-[65px] flex items-center justify-between'}`}>
				{list ? (
					<>
						<NavLink>
							<div className='flex items-center gap-4 py-2 px-3'>
								<FaqIcon className='fill-pri-dark size-[24px] group-hover:fill-primary' />

								<p className='text-title text-sm'>{t('Help center')}</p>
							</div>
						</NavLink>
					</>
				) : (
					<>
						{sidebarLinksMob.map((link) => (
							<li key={link.id}>
								<Links {...link} />
							</li>
						))}
					</>
				)}

				{list ? (
					<>
						{sidebarLinksMobDrawer.map((link) => (
							<li key={link.id}>
								<hr />
								<Links {...link} list={true} />
							</li>
						))}
					</>
				) : (
					<>
						<li>
							<NavLink>
								<div className='group flex flex-col justify-center items-center px-3 h-[60px] rounded-lg group-[.click]:bg-light-3  hover:bg-light-3'>
									<ChatIcon className='fill-hint size-[24px] group-hover:fill-primary' />

									<p className='text-subtitle text-sm group-hover:text-primary group-[.click]:font-semibold group-[.click]:text-primary'>
										{t('Chat')}
									</p>
								</div>
							</NavLink>
						</li>
						<li>
							<NavLink>
								<div
									onClick={() => setOpenMore(true)}
									className='group flex flex-col justify-center items-center px-3 h-[60px] rounded-lg group-[.click]:bg-light-3  hover:bg-light-3'
								>
									<NavIcon className='fill-hint size-[24px] group-hover:fill-primary' />

									<p className='text-subtitle text-sm group-hover:text-primary group-[.click]:font-semibold group-[.click]:text-primary'>
										{t('More')}
									</p>
								</div>
							</NavLink>
						</li>
					</>
				)}
			</ul>
		</>
	);
};

const Links = ({
	Icon,
	name,
	path,
	list,
}: {
	Icon: React.ReactNode;
	name: string;
	path: string;
	list?: boolean;
}) => {
	//  hooks
	const { t } = useTranslation();
	const { pathname } = useLocation();
	const isActive = pathname === path || location.pathname.startsWith(`/${path}`);

	return (
		<NavLink to={path} className={`${isActive ? 'active' : ''} `}>
			<div
				className={`flex px-3 ${
					list
						? 'items-center gap-4 py-2 '
						: 'group  flex-col justify-center items-center  h-[60px] rounded-lg group-[.active]:bg-light-3  hover:bg-light-3'
				}`}
			>
				<Icon
					className={`size-[24px] ${list ? 'fill-pri-dark' : 'fill-hint group-hover:fill-primary'}`}
				/>

				<p
					className={`text-sm ${
						list
							? 'text-title'
							: 'text-subtitle group-hover:text-primary group-[.active]:font-semibold group-[.active]:text-primary'
					}`}
				>
					{t(name)}
				</p>
			</div>
		</NavLink>
	);
};

const Profile = () => {
	const [showProfile, setShowProfile] = useState(false);
	return (
		<>
			<div className='p-4 flex items-center justify-between'>
				<ClientBox
					avatar={<Avatar variant='user' firstName='John' />}
					title='Fan Al Taalouq'
					details='Mohamed Samy'
				/>

				<button onClick={() => setShowProfile(!showProfile)}>
					{showProfile ? (
						<DownIcon className='fill-hint cursor-pointer rotate-180' />
					) : (
						<DownIcon className='fill-hint cursor-pointer' />
					)}
				</button>
			</div>
			<div className='py-0.5 bg-light-2'>
				{showProfile && <ManageAccountCard onClose={() => setShowProfile(false)} menu={true} />}
			</div>
		</>
	);
};
