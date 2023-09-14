import { Link } from "react-router-dom"

function HeaderBar() {
  return (
    <header className="w-screen h-20 fixed z-50 bg-white opacity-50">
      <div className="w-[1200px] h-20  bg-red-300 m-auto flex justify-between items-center">
        <h1>
          <Link to="/">
            <img src="/logoBlack.png" alt="dib" />
          </Link>
        </h1>
        <nav>
          <ul className="flex gap-24">
            <li>
              <Link to="/bookList">도서목록</Link>
            </li>
            <li>
              <Link to="#">게시글</Link>
            </li>
            <li>
              <Link to="/favoritePage">즐겨찾기</Link>
            </li>
          </ul>
        </nav>
        <Link to="/login" className="">로그인</Link>
      </div>
    </header>
  );
}

export default HeaderBar;
