import { Link } from 'react-router-dom';
import Nav from './Nav';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function HeaderBar() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
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

  const headerBackgroundClass = isHeaderVisible ? '' : 'bg-black text-white';

  return (
    <header
      className={`w-screen h-20 bg-white bg-opacity-50 border-b fixed top-0 left-0 z-[100] ${
        isHeaderVisible ? '' : 'transform -translate-y-full'
      }`}
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <div className="w-[1200px] h-20 m-auto flex justify-between items-center relative">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, rotate: 360 }}
          whileHover={{ scale: 1.2 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
          }}
        >
          <Link to="/">
            <img src="/logoBlack.png" alt="개발자의 도서리뷰 dib" />
          </Link>
        </motion.h1>
        <Nav />
      </div>
    </header>
  );
}

export default HeaderBar;
