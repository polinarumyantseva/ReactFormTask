import { useRef, useState, type FormEvent } from 'react';
import { Button, Input } from '../../components';
import styles from './signin.module.scss';

export interface SigninFormDataProps {
	email: string;
	password: string;
}
interface SigninProps {
	onSubmit: (data: SigninFormDataProps) => void;
	onToggleForm: () => void;
}

export const Signin = ({ onSubmit, onToggleForm }: SigninProps) => {
	const formRef = useRef<HTMLFormElement>(null);
	const [formData, setFormData] = useState<SigninFormDataProps>({
		email: '',
		password: '',
	});

	const handleInputChange = (name: keyof SigninFormDataProps) => {
		return (value: string) => {
			setFormData((prevState) => {
				return {
					...prevState,
					[name]: value,
				};
			});
		};
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmit(formData);
		formRef.current?.reset();
	};

	const handleReset = () => {
		setFormData({
			email: '',
			password: '',
		});
	};

	return (
		<>
			<h1>Авторизация</h1>
			<form onSubmit={handleSubmit} onReset={handleReset} ref={formRef}>
				<Input
					label='Email'
					description='Пример: test@test.ru'
					inputType='email'
					name='email'
					placeholder='Введите email'
					required
					value={formData.email}
					onChange={handleInputChange('email')}
				/>
				<Input
					label='Пароль'
					inputType='password'
					required
					name='password'
					placeholder='Введите пароль'
					value={formData.password}
					onChange={handleInputChange('password')}
				/>
				<div className={styles['buttons-container']}>
					<Button type='submit' buttonType='primary'>
						Войти
					</Button>

					<Button onClick={onToggleForm} buttonType='secondary'>
						Зарегистрироваться
					</Button>
				</div>
			</form>
		</>
	);
};
