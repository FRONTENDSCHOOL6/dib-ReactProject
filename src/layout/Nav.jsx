import { useAuth } from '@/contexts/AuthContext';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Nav() {
  const { isAuth, logOut } = useAuth();
  const navigate = useNavigate();

  const handlelogOut = async () => {
    await logOut();
    toast.success('도움이 되셨길 바라며 안녕히가세요.', {
      position: 'top-center',
      duration: 3000,
      icon: '😌',
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
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
          <button type="button" onClick={handlelogOut}>
            로그아웃
          </button>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
