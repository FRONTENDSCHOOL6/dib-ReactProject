import { Link } from 'react-router-dom';

function JoinButton() {
  return (
    <Link to="/join" className="flex flex-col w-[100px] relative left-[220px]">
      <div className="text-center mt-2 text-lg w-[100px]">회원가입</div>
    </Link>
  );
}

export default JoinButton;
