function ReviewMainText() {
  return (
    <div
      aria-label="본문 작성"
      className="border w-[1050px] h-[730px] flex py-9 px-8 border-black mb-32 m-auto"
    >
      <textarea
        className="w-full h-full border-none outline-none resize-none text-base"
        placeholder="텍스트를 입력하세요..."
        maxLength="1000"
      ></textarea>
    </div>
  );
}

export default ReviewMainText;
