import { useAuth } from '@/contexts/AuthContext';
import { showSuccessAlert } from '@/utils/showAlert';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
  const { isAuth, logOut } = useAuth();
  const navigate = useNavigate();

  const handlelogOut = async () => {
    await logOut();
    showSuccessAlert('다음에 또 봐요!','🤗');
    navigate('/');
  };

  return (
    <nav>
      <ul className="flex gap-24 absolute left-52">
        <li>
          <motion.div whileHover={{ scale: 1.2 }}>
            <motion.span fontWeight={900}>
              <Link to="/bookList">도서목록</Link>
            </motion.span>
          </motion.div>
        </li>
        <li>
          <motion.div whileHover={{ scale: 1.2 }}>
            <motion.span fontWeight={900}>
              <Link to="/postListPage">게시글</Link>
            </motion.span>
          </motion.div>
        </li>
        <li>
          <motion.div whileHover={{ scale: 1.2 }}>
            <motion.span fontWeight={900}>
              <Link to="/favoritePage">즐겨찾기</Link>
            </motion.span>
          </motion.div>
        </li>
      </ul>

      <ul>
        {!isAuth && (
          <li>
            <Link to="/logIn"> 로그인 </Link>
          </li>
        )}
        {isAuth && (
          <li>
            <button type="button" onClick={handlelogOut}>
              로그아웃
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
