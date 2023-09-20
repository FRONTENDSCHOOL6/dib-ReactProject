import { Link } from 'react-router-dom';
import CategoryTabButton from './../category/CategoryTabButton';
import RowBookCard from '../common/bookCards/RowBookCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { pb } from '@/api/pocketbase';
function CategoryBook() {
  const [data, setData] = useState([]);

  useEffect(() => {
    pb.autoCancellation(false);
    async function fetchCategory() {
      const CategoryRecords = await pb.collection('posts').getFullList({
        sort: '-created',
      });
      const filteredData = CategoryRecords.slice(0, 4);
      setData(filteredData);
    }
    fetchCategory();
  }, []);
  {
    return (
      <>
        <section className="bg-dibCategoryBg text-center relative w-[1920px] h-[960px] m-auto flex flex-col">
          <h2 className="text-dibBlack text-[32px] not-italic font-normal leading-[normal] tracking-[-1.5px] mt-[60px] mb-[20px]">
            카테고리별 도서
          </h2>
          <strong className="text-dibBlack text-[20px] not-italic font-normal">
            카테고리별 도서에서 원하는 키워드로 도서를 찾아보세요!
          </strong>
          <Link
            to="/bookList"
            className="absolute top-[190px] right-[410px]"
            title="도서목록 더보기"
          >
            <FontAwesomeIcon icon={faPlus} className="w-[28px] h-[28px]" />
          </Link>
          <CategoryTabButton />

          <div className="w-[1140px] my-10 mx-auto">
            <ul
              id="tab-panel-1"
              aria-labelledby="tab-1"
              className="flex flex-wrap gap-x-5 gap-y-5"
            >
              {data.map((item) => (
                <li key={item.id}>
                  <RowBookCard
                    imgSrc={item.book_image_link}
                    imgAlt={item.book_title}
                    nickName={item.user_id[0]}
                    postTitle={item.post_title}
                    bookTitle={item.book_title}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default CategoryBook;
