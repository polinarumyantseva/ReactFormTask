import { useState } from 'react';
import { Signin, Signup, type SigninFormDataProps, type SignupFormDataProps } from './pages';
import './App.css';

export const App = () => {
	const [isUserExist, setIsUserExist] = useState<boolean>(true);

	const handleToggleForm = (): void => {
		setIsUserExist((prev) => !prev);
	};

	const handleSigninSubmit = (data: SigninFormDataProps) => {
		console.log('Signin data:', data);
	};

	const handleSignupSubmit = (data: SignupFormDataProps) => {
		console.log('Signup data:', data);
	};

	return (
		<div className='form-container'>
			{isUserExist ? (
				<Signin onSubmit={handleSigninSubmit} onToggleForm={handleToggleForm} />
			) : (
				<Signup onSubmit={handleSignupSubmit} onToggleForm={handleToggleForm} />
			)}
		</div>
	);
};
