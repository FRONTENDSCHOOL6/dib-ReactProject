import { pb } from '@/api/pocketbase';
import { emailReg, pwReg } from '@/utils/regular';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailInput from './EmailInput';
import LoginButton from './LoginButton';
import PasswordInput from './PasswordInput';
import { showErrorAlert, showSuccessAlert } from '@/utils/showAlert';

function LoginForm() {
  // 입력 값 상태를 저장하기 위한 상태 변수
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  // 입력 유효성 검사를 위한 상태 변수
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const navigate = useNavigate();

  // 입력 값 변경을 처리하는 함수
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    // 이메일 입력 유효성 검사
    if (name === 'email') {
      setIsValidEmail(value === '' || emailReg(value));
    }

    // 비밀번호 입력 유효성 검사
    if (name === 'password') {
      setIsValidPassword(value === '' || pwReg(value));
    }
  };

  // 폼 제출을 처리하는 함수
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 이메일과 비밀번호 입력이 모두 유효한지 확인
    if (isValidEmail && isValidPassword) {
      try {
        pb.autoCancellation(false);

        // 이메일과 비밀번호를 사용하여 사용자를 인증
        await pb
          .collection('users')
          .authWithPassword(values.email, values.password);

        showSuccessAlert('최고의 프론트엔드 개발자님 입장!', '😎');
        navigate('/');
      } catch (error) {
        showErrorAlert('로그인 실패하셨어요', '😯');
      }
    } else {
      showErrorAlert('다시 한번 제대로 입력해주세요.', '🤔');
    }
  };

  return (
    <form
      className="flex flex-col gap-[30px] w-[500px] m-auto"
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
