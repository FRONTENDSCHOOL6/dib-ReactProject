import { useAuth } from '@/contexts/AuthContext';
import { showSuccessAlert } from '@/utils/showAlert';
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
          <Link to="/bookList" className='hover:font-bold nav-link'>도서목록</Link>
        </li>
        <li>
          <Link to="/postListPage" className='hover:font-bold nav-link'>게시글</Link>
        </li>
        <li>
          <Link to="/favoritePage" className='hover:font-bold nav-link'>즐겨찾기</Link>
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