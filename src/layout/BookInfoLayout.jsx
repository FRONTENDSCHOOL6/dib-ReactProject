import reactBook from '@/assets/reactBook.png';
import { useState } from 'react';

function BookInfoLayout() {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressedBtn = () => {
    setIsPressed(!isPressed);
  };
  return (
    <>
      <article className="mt-[92px] w-screen bg-bookInfoBg h-[720px] px-40 py-20 flex justify-center relative mb-[170px]">
        <dl className="flex items-center justify-center w-[1480px] h-[565px]">
          <div className="mr-52">
            <dt>
              <img src={reactBook} alt="도서이미지" />
            </dt>
          </div>

          <div className="w-[845px] h-[400px] mb-12">
            <button className="border-2 border-dibCategory text-3xl flex justify-center items-center w-[284px] h-[71px] rounded-[50px] px-11 py-5">
              <p>React</p>
            </button>
            <dt className="sr-only">도서 제목</dt>
            <dd className="text-5xl my-24">Learning React 러닝 리액트</dd>
            <dt className="sr-only ">저자</dt>
            <dd className="text-2xl mb-8">김아무개</dd>
            <dt className="sr-only">출판사</dt>
            <dd className="text-xl">한빛 출판사</dd>
          </div>
        </dl>
        <input
          className="absolute top-[-5px] right-[300px] w-[46px] h-[98px] bg-bookMarkTrue bg-no-repeat bg-bookInfoBg"
          type="checkboxs"
          onClick={handlePressedBtn}
          aria-pressed={isPressed}
          aria-label={isPressed ? '선택됨' : '선택 안 됨'}
        />
      </article>
    </>
  );
}

export default BookInfoLayout;
