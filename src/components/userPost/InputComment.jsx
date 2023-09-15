import hori from '@/assets/hori.png';

function InputComment() {
  return (
    <div className="flex m-auto w-[1200px] h-[130px] justify-between px-2">
      <img
        src={hori}
        alt="유저 아이콘"
        className="w-[50px] h-[50px] rounded-full"
      />
      <div>
        <form method="POST" className="flex flex-col">
          <div className="w-[1100px] h-[55px] border flex justify-center items-center border-commentBox rounded-[25px] mb-[13px]">
            <label htmlFor="comment" className="sr-only">
              댓글 입력공간
            </label>
            <input
              name="comments"
              id="comment"
              placeholder="글자 수 50자 제한"
              className="w-[1050px] h-[32px]"
            />
          </div>
          <button
            type="submit"
            className="w-[130px] h-[40px] bg-primary text-white self-end rounded-[5px]"
          >
            댓글 등록
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputComment;
