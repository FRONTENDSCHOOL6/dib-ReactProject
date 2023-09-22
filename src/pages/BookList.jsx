import { useState } from 'react';
import Spinner from '@/components/bookList/Spinner';
import TabButtonList from '@/components/bookList/TabButtonList';
import ColBookCard from '@/components/common/bookCards/ColBookCard';
import SubVisualBanner from '@/components/common/SubVisualBanner';
import { usePbData } from '@/contexts/PbDataContext';
import { useAuth } from '@/contexts/AuthContext';
import PocketBase from 'pocketbase';

function BookList() {
  // const [data, setData] = useState(bookData);
  // const [filteredData, setFilteredData] = useState([]); //useState로 관리 x
  // const [isLoading, setIsLoading] = useState(false);
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

  const handleCSSCategory = () => {
    setSelectedCategory('CSS');
  };

  const handleReactCategory = () => {
    setSelectedCategory('React');
  };

  const handleJsCategory = () => {
    setSelectedCategory('JavaScript');
  };

  return (
    <>
      <SubVisualBanner title="도서목록" />
      <TabButtonList
        selected={selectedCategory}
        htmlClick={handleHTMLCategory}
        cssClick={handleCSSCategory}
        reactClick={handleReactCategory}
        javascriptClick={handleJsCategory}
        allClick={handleAllCategory}
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
