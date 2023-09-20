import { pb } from '@/api/pocketbase';
import TabButtonList from '@/components/bookList/TabButtonList';
import ColBookCard from '@/components/common/bookCards/ColBookCard';
import SubVisualBanner from '@/components/common/SubVisualBanner';
import { useEffect, useState } from 'react';

function BookList() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    pb.autoCancellation(false);
    async function fetchBooksList() {
      try {
        const allRecord = await pb.collection('posts').getFullList();
        setData(allRecord);
        setFilteredData(allRecord);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBooksList();
  }, []);

  const handleSelectCategory = (selectedCategory) => {
    const newFilteredData = data.filter((item) =>
      item.category.includes(selectedCategory)
    );
    setFilteredData(newFilteredData);
  };

  return (
    <>
      <SubVisualBanner title="도서목록" />
      <TabButtonList
        htmlClick={() => handleSelectCategory('HTML')}
        cssClick={() => handleSelectCategory('CSS')}
        reactClick={() => handleSelectCategory('React')}
        javascriptClick={() => handleSelectCategory('JavaScript')}
        allClick={() => setFilteredData(data)}
      />

      <div className="w-[1920px] m-auto">
        <ul
          id="tab-panel-1"
          aria-labelledby="tab-1"
          className="w-[1200px] m-auto flex flex-wrap gap-x-6 gap-y-10 justify-start mt-16 mb-20"
        >
          {filteredData.map((item) => (
            <li key={item.id}>
              <ColBookCard
                imgSrc={item.book_image_link}
                imgAlt={item.book_title}
                nickName={item.user_id[0]}
                postTitle={item.post_title}
                bookTitle={item.book_title}
                // onClick={}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default BookList;
