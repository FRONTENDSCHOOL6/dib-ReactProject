import PropTypes from 'prop-types';
import { useState } from 'react';

function ColBookCardInfo({ postTitle, bookTitle }) {
  const [liked, setLiked] = useState(false);
  const handleLikeClick = () => {
    setLiked(!liked);
    console.log(liked ? '좋아요 취소' : '좋아요 버튼이 클릭되었습니다.');
  };

  return (
    <div className="py-5 px-7 w-[280px]">
      <h3 className="text-xl text-left font-semibold mb-5">{postTitle}</h3>
      <h4 className="text-base text-left mb-[10px]">{bookTitle}</h4>

      <div className="flex items-center justify-between w-[217px]">
        <div className="w-[200px] h-[28px] flex items-center mr-10">
          <div className="w-7 h-7 rounded-full bg-slate-300 mr-[5px]"></div>
          <span className="text-sm">닉네임없음</span>
        </div>
        <div>
          <form>
            <input
              type="checkbox"
              onClick={handleLikeClick}
              aria-pressed={liked}
              aria-label={liked ? '' : '좋아요 취소'}
              id="heartButton1"
              hidden
            />
            <label htmlFor="heartButton1">
              {liked ? (
                <img src="/heart.png" alt="" />
              ) : (
                <img src="/emptyheart.png" alt="" />
              )}
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ColBookCardInfo;

ColBookCardInfo.propTypes = {
  postTitle: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
};
