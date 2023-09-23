import PropTypes from 'prop-types';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function BookCardImage({
  imgSrc,
  imgAlt,
  bookID,
  bookmarkClick,
  bookmarkRander,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClickBookmark, setIsClickBookMark] = useState(bookmarkRander);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative">
      <Link to={`/bookDescription/${bookID}`}>
        <div className="bg-[#DCDCDC] w-[280px] h-[284px] flex justify-center items-center">
          <motion.img
            src={imgSrc}
            alt={imgAlt}
            draggable="false"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: isHovered ? 1.1 : 1, cursor: 'zoom-in' }}
            whileTap={{ scale: isHovered ? 0.9 : 1 }}
            className="w-[161px] h-[220px]"
          />
        </div>
      </Link>
      <div></div>
      {/* <button
        type="button"
        onClick={() => {
          setIsClickBookMark((state) => !state);
          bookmarkClick?.();
        }}
      >
        <img
          src={isClickBookmark ? 'checkedBookMark.png' : 'bookMark.png'}
          alt=""
        />
      </button> */}
      <form className="absolute top-[2px] right-[-302px]">
        <input
          type="checkbox"
          onClick={() => {
            setIsClickBookMark((state) => !state);
            bookmarkClick?.();
          }}
          aria-pressed={isClickBookmark}
          aria-label={isClickBookmark ? '선택됨' : '선택 안 됨'}
          id={`bookMark-${imgSrc}`}
          name={`bookMark-${imgSrc}`}
          hidden
        />
        <label
          htmlFor={`bookMark-${imgSrc}`}
          className={`bg-no-repeat absolute top-[-3px] right-[315px] cursor-pointer
              w-[28px]
              h-[48px]
              ${isClickBookmark ? 'bg-checkedBookMark' : 'bg-bookMark'}`}
        ></label>
      </form>
    </div>
  );
}

BookCardImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  bookID: PropTypes.string,
  bookmarkClick: PropTypes.func,
  bookmarkRander: PropTypes.bool,
};

export default BookCardImage;
