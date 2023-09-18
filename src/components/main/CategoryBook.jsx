import { Link } from 'react-router-dom';
import CategoryTabButton from './../category/CategoryTabButton';
import RowBookCard from '../common/bookCards/RowBookCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
function CategoryBook() {
  return (
    <>
      <section className="bg-dibCategoryBg text-center relative w-[1920px] h-[960px] m-auto flex flex-col">
        <h2 className="text-dibBlack text-[40px] not-italic font-normal leading-[normal] tracking-[-1.5px] mt-[60px]">
          카테고리별 도서
        </h2>
        <strong className="text-dibBlack text-[16px] not-italic font-normal">
          카테고리별 도서에서 원하는 키워드로 도서를 찾아보세요!
        </strong>
        <Link to="/bookList" className="absolute top-[190px] right-[410px]">
          <FontAwesomeIcon icon={faPlus} className="w-[28px] h-[28px]" />
        </Link>
        <CategoryTabButton />

        <div className="w-[1140px] my-10 mx-auto">
          <ul
            id="tab-panel-1"
            aria-labelledby="tab-1"
            className="flex flex-wrap gap-x-5 gap-y-5"
          >
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
