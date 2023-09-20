import PropTypes from 'prop-types';
import { useState } from 'react';
import { motion } from 'framer-motion';

function BookCardImage({ imgSrc, imgAlt }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCheckboxClick = () => {
    setIsPressed((prevIsPressed) => !prevIsPressed);
  };

  return (
    <div className="relative">
      <div className="bg-[#DCDCDC] w-[280px] h-[284px] flex justify-center items-center">
        <motion.img
          src={imgSrc}
          alt={imgAlt}
          draggable="false"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: isHovered ? 1.2 : 1, cursor: 'zoom-in' }}
          whileTap={{ scale: isHovered ? 0.9 : 1 }}
          className="w-[161px] h-[220px]"
        />
      </div>
      <form className="absolute top-[2px] right-[-302px]">
        <input
          type="checkbox"
          onClick={handleCheckboxClick}
          aria-pressed={isPressed}
          aria-label={isPressed ? '선택됨' : '선택 안 됨'}
          id={`bookMark-${imgSrc}`}
          name={`bookMark-${imgSrc}`}
          hidden
        />
        <label
            htmlFor={`bookMark-${imgSrc}`}
            className={`bg-no-repeat absolute top-[-3px] right-[300px]
              w-[46px]
              h-[98px]
              ${isPressed ? 'bg-checkedBookMark' : 'bg-bookMark'}`}
        ></label>
      </form>
    </div>
   );
}

BookCardImage.propTypes = {
   imgSrc: PropTypes.string.isRequired,
   imgAlt: PropTypes.string.isRequired,
};

export default BookCardImage;
