import { Link } from 'react-router-dom';

function HeaderBar() {
  return (
    <header
      className="w-screen h-20 bg-white bg-opacity-50 border-b fixed top-0 left-0 z-[100] "
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <div className="w-[1200px] h-20 m-auto flex justify-between items-center relative">
        <h1>
          <Link to="/">
            <img src="/logoBlack.png" alt="개발자의 도서리뷰 dib" />
          </Link>
        </h1>
        <nav className="absolute left-52">
          <ul className="flex gap-24">
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
        </nav>
        <Link to="/login" className="">
          로그인
        </Link>
      </div>
    </header>
  );
}

export default HeaderBar;
