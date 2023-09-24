import { useAuth } from '@/contexts/AuthContext';
import PropTypes from 'prop-types';

function ProfileNickname({ textSize = 'text-base' }) {
  const { user } = useAuth();
  return <span className={`${textSize}`}>{user.nickname}</span>;
}

export default ProfileNickname;

ProfileNickname.propTypes = {
  textSize: PropTypes.string,
};
