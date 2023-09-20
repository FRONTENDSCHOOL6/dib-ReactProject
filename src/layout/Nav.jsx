import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const { isAuth, logOut } = useAuth();
  const navigate = useNavigate();

  const handlelogOut = async () => {
    await logOut();
    navigate('/');
  };

  return (
    <nav>
      <ul className="flex gap-24 absolute left-52">
        <li>
          <Link to="/bookList">도서목록</Link>
        </li>
        <li>
          <Link to="/postListPage">게시글</Link>
        </li>
        <li>
          <Link to="/favoritePage">즐겨찾기</Link>
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
