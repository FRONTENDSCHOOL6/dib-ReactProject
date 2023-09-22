import hori from '@/assets/hori.png';
import PropTypes from 'prop-types';

function Comments({ text }) {
  return (
    <div className="flex m-auto w-[1200px] justify-between px-2 my-[30px]">
      <img
        src={hori}
        alt="유저 아이콘"
        className="w-[50px] h-[50px] rounded-full mr-"
      />
      <div className="flex flex-col border justify-center px-[30px] border-commentBox rounded-[25px] w-[1100px] min-h-[110px]">
        <div className="mb-4">
          <span className="text-lg font-semibold mr-3">HORI</span>
          <span className="text-dateColor text-sm">2023.09.13</span>
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Comments;

Comments.propTypes = {
  text: PropTypes.string,
};
