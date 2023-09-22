import { Link } from 'react-router-dom';
import Nav from './Nav';

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
        <Nav />
      </div>
    </header>
  );
}

export default HeaderBar;
