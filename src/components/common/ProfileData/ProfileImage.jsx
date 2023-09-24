import { useAuth } from '@/contexts/AuthContext';
import PropTypes from 'prop-types';

function ProfileImage({ width = 'w-[25px]', height = 'h-[25px]' }) {
  const { user } = useAuth();

  const imageUrl = user
    ? `https://db-dib.pockethost.io/api/files/_pb_users_auth_/${user.id}/${user.profileImage}`
    : '/defaultProfile.png';

  return (
    <img
      src={imageUrl}
      alt="프로필 이미지"
      className={`${width} ${height} rounded-full`}
    />
  );
}

export default ProfileImage;

ProfileImage.propTypes = {
  profileImageUrl: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
