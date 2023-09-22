import { Link } from 'react-router-dom';

function PostWriteButton() {
  return (
    <div className="w-[268px] h-[60px] ml-auto mr-auto">
      <Link to="/WritePage">
        <button className="flex border rounded-full bg-primary text-white pl-5 h-[60px] text-lg mt-1 ml-auto mr-auto w-[268px] items-center justify-center gap-3">
          <img
            src="/writeIcon.png"
            alt="작성페이지로 이동"
            className="w-[28px] h-[28px]"
          />
          게시글 작성하기
        </button>
      </Link>
    </div>
  );
}

export default PostWriteButton;
