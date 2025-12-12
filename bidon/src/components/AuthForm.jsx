import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';
import style from './AuthForm.module.css';
import { useNavigate } from 'react-router-dom';

const InputField = ({
  register,
  name,
  label,
  type = 'text',
  placeholder,
  validation,
  className,
  errors
}) => (
  <div className={style.inputGroup}>
    <input
      {...register(name, validation)}
      type={type}
      placeholder={placeholder}
      className={`${style.inputField} ${className}`}
    />
    <label className={style.inputLabel}>{label}</label>
    {errors[name] && <span className={style.error}>{errors[name].message}</span>}
  </div>
);

export default function AuthForm() {
  const { isLogin, setIsLogin } = useAuth();

  return (
    <div className={style.authContainer}>
      <div className={style.toggleButtons}>
        <button
          className={isLogin ? style.active : undefined}
          onClick={() => setIsLogin(true)}
        >
          Вход
        </button>
        <button
          className={!isLogin ? style.active : undefined}
          onClick={() => setIsLogin(false)}
        >
          Регистрация
        </button>
      </div>

      {isLogin ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}

function LoginForm() {
  const { login } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const result = await login(data);
    if (result.success) {
      navigate('/profile');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.formContainer}>
      <div className={style.formBox}>
        <InputField
          register={register}
          name="login"
          label="телефон/еmail"
          placeholder="начните печатать..."
          validation={{ required: 'обязательное поле' }}
          errors={errors}
        />

        <InputField
          register={register}
          name="password"
          type="password"
          label="пароль"
          placeholder="*********"
          validation={{ required: 'обязательное поле' }}
          errors={errors}
        />

        <div className={style.forgotPassword}>забыли пароль?</div>
      </div>
      <button type="submit" className={style.submitButton}>Войти</button>
    </form>
  );
}

function RegisterForm() {
  const { registerUser } = useAuth();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(registerUser)} className={style.formContainer}>
      <div className={`${style.formBox} ${style.register}`}>
        <div className={style.row}>
          <InputField
            register={register}
            name="firstName"
            label="имя"
            placeholder="ваше имя"
            className={style.inputHalf}
            validation={{ required: 'обязательное поле' }}
            errors={errors}
          />
          <InputField
            register={register}
            name="lastName"
            label="фамилия"
            placeholder="ваша фамилия"
            className={style.inputHalf}
            validation={{ required: 'обязательное поле' }}
            errors={errors}
          />
        </div>

        <div className={style.row}>
          <InputField
            register={register}
            name="phone"
            type="tel"
            label="телефон"
            placeholder="+7..."
            className={style.inputHalf}
            validation={{ 
              required: 'обязательное поле',
              pattern: {
                value: /^\+7\d{10}$/,
                message: 'формат: +7XXXXXXXXXX'
              }
            }}
            errors={errors}
          />
          <InputField
            register={register}
            name="birthDate"
            type="date"
            label="дата рождения"
            className={style.inputHalf}
            validation={{ required: 'обязательное поле' }}
            errors={errors}
          />
        </div>

        <div className={style.row}>
          <InputField
            register={register}
            name="password"
            type="password"
            label="пароль"
            placeholder="придумайте пароль"
            className={style.inputHalf}
            validation={{ 
              required: 'обязательное поле',
              minLength: {
                value: 8,
                message: 'минимум 8 символов'
              }
            }}
            errors={errors}
          />
          <InputField
            register={register}
            name="confirmPassword"
            type="password"
            label="подтверждение пароля"
            placeholder="повторите пароль"
            className={style.inputHalf}
            validation={{ 
              required: 'обязательное поле',
              validate: value => 
                value === password || 'пароли не совпадают'
            }}
            errors={errors}
          />
        </div>

        <InputField
          register={register}
          name="email"
          type="email"
          label="Email"
          placeholder="example@example.com"
          className={style.inputFull}
          validation={{ 
            required: 'обязательное поле',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'некорректный email'
            }
          }}
          errors={errors}
        />
      </div>
      <button type="submit" className={style.submitButton}>зарегистрироваться</button>
    </form>
  );
}