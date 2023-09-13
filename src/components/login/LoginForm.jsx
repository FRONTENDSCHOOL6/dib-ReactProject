import LoginButton from './LoginButton';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

function LoginForm() {
  return (
    <form className="flex flex-col gap-[30px] w-[600px] m-auto">
      <EmailInput />
      <PasswordInput />
      <LoginButton />
    </form>
  );
}

export default LoginForm;
