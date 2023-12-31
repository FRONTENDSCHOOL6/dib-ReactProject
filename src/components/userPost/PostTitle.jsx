import PropTypes from 'prop-types';

function PostTitle({ postTitle, userName, cearteDate, userImg, userId }) {
  return (
    <div className="flex items-start flex-col m-auto mb-[60px] w-[1200px] border-b border-horizontal">
      <h3 className="mb-10 text-[28px]">{postTitle}</h3>
      <div className="flex items-center justify-between mb-7 w-[1200px]">
        <div className="flex justify-center items-center">
          <img
            src={`https://db-dib.pockethost.io/api/files/_pb_users_auth_/${userId}/${userImg}`}
            alt="프로필 이미지"
            className="rounded-[50%] w-[30px] h-[30px] mr-[8px]"
          />
          <span className="text-base mr-[25px]">{userName}</span>
          <span className="text-horizontal">{cearteDate}</span>
        </div>
        <div className="flex items-center">
          <button>수정</button>
          <div className="w-[1px] h-[13px] bg-slate-400 mx-3"></div>
          <button>삭제</button>
        </div>
      </div>
    </div>
  );
}

export default PostTitle;

PostTitle.propTypes = {
  postTitle: PropTypes.string,
  userName: PropTypes.string,
  cearteDate: PropTypes.string,
  userImg: PropTypes.string,
  userId: PropTypes.string,
};
