import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
function HeaderBar() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHeaderVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < 100
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`w-screen h-20 bg-white bg-opacity-50 border-b fixed top-0 left-0 z-[100] ${
        isHeaderVisible ? '' : 'transform -translate-y-full'
      }`}
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <div className="w-[1200px] h-20 m-auto flex justify-between items-center relative">
        <motion.h1
            initial={{ opacity: 0,y:-600 }}
            animate={{ opacity: 4,y:0 }}>
          <Link to="/">
            <img src="/logoBlack.png" alt="개발자의 도서리뷰 dib" />
          </Link>
        </motion.h1>
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
