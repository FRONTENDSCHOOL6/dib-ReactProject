import { useAuth } from '@/contexts/AuthContext';
import PropTypes from 'prop-types';

function Nickname({ textSize = 'text-base' }) {
  const { user } = useAuth();
  return <span className={`${textSize}`}>{user.nickname}</span>;
}

export default Nickname;

Nickname.propTypes = {
  textSize: PropTypes.string,
};
