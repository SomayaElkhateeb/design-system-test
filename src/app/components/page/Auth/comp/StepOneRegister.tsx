// import { GoogleLoginButton } from 'react-social-login-buttons';
// import { LoginSocialGoogle } from 'reactjs-social-login';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
const StepOneRegister = () => {
	return (
		<div className='flex flex-col gap-10'>
			<button className='btn-pri w-full'>continue with email</button>

			<div
				className='text-subtitle relative mx-auto text-center  after:w-20 after:h-[1px] after:absolute after:left-12 after:top-3 after:bg-constrained before:w-20 before:h-[1px] before:absolute before:right-12 before:top-3 before:bg-constrained
            '
			>
				OR
			</div>
			{/* google */}

			<div>
				{/* <LoginSocialGoogle
					client_id={'536550897700-0lpl9nm5kgd5sra85d8jb4qgj48shp1m.apps.googleusercontent.com'}
					scope='openid profile email'
					discoveryDocs='claims_supported'
					access_type='offline'
					onResolve={({ provider, data }) => {
						console.log(provider, data);
					}}
					onReject={(err) => {
						console.log(err);
					}}
				>
					<GoogleLoginButton />
				</LoginSocialGoogle> */}
				<GoogleLogin
					onSuccess={(credentialResponse) => {
						// console.log(credentialResponse);
						let decoded = jwtDecode(credentialResponse);
						// console.log(decoded);
					}}
					onError={() => {
						// console.log('Login Failed');
					}}
				/>
			</div>
		</div>
	);
};

export default StepOneRegister;
