function HeaderBar() {
  return (
    <header className="w-screen h-[100px] bg-white bg-opacity-50 border-b border-primary text-[24px] fixed">
      <div className="w-[1600px] flex m-auto justify-end items-center">
        <h1 className="ml-5">
          <a href="#">
            <img src="/public/logo_black.png" alt="dib" />
          </a>
        </h1>
        <nav>
          <ul className="flex flex-row gap-[90px] ml-32">
            <li>
              <a href="#">도서목록</a>
            </li>
            <li>
              <a href="#">게시글</a>
            </li>
            <li>
              <a href="#">즐겨찾기</a>
            </li>
          </ul>
        </nav>
        <a href="#" className="ml-[820px]">로그인</a>
      </div>
    </header>
  )
}

export default HeaderBar