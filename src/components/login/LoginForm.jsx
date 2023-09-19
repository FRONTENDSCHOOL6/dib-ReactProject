import { useState, useEffect } from 'react';
import LoginButton from './LoginButton';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import { emailReg, pwReg } from '@/utils/regular';
import { pb } from '@/api/pocketbase';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 이메일과 비밀번호를 DB와 비교해서 유효성 검사
    if (isValidEmail && isValidPassword) {
      try {
        pb.autoCancellation(false);

        const loginUser = await pb
          .collection('users')
          .authWithPassword(values.email, values.password);

        console.log('로그인 성공:', loginUser);
        alert('로그인에 성공하셨습니다.');
        setUserData(loginUser);
        navigate('/');
      } catch (error) {
        alert('로그인 실패하셨습니다.');
        setUserData(null);
      }
    } else {
      console.log('유효하지 않은 입력값이 있습니다.');
    }
  };

  useEffect(() => {
    if (userData) {
      // 로그인이 성공한 경우 홈으로 이동
      <Link to="/home" />;
    }
  }, [userData]);

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
