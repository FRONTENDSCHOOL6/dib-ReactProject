import BookInfoLayout from '@/layout/BookInfoLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import hori from '@/assets/hori.png';

function BookDescription() {
  return (
    <>
      <BookInfoLayout />

      <div className="flex items-start flex-col mx-[150px] mb-[150px]">
        <h3 className="mb-10 text-4xl">
          제가 React를 배울 때 도움이 많이 된 책을 소개합니다!
        </h3>
        <div className="flex items-center justify-start mb-11">
          <div className="flex justify-center items-center mr-5">
            <img
              src={hori}
              alt="유저 아이콘 이미지"
              className="rounded-[50%] w-[60px] h-[60px] mr-4"
            />
            <span className="text-2xl">유저닉네임</span>
          </div>
          <span className="text-dateColor">게시글 날짜 들어감</span>
        </div>
        <hr className="w-[1530px] text-horizontal" />
      </div>

      <div className="mx-[150px]">
        <p>게시글 내용 나오는곳임 ㅋㅋ</p>
      </div>

      <div className="mx-[150px]">
        <div>
          <span>댓글</span>
          <span>2</span>
        </div>
        <div>
          <span>좋아요</span>
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
      </div>
      <div className="h-[300px]"></div>
      <div></div>
    </>
  );
}

export default BookDescription;
