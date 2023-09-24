import JoinButton from '@/components/login/JoinButton';
import LoginForm from '@/components/login/LoginForm';
import LoginTitle from '@/components/login/LoginTitle';

function Login() {
  return (
    <div className="flex flex-col items-center justify-center">
      <LoginTitle />
      <LoginForm />
      <JoinButton />
    </div>
  );
}

export default Login;
