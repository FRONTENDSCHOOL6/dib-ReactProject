import bookCover from '@/assets/cleanCode.png';
import { useState } from 'react';

function BookCardImage() {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressedBtn = () => {
    setIsPressed(!isPressed);
  };

  return (
    <div className="relative">
      <div className="bg-[#DCDCDC] w-[280px] h-[284px] flex justify-center items-center">
        <img src={bookCover} alt="" className="w-[161px] h-[220px]" />
      </div>
      <form className="absolute top-[2px] right-[-302px]">
        <input
          className="absolute top-[-5px] right-[300px] w-[46px] h-[98px] hidden"
          type="checkbox"
          onClick={handlePressedBtn}
          aria-pressed={isPressed}
          aria-label={isPressed ? '선택됨' : '선택 안 됨'}
          id="bookMark"
          name="bookMark"
        />
        <label
          htmlFor="bookMark"
          className={`bg-no-repeat absolute top-[-3px] right-[300px] w-[46px] h-[98px] 
     ${isPressed ? 'bg-checkedBookMark' : 'bg-bookMark'}`}
        ></label>
      </form>
    </div>
  );
}

export default BookCardImage;
