import HeaderAuth from './comp/HeaderAuth';
import FooterAuth from './comp/FooterAuth';
import Register from './comp/Register';

const Account = () => {
	return (
		<div className='bg-white h-screen w-full flex flex-col justify-between'>
			{/* HEADER AUTH */}
			<HeaderAuth />
			{/* CONTENT */}

			<Register />
			{/* FOOTER AUTH */}
			<FooterAuth />
		</div>
	);
};

export default Account;
