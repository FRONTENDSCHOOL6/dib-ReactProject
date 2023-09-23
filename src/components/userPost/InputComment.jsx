import PropTypes from 'prop-types';
import ProfileImage from '../common/ProfileData/ProfileImage';

function InputComment({ onClick, onChange }) {
  return (
    <div className="flex m-auto w-[1200px] h-[130px] justify-between px-2">
      <ProfileImage width="w-[50px]" height="h-[50px]" />
      <div>
        <form method="POST" autoComplete="off" className="flex flex-col">
          <div className="w-[1100px] h-[55px] border flex justify-center items-center border-commentBox rounded-[25px] mb-[13px]">
            <label htmlFor="comment" className="sr-only">
              댓글 입력공간
            </label>
            <input
              name="comments"
              id="comment"
              placeholder="글자 수 50자 제한"
              onChange={onChange}
              className="w-[1050px] h-[32px] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            onClick={onClick}
            className="w-[130px] h-[40px] bg-primary text-white self-end rounded-[5px]"
          >
            댓글 등록
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputComment;

InputComment.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
