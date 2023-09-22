import { useEffect, useState } from 'react';
import Spinner from '@/components/bookList/Spinner';
import TabButtonList from '@/components/bookList/TabButtonList';
import ColBookCard from '@/components/common/bookCards/ColBookCard';
import SubVisualBanner from '@/components/common/SubVisualBanner';
import { usePbData } from '@/contexts/PbDataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function BookList() {
  const { bookData, isLoading } = usePbData();
  const perPage = 16;

  const [categories] = useState(['all', 'HTML', 'CSS', 'JavaScript', 'React']);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categoryData, setCategoryData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // 카테고리별 데이터 초기화
    const dataByCategory = {};
    for (const category of categories) {
      dataByCategory[category] = bookData.filter((item) =>
        category === 'all' ? true : item.category.includes(category)
      );
    }
    setCategoryData(dataByCategory);
    setSelectedCategory('all');
  }, [bookData, categories]);

  const handleSelectCategory = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    setCurrentPage(1); // 카테고리 변경 시 페이지 초기화
  };

  const handlePageChange = (newPage) => {
    const totalPages = Math.ceil(
      (categoryData[selectedCategory] || []).length / perPage
    );
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <SubVisualBanner title="도서목록" />
      <TabButtonList
        selected={selectedCategory}
        htmlClick={() => handleSelectCategory('HTML')}
        cssClick={() => handleSelectCategory('CSS')}
        reactClick={() => handleSelectCategory('React')}
        javascriptClick={() => handleSelectCategory('JavaScript')}
        allClick={() => handleSelectCategory('all')}
      />

      <div className="w-[1920px] m-auto">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <ul
              id="tab-panel-1"
              aria-labelledby="tab-1"
              className="w-[1200px] m-auto flex flex-wrap gap-x-6 gap-y-10 justify-start mt-16 mb-20"
            >
              {(categoryData[selectedCategory] || [])
                .slice(
                  (currentPage - 1) * perPage,
                  currentPage * perPage
                )
                .map((item) => (
                  <li key={item.id}>
                    <ColBookCard
                      imgSrc={item.book_image_link}
                      imgAlt={item.book_title}
                      nickName={item.expand.user_id[0].nickname}
                      postTitle={item.post_title}
                      bookTitle={item.book_title}
                    />
                  </li>
                ))}
            </ul>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
              <span className="mx-2">
                {currentPage} / {Math.ceil((categoryData[selectedCategory] || []).length / perPage)}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= Math.ceil((categoryData[selectedCategory] || []).length / perPage)}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default BookList;