import { useRef, useState, type FormEvent } from 'react';
import { Button, Input } from '../../components';
import styles from './singup.module.scss';

export interface SignupFormDataProps {
	name: string;
	nikname: string;
	email: string;
	gender: 'male' | 'female';
	password: string;
	confirmPassword: string;
}

interface SignupProps {
	onSubmit: (data: SignupFormDataProps) => void;
	onToggleForm: () => void;
}

const genderOptions = [
	{ value: 'male', label: 'Мужской' },
	{ value: 'female', label: 'Женский' },
];

export const Signup = ({ onSubmit, onToggleForm }: SignupProps) => {
	const formRef = useRef<HTMLFormElement>(null);
	const [formData, setFormData] = useState<SignupFormDataProps>({
		name: '',
		nikname: '',
		email: '',
		gender: 'male',
		password: '',
		confirmPassword: '',
	});

	const handleInputChange = (name: keyof SignupFormDataProps) => {
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
			name: '',
			nikname: '',
			email: '',
			gender: 'male',
			password: '',
			confirmPassword: '',
		});
	};

	return (
		<>
			<h1>Регистрация</h1>
			<form onSubmit={handleSubmit} onReset={handleReset} ref={formRef}>
				<Input
					label='Имя'
					name='name'
					placeholder='Введите Имя'
					value={formData.name}
					onChange={handleInputChange('name')}
				/>
				<Input
					label='Ник'
					name='nikname'
					placeholder='Введите Ник'
					icon={<span>@</span>}
					value={formData.nikname}
					onChange={handleInputChange('nikname')}
				/>
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
					label='Пол'
					name='gender'
					inputType='radio'
					value={formData.gender}
					options={genderOptions}
					onChange={handleInputChange('gender')}
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
				<Input
					inputType='password'
					required
					name='confirmPassword'
					placeholder='Подтвердите пароль'
					value={formData.confirmPassword}
					onChange={handleInputChange('confirmPassword')}
				/>

				<div className={styles['buttons-container']}>
					<Button type='submit' buttonType='primary'>
						Зарегистрироваться
					</Button>

					<Button onClick={onToggleForm} buttonType='secondary'>
						Войти
					</Button>
				</div>
			</form>
		</>
	);
};
