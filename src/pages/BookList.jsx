import { pb } from '@/api/pocketbase';
import Spinner from '@/components/bookList/Spinner';
import TabButtonList from '@/components/bookList/TabButtonList';
import ColBookCard from '@/components/common/bookCards/ColBookCard';
import SubVisualBanner from '@/components/common/SubVisualBanner';
import { useEffect, useState } from 'react';

function BookList() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    pb.autoCancellation(false);
    async function fetchBooksList() {
      setIsLoading(true); 
      try {
        const allRecord = await pb.collection('posts').getFullList({
          expand : 'user_id',
        });
        setData(allRecord);
        setFilteredData(allRecord);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    fetchBooksList();
  }, []);

  const handleSelectCategory = (e, selectedCategory) => {
    e.preventDefault();
    const newFilteredData = data.filter((item) =>
      item.category.includes(selectedCategory)
    );
    setFilteredData(newFilteredData);
    setSelectedCategory(selectedCategory);
  };

  return (
    <>
      <SubVisualBanner title="도서목록" />
      <TabButtonList 
        selected={selectedCategory} 
        htmlClick={(e) => handleSelectCategory(e, "HTML")} 
        cssClick={(e) => handleSelectCategory(e,"CSS")} 
        reactClick={(e) => handleSelectCategory(e,"React")} 
        javascriptClick={(e) => handleSelectCategory(e,"JavaScript")} 
        allClick={() => {setFilteredData(data);setSelectedCategory("all");}} 
      />

      <div className="w-[1920px] m-auto">
      {isLoading ? (
          <Spinner/>
      ) : (
        <ul
          id="tab-panel-1"
          aria-labelledby="tab-1"
          className="w-[1200px] m-auto flex flex-wrap gap-x-6 gap-y-10 justify-start mt-16 mb-20"
        >
          {filteredData.map((item) => (
            <li key={item.id}>
              <ColBookCard
                bookID={item}
                imgSrc={item.book_image_link}
                imgAlt={item.book_title}
                nickName={item.expand.user_id[0].nickname}
                postTitle={item.post_title}
                bookTitle={item.book_title}
              />
            </li>
          ))}
        </ul>
        )}
      </div>
    </>
  );
}

export default BookList;