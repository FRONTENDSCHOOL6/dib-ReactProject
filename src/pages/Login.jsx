import LoginForm from '@/components/login/LoginForm';
import LoginTitle from '@/components/login/LoginTitle';
import SignUp from '@/components/login/SignUp';

function Login() {
  return (
    <div className="flex flex-col mb-[100px]">
      <LoginTitle />
      <LoginForm />
      <SignUp />
    </div>
  );
}

export default Login;
