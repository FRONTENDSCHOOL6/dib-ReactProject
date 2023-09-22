import { useState } from 'react';
import Spinner from '@/components/bookList/Spinner';
import TabButtonList from '@/components/bookList/TabButtonList';
import ColBookCard from '@/components/common/bookCards/ColBookCard';
import SubVisualBanner from '@/components/common/SubVisualBanner';
import { Link } from 'react-router-dom';
import { usePbData } from '@/contexts/PbDataContext';
import { useAuth } from '@/contexts/AuthContext';
import PocketBase from 'pocketbase';
import { useEffect } from 'react';

function BookList() {
  // const [data, setData] = useState(bookData);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const { bookData, toggleLike } = usePbData();
  const { user } = useAuth();

  const handleLikeToggle = async (postId) => {
    toggleLike(postId);

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

  const handleSelectCategory = (selectedCategory) => {
    const newFilteredData = bookData.filter((item) =>
      item.category.includes(selectedCategory)
    );
    console.log(bookData);
    setFilteredData(newFilteredData);
  };

  const handleHTMLCategory = () => {
    handleSelectCategory('HTML');
    setSelectedCategory('HTML');
    console.log(selectedCategory);
  };

  const handleCSSCategory = (e) => {
    handleSelectCategory(e, 'CSS');
    setSelectedCategory('CSS');
  };

  const handleReactCategory = (e) => {
    handleSelectCategory(e, 'React');
    setSelectedCategory('React');
  };

  const handleJsCategory = (e) => {
    handleSelectCategory(e, 'JavaScript');
    setSelectedCategory('JavaScript');
  };

  return (
    <>
      <SubVisualBanner title="도서목록" />
      <TabButtonList
        selected={selectedCategory}
        htmlClick={() => {
          handleHTMLCategory('HTML');
        }}
        cssClick={() => {
          handleCSSCategory('CSS');
        }}
        reactClick={() => {
          handleReactCategory('JavaScript');
        }}
        javascriptClick={() => {
          handleJsCategory('React');
        }}
        allClick={() => {
          setFilteredData(bookData);
          setSelectedCategory('all');
        }}
      />

      <div className="w-[1920px] m-auto">
        {!isLoading && (
          <ul
            id="tab-panel-1"
            aria-labelledby="tab-1"
            className="w-[1200px] m-auto flex flex-wrap gap-x-6 gap-y-10 justify-start mt-16 mb-20"
          >
            {bookData &&
              bookData.map((item) => (
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
