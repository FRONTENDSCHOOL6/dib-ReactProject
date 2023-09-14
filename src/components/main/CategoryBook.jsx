import { Link } from 'react-router-dom';
import CategoryTabButton from './../category/CategoryTabButton';
import HeartButton from './../common/HeartButton';
function CategoryBook() {
  return (
    <>
      <section className="bg-dibCategoryBg text-center relative">
        <h2 className="text-dibBlack text-[40px] not-italic font-normal leading-[normal] tracking-[-1.5px] m-5">
          카테고리별 도서
        </h2>
        <strong className="text-dibBlack text-[16px] not-italic font-normal">
          카테고리별 도서에서 원하는 키워드로 도서를 찾아보세요!
        </strong>
        <CategoryTabButton/>
        <Link to="/bookList" className='absolute top-2 right-32'>
          <img src="/Plus.png" alt="더보기" />
        </Link>
        <div className="w-[1920px] h-[800px] m-auto">
            <ul 
            id="tab-panel-1"
            aria-labelledby="tab-1"
            className="flex flex-wrap gap-10 justify-center mt-20 mb-20">
            <li className="w-[810px] h-[338px] bg-slate-300">도서카드</li>
            <HeartButton/>
            <li className="w-[810px] h-[338px] bg-slate-300">도서카드</li>
            <li className="w-[810px] h-[338px] bg-slate-300">도서카드</li>
            <li className="w-[810px] h-[338px] bg-slate-300">도서카드</li>
            </ul>
    </div>
      </section>
    </>
  ); 
}

export default CategoryBook;
