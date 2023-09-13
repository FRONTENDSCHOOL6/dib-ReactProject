import { Link } from 'react-router-dom';
function CategoryBook() {
  return (
    <>
      <section className="bg-dibCategoryBg text-center relative">
        <h2 className="text-dibBlack text-[40px] not-italic font-normal leading-[normal] tracking-[-1.5px]">
          카테고리별 도서
        </h2>
        <strong className="text-dibBlack text-[16px] not-italic font-normal">
          카테고리별 도서에서 원하는 키워드로 도서를 찾아보세요!
        </strong>
        <Link to="https://ghost4551.tistory.com/141" className='absolute top-10 right-4'>
          <img src="/Plus.png" alt="더보기" />
        </Link>
        <div className="w-[1920px] m-auto">
            <ul 
            id="tab-panel-1"
            //현재본문과 연결된 버튼이 어떤버튼인지 명시
            aria-labelledby="tab-1"
            className="flex flex-wrap gap-10 justify-start mt-20 mb-20">
            <li className="w-[380px] h-[584px] bg-slate-300">도서카드</li>
            <li className="w-[380px] h-[584px] bg-slate-300">도서카드</li>
            <li className="w-[380px] h-[584px] bg-slate-300">도서카드</li>
            <li className="w-[380px] h-[584px] bg-slate-300">도서카드</li>
            </ul>
    </div>
      </section>
    </>
  );
}

export default CategoryBook;
