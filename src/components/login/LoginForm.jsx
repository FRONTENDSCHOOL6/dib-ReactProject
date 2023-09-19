import LoginButton from './LoginButton';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import { useState } from 'react';
import { emailReg, pwReg } from '@/utils/regular';

function LoginForm() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    // 이메일 유효성 검사
    if (name === 'email') {
      setIsValidEmail(emailReg(value));
    }

    // 비밀번호 유효성 검사
    if (name === 'password') {
      setIsValidPassword(pwReg(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 이메일과 비밀번호가 유효한지 확인
    if (isValidEmail && isValidPassword) {
      // 여기에서 로그인 또는 다음 단계로 진행
      console.log('로그인 시도:', values);
    } else {
      console.log('유효하지 않은 입력값이 있습니다.');
    }
  };

  return (
    <form
      className="flex flex-col gap-[30px] w-[600px] m-auto"
      onSubmit={handleSubmit}
    >
      <EmailInput
        defaultValue={values.email}
        onChange={handleInputChange}
        isValidEmail={isValidEmail}
      />
      <PasswordInput
        defaultValue={values.password}
        onChange={handleInputChange}
        isValidPassword={isValidPassword}
      />
      <LoginButton />
    </form>
  );
}

export default LoginForm;
