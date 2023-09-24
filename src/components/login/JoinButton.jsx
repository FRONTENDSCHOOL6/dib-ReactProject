import { Link } from 'react-router-dom';

function JoinButton() {
  return (
    <Link to="/join" className="flex flex-col w-[500px] m-auto">
      <div className="text-right pr-5 mt-2 text-lg w-[500px]">회원가입</div>
    </Link>
  );
}

export default JoinButton;
