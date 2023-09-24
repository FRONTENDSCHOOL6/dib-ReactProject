import PropTypes from 'prop-types';

function Comments({ text, date, nickName, profileImage, userId }) {
  return (
    <div className="flex m-auto w-[1200px] justify-between px-2 my-[30px]">
      <img
        src={`https://db-dib.pockethost.io/api/files/_pb_users_auth_/${userId}/${profileImage}`}
        alt="프로필 이미지"
        className="w-[50px] h-[50px] rounded-full"
      />
      <div className="flex flex-col border justify-center px-[30px] border-commentBox rounded-[25px] w-[1100px] min-h-[110px]">
        <div className="mb-4">
          <span className="text-lg font-semibold mr-3">{nickName}</span>
          <span className="text-dateColor text-sm">{date}</span>
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
  date: PropTypes.string,
  nickName: PropTypes.array,
  profileImage: PropTypes.string,
  userId: PropTypes.string,
};
