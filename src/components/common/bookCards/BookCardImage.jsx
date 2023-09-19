import { pb } from '@/api/pocketbase';
import { useEffect, useState } from 'react';

function BookCardImage() {
  const [data, setData] = useState([]);
  const [isPressed, setIsPressed] = useState(false);

  const handlePressedBtn = () => {
    setIsPressed(!isPressed);
  };

  useEffect(() => {
    async function fetchImageData() {
      try {
        const imageData = await pb.collection('posts').getFullList();
        setData(imageData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchImageData();
  }, []);

  return (
    <div className="relative">
      {data.length > 0 && (
        <div key={data[0].id} className="bg-[#DCDCDC] w-[280px] h-[284px] flex justify-center items-center">
          <img src={data[0].book_image_link} alt="" className="w-[161px] h-[220px]" />
          <form className="absolute top-[2px] right-[-302px]">
            <input
              className="absolute top-[-5px] right-[300px] w-[46px] h-[98px]"
              type="checkbox"
              onClick={handlePressedBtn}
              aria-pressed={isPressed}
              aria-label={isPressed ? '선택됨' : '선택 안 됨'}
              id={`bookMark-${data[0].id}`}
              name={`bookMark-${data[0].id}`}
              hidden
            />
            <label
              htmlFor={`bookMark-${data[0].id}`}
              className={`bg-no-repeat absolute top-[-3px] right-[300px] w-[46px] h-[98px]
        ${isPressed ? 'bg-checkedBookMark' : 'bg-bookMark'}`}
            ></label>
          </form>
        </div>
      )}
    </div>
  );
}

export default BookCardImage;
