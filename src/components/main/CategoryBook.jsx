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
        <div className='w-[1140px] my-10 mx-auto'>
        <ul id="tab-panel-1"
            aria-labelledby="tab-1"
            className="flex flex-wrap gap-x-5 gap-y-5">
          <li>
          <RowBookCard />
          </li>
          <li>
          <RowBookCard />
          </li>
          <li>
          <RowBookCard />
          </li>
          <li>
          <RowBookCard />
          </li>
        </ul>
        </div>
      </section>
    </>
  );
}

export default CategoryBook;
