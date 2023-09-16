import JoinButton from '@/components/login/JoinButton';
import LoginForm from '@/components/login/LoginForm';
import LoginTitle from '@/components/login/LoginTitle';

function Login() {
  return (
    <div className="flex flex-col mb-[100px]">
      <LoginTitle />
      <LoginForm />
      <JoinButton />
    </div>
  );
}

export default Login;
