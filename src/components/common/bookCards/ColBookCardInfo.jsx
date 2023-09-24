import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ColBookCardInfo({
  postTitle,
  bookTitle,
  nickName,
  heaetClick,
  heartRander,
  bookID,
  userId,
  profileImage,
}) {
  const [isClicked, setIsClicked] = useState(heartRander); //프롭스로부터 파생된 상태

  return (
    <div className="py-5 px-7 w-[280px]">
      <Link to={`/bookDescription/${bookID}`}>
        <h3 className="text-xl text-left font-semibold mb-5 truncate">
          {postTitle}
        </h3>
        <h4 className="text-base text-left mb-[10px] truncate">{bookTitle}</h4>
      </Link>
      <div className="flex items-center justify-between w-[217px]">
        <div className="w-[200px] h-[28px] flex items-center mr-10">
          <img
            src={`https://db-dib.pockethost.io/api/files/_pb_users_auth_/${userId}/${profileImage}`}
            alt="프로필 이미지"
            className="w-7 h-7 rounded-full mr-[5px]"
          />
          <span className="text-sm">{nickName}</span>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              setIsClicked((state) => !state);
              heaetClick?.();
            }}
          >
            <img src={isClicked ? 'heart.png' : 'emptyheart.png'} alt="" />
          </button>
          {/* <form>
            <input
              type="checkbox"
              onClick={onClick}
              aria-pressed={putHeart}
              aria-label={putHeart ? '' : '좋아요 취소'}
              id="heartButton1"
              hidden
            /> */}

          {/* <label htmlFor="heartButton1"></label>
          </form> */}
        </div>
      </div>
    </div>
  );
}

ColBookCardInfo.propTypes = {
  postTitle: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  heaetClick: PropTypes.func,
  heartRander: PropTypes.bool,
  bookID: PropTypes.string,
  userId: PropTypes.string,
  profileImage: PropTypes.string,
};
export default ColBookCardInfo;
