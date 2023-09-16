import { useState } from 'react';
import react from '@/assets/reactBook.png';

function BookInfoLayout() {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressedBtn = () => {
    setIsPressed(!isPressed);
  };
  return (
    <>
      <div className="h-[110px]"></div>
      <article className="w-screen min-w-[1920px] bg-bookInfoBg h-[600px] flex justify-center items-center relative mb-[170px]">
        <dl className="flex justify-between w-[1050px] m-auto">
          <dt className="sr-only">도서 이미지</dt>
          <dd className="mr-[100px]">
            <img
              src={react}
              alt="도서 러닝리액트"
              className="w-[330px] h-[454px] min-w-[400px]"
            />
          </dd>

          <dt className="flex flex-col justify-center flex-grow">
            <dd className="mb-[75px]">
              <button className="border border-dibBlack text-lg flex justify-center items-center w-[150px] h-[45px] rounded-[50px] px-11 py-5">
                <p>React</p>
              </button>
            </dd>
            <dt className="sr-only">도서 제목</dt>
            <dd className="text-3xl mb-[100px]">Learning React 러닝 리액트</dd>
            <dt className="sr-only ">저자</dt>
            <dd className="text-lg mb-8 border-b border-horizontal w-[384px] h-[50px] flex items-center">
              김아무개
            </dd>
            <dt className="sr-only">출판사</dt>
            <dd className="text-lg mb-8 border-b border-horizontal w-[384px] h-[50px] flex items-center">
              한빛 출판사
            </dd>
          </dt>
        </dl>

        {/* 체크박스 이미지 구현 */}

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
          className={`bg-no-repeat absolute top-[-2px] right-[300px] w-[46px] h-[98px] 
          ${isPressed ? 'bg-bookMarkTrue' : 'bg-bookMarkFalse'}`}
        ></label>
      </article>
    </>
  );
}

export default BookInfoLayout;
