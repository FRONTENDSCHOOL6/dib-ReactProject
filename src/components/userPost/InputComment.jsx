import hori from '@/assets/hori.png';

function InputComment() {
  return (
    <div className="flex m-auto w-[1525px] h-[252px] justify-between px-[100px]">
      <img
        src={hori}
        alt="유저 아이콘"
        className="w-[90px] h-[90px] rounded-full"
      />
      <div>
        <form method="POST" className="flex flex-col">
          <div className="w-[1200px] h-[92px] border flex justify-center items-center border-commentBox rounded-[25px] mb-7">
            <label htmlFor="comment" className="sr-only">
              댓글 입력공간
            </label>
            <input
              name="comments"
              id="comment"
              placeholder="글자 수 50자 제한"
              className="w-[1150px] h-[40px]"
            />
          </div>
          <button
            type="submit"
            className="w-[150px] h-[55px] bg-primary text-white self-end rounded-full"
          >
            댓글 등록
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputComment;
