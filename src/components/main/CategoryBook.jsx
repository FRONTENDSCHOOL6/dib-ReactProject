import { Link } from 'react-router-dom';
import RowBookCard from '../common/bookCards/RowBookCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { pb } from '@/api/pocketbase';
import CategoryTabButtonList from './../category/CategoryTabButton';
import Spinner from '../bookList/Spinner';
import PropTypes from 'prop-types';
import { useAuth } from '@/contexts/AuthContext';
import { usePbData } from '@/contexts/PbDataContext';

function CategoryBook({ isLoading, setIsLoading }) {
  const [data, setData] = useState([]);
  const { user } = useAuth();
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const { bookData } = usePbData();

  useEffect(() => {
    pb.autoCancellation(false);
    async function fetchCategory() {
      const CategoryRecords = await pb.collection('posts').getFullList({
        sort: '-created',
        expand: 'user_id',
      });
      setData(CategoryRecords);
      setFilteredData(CategoryRecords.slice(0, 4));
      setIsLoading(false);
    }
    fetchCategory();
  }, []);

  const handleBookmarkToggle = async (postId) => {
    if (!user) {
      return;
    } else {
      const updataBookmarkPosts = [...user.bookmark_posts];
      const postIdIndex = updataBookmarkPosts.indexOf(postId);
      if (postIdIndex !== -1) {
        updataBookmarkPosts.splice(postIdIndex, 1);
      } else {
        updataBookmarkPosts.push(postId);
      }
      const updateUserBookmarkData = {
        bookmark_posts: updataBookmarkPosts,
      };

      try {
        await pb.collection('users').update(user.id, updateUserBookmarkData);
      } catch (error) {
        throw new Error(error.message);
      }
    }
  };

  const handleLikeToggle = async (postId) => {
    if (!user) {
      return;
    } else {
      const updatedLikedPosts = [...user.liked_posts];
      const postIdIndex = updatedLikedPosts.indexOf(postId);
      if (postIdIndex !== -1) {
        updatedLikedPosts.splice(postIdIndex, 1);
      } else {
        updatedLikedPosts.push(postId);
      }
      const updatedUserData = {
        liked_posts: updatedLikedPosts,
      };

      try {
        await pb.collection('users').update(user.id, updatedUserData);
      } catch (error) {
        throw new Error(error.message);
      }
    }
  };

  const handleSelectCategory = (e, selectedCategory) => {
    e.preventDefault();
    const newFilteredData = data
      .filter((item) => item.category.includes(selectedCategory))
      .slice(0, 4); // 선택한 카테고리에 맞는 도서 중 최신순으로 4개만 필터링
    setFilteredData(newFilteredData);
  };

  const handleHTMLCategory = (e) => {
    handleSelectCategory(e, 'HTML');
    setSelectedCategory('HTML');
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
      <section className="bg-dibCategoryBg text-center relative w-[1920px] h-[960px] m-auto flex flex-col pb-10">
        <h2 className="text-dibBlack text-[32px] not-italic font-normal leading-[normal] tracking-[-1.5px] mt-[60px] mb-[20px]">
          카테고리별 도서
        </h2>
        <strong className="text-dibBlack text-[20px] not-italic font-normal">
          카테고리별 도서에서 원하는 키워드로 도서를 찾아보세요!
        </strong>
        <Link
          to="/bookList"
          className="absolute top-[185px] right-[410px]"
          title="도서목록 더보기"
        >
          <FontAwesomeIcon icon={faPlus} className="w-[28px] h-[28px]" />
        </Link>
        <CategoryTabButtonList
          selected={selectedCategory}
          htmlClick={handleHTMLCategory}
          cssClick={handleCSSCategory}
          reactClick={handleReactCategory}
          javascriptClick={handleJsCategory}
          allClick={() => {
            setFilteredData(data);
            setSelectedCategory('all');
          }}
        />

        <div className="w-[1140px] my-10 mx-auto">
          {isLoading ? (
            <Spinner />
          ) : (
            <ul
              id="tab-panel-1"
              aria-labelledby="tab-1"
              className="flex flex-wrap gap-x-5 gap-y-5 justify-center"
            >
              {filteredData &&
                filteredData.map((item) => (
                  <li key={item.id}>
                    <RowBookCard
                      bookID={item.id}
                      imgSrc={item.book_image_link}
                      imgAlt={item.book_title}
                      nickName={item.expand.user_id[0].nickname}
                      postTitle={item.post_title}
                      bookTitle={item.book_title}
                      bookmarkClick={() => handleBookmarkToggle(item.id)}
                      bookmarkRander={
                        user ? user.bookmark_posts.includes(item.id) : false
                      }
                      heaetClick={() => handleLikeToggle(item.id)}
                      heartRander={
                        user ? user.liked_posts.includes(item.id) : false
                      }
                    />
                  </li>
                ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

export default CategoryBook;

CategoryBook.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};
