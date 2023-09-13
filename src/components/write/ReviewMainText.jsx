function ReviewMainText() {
  return (
    <div
      aria-label="본문 작성"
      className={`border w-[1235px] h-[730px] flex py-9 px-8 border-black mb-32`}
    >
      {/* <input
        type="text"
        maxLength="1000"
        className="w-[1200px] text-left align-top"
      /> */}
      <textarea
        className="w-full h-full border-none outline-none resize-none"
        placeholder="텍스트를 입력하세요..."
        maxLength="1000"
      ></textarea>
    </div>
  );
}

export default ReviewMainText;
