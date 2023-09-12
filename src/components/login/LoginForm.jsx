import LoginButton from './LoginButton';
import LoginEmail from './LoginEmail';
import LoginPassword from './LoginPassword';

function LoginForm() {
  return (
    <form className="flex flex-col gap-[30px] w-[600px] m-auto">
      <LoginEmail />
      <LoginPassword />
      <LoginButton />
    </form>
  );
}

export default LoginForm;
