import PropTypes from 'prop-types';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

function RowBookCardInfo({
  postTitle,
  bookTitle,
  nickName,
  heartRander,
  heaetClick,
  userId,
  profileImage,
}) {
  const { user } = useAuth();
  const [isClicked, setIsClicked] = useState(heartRander);

  return (
    <div className="bg-white py-5 px-7 w-[280px] h-[284px] flex flex-col justify-center border-l-8 border-l-[#DCDCDC] border-dashed">
      <h3 className="text-xl text-left font-semibold mb-[40px] truncate">
        {postTitle}
      </h3>
      <h4 className="text-base text-left mb-[10px] truncate">{bookTitle}</h4>

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
              heaetClick?.();
              if (user) {
                setIsClicked((state) => !state);
              }
            }}
          >
            <img src={isClicked ? 'heart.png' : 'emptyheart.png'} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RowBookCardInfo;

RowBookCardInfo.propTypes = {
  postTitle: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  heaetClick: PropTypes.func,
  heartRander: PropTypes.bool,
  userId: PropTypes.string,
  profileImage: PropTypes.string,
};
