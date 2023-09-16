import { Link } from 'react-router-dom';

function FooterBar() {
  return (
    <footer className="bg-dibFooter w-[1920px] h-[400px] mt-[100px]">
      <section className="flex-shrink">
        <h2 className="flex items-center">
          <span className="text-[24px] not-italic font-normal leading-[normal] ml-40 ">
            제작자 | 책사조
          </span>
          <img
            src="/logoBlack.png"
            alt="whibte-logo"
            className="w-20 h-20 "
            aria-hidden
          />
        </h2>
        <div className="flex justify-center items-center">
          <Link
            to="https://github.com/jjang-aaa"
            title="정아 깃헙으로 바로가기"
            className="text-lg not-italic font-normal leading-[24px] text-center block"
            aria-hidden
          >
            <div className="flex flex-col items-center justify-center pr-20">
              <img
                src="/jjang-aaa.png"
                alt="양정아"
                className="w-[228px] h-[220px]"
                aria-hidden
              />
              <div className="flex gap-2">
                <span className='text-[20px]'>양정아</span>
                <img
                  src="/github.svg"
                  alt="양정아 깃허브 주소"
                  className="w-[24px] h-[24px]"
                  aria-hidden
                />
              </div>
            </div>
          </Link>
          <Link
            to="https://github.com/bomlang"
            title="호 깃헙으로 바로가기"
            className="text-lg not-italic font-normal leading-[24px] text-center block"
            aria-hidden
          >
            <div className="flex flex-col items-center justify-center pr-20">
              <img
                src="/ho.png"
                alt="이호"
                className="w-[228px] h-[220px] "
                aria-hidden
              />
              <div className="flex gap-2">
                <span className='text-[20px]'>이호</span>
                <img
                  src="/github.svg"
                  alt="이호 깃허브 주소"
                  className="w-[24px] h-[24px]"
                  aria-hidden
                />
              </div>
            </div>
          </Link>
          <Link
            to="https://github.com/yenaf"
            title="예나 깃헙으로 바로가기"
            className="text-lg not-italic font-normal leading-[24px] text-center block"
            aria-hidden
          >
            <div className="flex flex-col items-center justify-center pr-20">
              <img
                src="/yenaf.png"
                alt="강예나"
                className="w-[228px] h-[220px]"
                aria-hidden
              />
              <div className="flex gap-2">
                <span className='text-[20px]'>강예나</span>
                <img
                  src="/github.svg"
                  alt="강예나 깃허브 주소"
                  className="w-[24px] h-[24px]"
                  aria-hidden
                />
              </div>
            </div>
          </Link>
          <Link
            to="https://github.com/wlstmd1004v"
            title="진승 깃헙으로 바로가기"
            className="text-lg not-italic font-normal leading-[24px] text-center block"
            aria-hidden
          >
            <div className="flex flex-col items-center justify-center pr-20">
              <img
                src="/jin.png"
                alt="전진승"
                className="w-[228px] h-[220px]"
                aria-hidden
              />
              <div className="flex gap-2">
                <span className='text-[20px]'>전진승</span>
                <img
                  src="/github.svg"
                  alt="전진승 깃허브 주소"
                  className="w-[24px] h-[24px]"
                  aria-hidden
                />
              </div>
            </div>
          </Link>
        </div>
        <Link
          to="https://github.com/FRONTENDSCHOOL6/dib-ReactProject"
          className="flex text-2xl not-italic font-normal leading-[normal] relative left-0 justify-end"
        >
          <div className="mr-72 flex gap-2">
            <span>멋쟁이 사자처럼 FE 6기 4조 깃허브</span>
            <img
              src="/github.svg"
              alt="4조 공통 깃허브 주소"
              className="w-[38px] h-[37px]"
              aria-hidden
            />
          </div>
        </Link>
      </section>
    </footer>
  );
}

export default FooterBar;
