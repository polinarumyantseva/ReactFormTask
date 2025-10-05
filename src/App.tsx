import { useState } from 'react';
import { Signin, Signup, type SigninFormDataProps, type SignupFormDataProps } from './pages';
import './App.css';

export const App = () => {
	const [isUserExist, setIsUserExist] = useState<boolean>(true);

	const handleToggleForm = (): void => {
		setIsUserExist((prev) => !prev);
	};

	const handleSubmit = (data: SigninFormDataProps | SignupFormDataProps) => {
		console.log('Data:', data);
	};

	return (
		<div className='form-container'>
			{isUserExist ? (
				<Signin onSubmit={handleSubmit} onToggleForm={handleToggleForm} />
			) : (
				<Signup onSubmit={handleSubmit} onToggleForm={handleToggleForm} />
			)}
		</div>
	);
};
