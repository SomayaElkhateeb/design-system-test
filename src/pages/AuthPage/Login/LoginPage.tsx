import { useState } from 'react';
import AuthForm from './_comp/IdentifierForm/IdentifierForm';
import RegisterLayout from '../RegisterLayout/RegisterLayout';
import PasswordForm from './_comp/PasswordForm/PasswordForm';
import { BackIcon } from 'src/app/utils/icons';

export default function LoginPage() {
	const [step, setStep] = useState(1);
	const [identifier, setIdentifier] = useState('');

	const handleIdentifierChange = (identifier: string) => {
		setIdentifier(identifier);
	};

	return (
		<RegisterLayout>
			<div className='flex flex-col w-full'>
				{step === 2 && <Identifier identifier={identifier} />}
				<h2 className='title text-2xl	mt-2 mb-6'>Sign in</h2>
				{step === 1 ? (
					<AuthForm setStep={setStep} onIdentifierChange={handleIdentifierChange} />
				) : (
					<PasswordForm />
				)}
			</div>
		</RegisterLayout>
	);
}

function Identifier({ identifier }: { identifier: string }) {
	return (
		<div className='flex items-center'>
			<BackIcon className='fill-primary' />
			<p className='paragraph text-primary'>{identifier}</p>
		</div>
	);
}
