import { useEffect, useState } from 'react';
import ColBookCard from '@/components/common/bookCards/ColBookCard';
import { useAuth } from '@/contexts/AuthContext';
import { pb } from '@/api/pocketbase';
import FavoriteTitle from '@/components/favorite/FavoriteTitle';
import Spinner from '@/components/bookList/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function FavoritePage() {
  const [bookmarks, setBookmarks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const perPage = 16;
  const [currentPage, setCurrentPage] = useState(1);

  const handleBookmarkToggle = async (postId) => {
    console.log(user);
    const updatedBookmarkPosts = [...user.bookmark_posts];
    const postIdIndex = updatedBookmarkPosts.indexOf(postId);
    if (postIdIndex !== -1) {
      updatedBookmarkPosts.splice(postIdIndex, 1);
    } else {
      updatedBookmarkPosts.push(postId);
    }
    const updateUserBookmarkData = {
      bookmark_posts: updatedBookmarkPosts,
    };

    try {
      await pb.collection('users').update(user.id, updateUserBookmarkData);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleLikeToggle = async (postId) => {
    console.log(user);
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
  };

  useEffect(() => {
    async function getUserData() {
      setIsLoading(true);
      if (user) {
        const userIdData = await pb.collection('users').getOne(user.id, {
          expand: 'bookmark_posts',
        });

        const writtenPosts = userIdData.bookmark_posts;

        const reviewData = await pb.collection('posts').getFullList({
          expand: 'user_id',
        });

        const myWrittenReviews = reviewData.filter((review) =>
          writtenPosts.includes(review.id)
        );
        setBookmarks(myWrittenReviews);
      }
      setIsLoading(false);
    }
    getUserData();
  }, [user]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(bookmarks.length / perPage)) {
      setCurrentPage(newPage);
    }
  };

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentItems = bookmarks.slice(startIndex, endIndex);

  return (
    <div className="w-[1920px] m-auto mb-[100px]">
      <FavoriteTitle />
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <ul
              id="tab-panel-1"
              aria-labelledby="tab-1"
              className="w-[1200px] m-auto flex flex-wrap gap-x-6 gap-y-10 justify-start mt-16 mb-20"
            >
              {currentItems.length === 0 ? (
                <p className="w-[1920px] m-auto text-dibGray text-center font-Pretendard text-[20px] font-normal leading-normal tracking-tighter pt-14 pb-14">
                  즐겨찾는 글이 없습니다! <br /> 책갈피를 누르고 즐겨찾기에
                  넣어보세요!
                </p>
              ) : (
                currentItems.map((item) => (
                  <li key={item.id}>
                    <ColBookCard
                      imgSrc={item.book_image_link}
                      imgAlt={item.book_title}
                      userId={item?.expand?.user_id[0]?.id}
                      profileImage={item?.expand?.user_id[0]?.profileImage}
                      nickName={item?.expand?.user_id[0]?.nickname}
                      postTitle={item.post_title}
                      bookTitle={item.book_title}
                      bookmarkClick={() => handleBookmarkToggle(item.id)}
                      bookmarkRander={user?.bookmark_posts?.includes(item.id)}
                      heaetClick={() => handleLikeToggle(item.id)}
                      heartRander={user?.liked_posts?.includes(item.id)}
                      bookID={item.id}
                    />
                  </li>
                ))
              )}
            </ul>
            {currentPage.length > 0 && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <span className="mx-2">
                  {currentPage} / {Math.ceil(bookmarks.length / perPage)}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={
                    currentPage >= Math.ceil(bookmarks.length / perPage)
                  }
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default FavoritePage;
