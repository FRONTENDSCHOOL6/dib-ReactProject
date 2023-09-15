import { Link } from 'react-router-dom';
import CategoryTabButton from './../category/CategoryTabButton';
import RowBookCard from '../common/bookCards/RowBookCard';
function CategoryBook() {
  return (
    <>
      <section className="bg-dibCategoryBg text-center relative w-[1920px] h-[960px]">
        <h2 className="text-dibBlack text-[40px] not-italic font-normal leading-[normal] tracking-[-1.5px] m-5">
          카테고리별 도서
        </h2>
        <strong className="text-dibBlack text-[16px] not-italic font-normal">
          카테고리별 도서에서 원하는 키워드로 도서를 찾아보세요!
        </strong>
        <CategoryTabButton />
        <Link to="/bookList" className="absolute top-2 right-32">
          <img src="/Plus.png" alt="더보기" />
        </Link>
        <div className="w-[1140px] mx-auto my-10">
          <div className='flex'>
          <RowBookCard />
          <div className="mr-20"></div>
          <RowBookCard />
          </div>
          <div className='flex pt-4'>
          <RowBookCard />
          <div className="mr-20"></div>
          <RowBookCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default CategoryBook;
