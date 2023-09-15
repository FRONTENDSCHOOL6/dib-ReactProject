import LoginButton from './LoginButton';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import AutoLoginButton from './AutoLoginButton';

function LoginForm() {
  return (
    <form className="flex flex-col gap-[30px] w-[600px] m-auto">
      <EmailInput />
      <PasswordInput />
      <AutoLoginButton />
      <LoginButton />
    </form>
  );
}

export default LoginForm;
