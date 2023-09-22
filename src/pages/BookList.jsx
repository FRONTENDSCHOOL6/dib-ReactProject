import { useEffect, useState } from 'react';
import Spinner from '@/components/bookList/Spinner';
import TabButtonList from '@/components/bookList/TabButtonList';
import ColBookCard from '@/components/common/bookCards/ColBookCard';
import SubVisualBanner from '@/components/common/SubVisualBanner';
import { usePbData } from '@/contexts/PbDataContext';
import { useAuth } from '@/contexts/AuthContext';
import PocketBase from 'pocketbase';

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
  const { bookData, isLoading } = usePbData();
  const [selectedCategory, setSelectedCategory] = useState('all');
  // 파생상태로 관리한다.
  const filteredData = bookData?.filter((book) => {
    if (selectedCategory === 'all') {
      return book;
    } else {
      return book.category.includes(selectedCategory);
    }
  });
  const { user } = useAuth();

  const handleLikeToggle = async (postId) => {
    // toggleLike(postId);

    const updatedLikedPosts = [...user.liked_posts];
    const postIdIndex = updatedLikedPosts.indexOf(postId);
    if (postIdIndex !== -1) {
      updatedLikedPosts.splice(postIdIndex, 1);
    } else {
      updatedLikedPosts.push(postId);
    }

    const pb = new PocketBase('https://db-dib.pockethost.io');
    const updatedUserData = {
      liked_posts: updatedLikedPosts,
    };

    try {
      const record = await pb
        .collection('users')
        .update(user.id, updatedUserData);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleAllCategory = () => {
    setSelectedCategory('all');
  };

  const handleHTMLCategory = () => {
    setSelectedCategory('HTML');
  };

  const handlePageChange = (newPage) => {
    const totalPages = Math.ceil(
      (categoryData[selectedCategory] || []).length / perPage
    );
    setFilteredData(newFilteredData);
    setSelectedCategory(selectedCategory);
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
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
          <ul
            id="tab-panel-1"
            aria-labelledby="tab-1"
            className="w-[1200px] m-auto flex flex-wrap gap-x-6 gap-y-10 justify-start mt-16 mb-20"
          >
            {filteredData &&
              filteredData.map((item) => (
                <li key={item.id}>
                  <ColBookCard
                    imgSrc={item.book_image_link}
                    imgAlt={item.book_title}
                    nickName={item.expand.user_id[0].nickname}
                    postTitle={item.post_title}
                    bookTitle={item.book_title}
                    onClick={() => handleLikeToggle(item.id)}
                    isLender={user.liked_posts.includes(item.id)}
                    bookID={item.id}
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