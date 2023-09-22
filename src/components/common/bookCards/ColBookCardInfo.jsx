import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ColBookCardInfo({ postTitle, bookTitle,nickName, bookID }) {
  const [liked, setLiked] = useState(false);
  const handleLikeClick = () => {
    setLiked(!liked);
    console.log(liked ? '좋아요 취소' : '좋아요 버튼이 클릭되었습니다.');
  };

  return (
    <div className="py-5 px-7 w-[280px]">
      <Link to={`/bookDescription/${bookID}`}>
        <h3 className="text-xl text-left font-semibold mb-5 truncate">{postTitle}</h3>
        <h4 className="text-base text-left mb-[10px] truncate">{bookTitle}</h4>
      </Link>

      <div className="flex items-center justify-between w-[217px]">
        <div className="w-[200px] h-[28px] flex items-center mr-10">
          <div className="w-7 h-7 rounded-full bg-slate-300 mr-[5px]"></div>
          <span className="text-sm">{nickName}</span>
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


ColBookCardInfo.propTypes = {
  postTitle: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  bookID: PropTypes.string.isRequired,
};
export default ColBookCardInfo;