import hori from '@/assets/hori.png';
import PropTypes from 'prop-types';

function Comments({ text }) {
  return (
    <div className="flex m-auto w-[1525px] h-[200px] justify-between px-[100px]">
      <img
        src={hori}
        alt="유저 아이콘"
        className="w-[90px] h-[90px] rounded-full"
      />
      <div className="flex flex-col border justify-center border-commentBox rounded-[25px] px-[40px] py-[20px] w-[1200px] h-[150px]">
        <div className="mb-4">
          <span className="text-2xl font-semibold mr-3">HORI</span>
          <span className="text-dateColor">2023.09.13</span>
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
