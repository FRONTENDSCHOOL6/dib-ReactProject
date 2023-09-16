import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="flex flex-col gap-[30px] w-[600px] m-auto">
      <Link to="/join" className="text-right mr-5 mt-2 text-lg">회원가입</Link>
    </div>
  );
}

export default SignUp;
