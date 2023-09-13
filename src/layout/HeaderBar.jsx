import { Link } from "react-router-dom"

function HeaderBar() {
  return (
    <header className="w-screen h-[100px] bg-white bg-opacity-50 border-b border-primary text-[24px] fixed z-[100]">
      <div className="w-[1600px] flex m-auto justify-end items-center">
        <h1 className="ml-5">
          <Link to="/index.html">
            <img src="/logoBlack.png" alt="dib" />
          </Link>
        </h1>
        <nav>
          <ul className="flex flex-row gap-[90px] ml-32">
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
        <Link to="/login" className="ml-[820px]">로그인</Link>
      </div>
    </header>
  );
}

export default HeaderBar;
