import { Link } from 'react-router-dom';

function FooterBar() {
  return (
    <footer className="bg-dibFooter w-screen h-[400px]">
      <section className="">
        <div className="flex flex-col justify-center w-[1200px] min-w-[1200px]">
          <div className="flex items-center self-start justify-center">
            <span className="text-white text-[18px] not-italic font-normal leading-[normal] ml-40 ">
              제작자 | 책사조
            </span>
            <img
              src="/logo-white.png"
              alt="개발자의 도서리뷰 dib"
              className="w-20 h-20 "
            />
          </div>

          <div className="flex justify-center items-center">
            <Link
              to="https://github.com/jjang-aaa"
              title="양정아 MBTI 이미지"
              className="text-lg not-italic font-normal leading-[24px] text-center block"
            >
              <div className="text-white flex flex-col items-center justify-center w-[220px] h-[260px]">
                <img
                  src="/jjang-aaa.png"
                  alt="양정아 개발자의 블로그 방문하기"
                  className="w-[220px] h-[220px] "
                />
                <div className="flex gap-2">
                  <span>양정아</span>
                  <img
                    src="/github.png"
                    alt="양정아 깃허브 주소"
                    className="w-[24px] h-[24px]"
                  />
                </div>
              </div>
            </Link>
            <Link
              to="https://github.com/bomlang"
              title="호 깃헙으로 바로가기"
              className="text-lg not-italic font-normal leading-[24px] text-center block"
            >
              <div className="text-white flex flex-col items-center justify-center w-[220px] h-[260px]">
                <img
                  src="/ho.png"
                  alt="이호"
                  className="w-[220px] h-[220px] "
                />
                <div className="flex gap-2">
                  <span>이호</span>
                  <img
                    src="/github.png"
                    alt="이호 깃허브 주소"
                    className="w-[24px] h-[24px]"
                  />
                </div>
              </div>
            </Link>
            <Link
              to="https://github.com/yenaf"
              title="예나 깃헙으로 바로가기"
              className="text-lg not-italic font-normal leading-[24px] text-center block"
            >
              <div className="text-white flex flex-col items-center justify-center w-[220px] h-[260px]">
                <img
                  src="/yenaf.png"
                  alt="강예나"
                  className="w-[220px] h-[220px] "
                />
                <div className="flex gap-2">
                  <span>강예나</span>
                  <img
                    src="/github.png"
                    alt="강예나 깃허브 주소"
                    className="w-[24px] h-[24px]"
                  />
                </div>
              </div>
            </Link>
            <Link
              to="https://github.com/wlstmd1004v"
              title="진승 깃헙으로 바로가기"
              className="text-lg not-italic font-normal leading-[24px] text-center block"
            >
              <div className="text-white flex flex-col items-center justify-center w-[220px] h-[260px]">
                <img
                  src="/jin.png"
                  alt="전진승"
                  className="w-[220px] h-[220px]"
                />
                <div className="flex gap-2">
                  <span>전진승</span>
                  <img
                    src="/github.png"
                    alt="전진승 깃허브 주소"
                    className="w-[24px] h-[24px]"
                  />
                </div>
              </div>
            </Link>
          </div>
          <Link
            to="https://github.com/FRONTENDSCHOOL6/dib-ReactProject"
            className="flex text-3xl not-italic font-normal leading-[normal] relative left-0 self-end"
          >
            <div className="text-white flex gap-2">
              <span>멋쟁이 사자처럼 FE 6기 4조 깃허브</span>
              <img
                src="/github.png"
                alt="4조 공통 깃허브 주소"
                className="w-[38px] h-[37px]"
              />
            </div>
          </Link>
        </div>
      </section>
    </footer>
  );
}

export default FooterBar;
